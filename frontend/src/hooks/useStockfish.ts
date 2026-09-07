import { useEffect, useRef, useState, useCallback } from 'react';

export interface StockfishEval {
  depth: number;
  cp: number | null;
  mate: number | null;
  pv: string;
  bestMove: string | null;
  ponder: string | null;
  isAnalyzing: boolean;
  nodes: number;
  nps: number;
  time: number;
}

const DEFAULT_EVAL: StockfishEval = {
  depth: 0,
  cp: 0,
  mate: null,
  pv: '',
  bestMove: null,
  ponder: null,
  isAnalyzing: false,
  nodes: 0,
  nps: 0,
  time: 0,
};

export function useStockfish(fen: string, targetDepth = 18) {
  const workerRef = useRef<Worker | null>(null);
  const [evaluation, setEvaluation] = useState<StockfishEval>(DEFAULT_EVAL);
  const [isEngineReady, setIsEngineReady] = useState(false);
  const currentFenRef = useRef<string>(fen);

  // Initialize worker once
  useEffect(() => {
    const worker = new Worker(
      new URL('../workers/stockfish.worker.ts', import.meta.url),
      { type: 'module' }
    );
    workerRef.current = worker;

    worker.onmessage = (event) => {
      const data = event.data;

      if (data.type === 'status' && data.ready) {
        setIsEngineReady(true);
      } else if (data.type === 'evaluation') {
        setEvaluation((prev) => ({
          ...prev,
          depth: data.depth ?? prev.depth,
          cp: data.cp ?? prev.cp,
          mate: data.mate ?? prev.mate,
          pv: data.pv || prev.pv,
          nodes: data.nodes ?? prev.nodes,
          nps: data.nps ?? prev.nps,
          time: data.time ?? prev.time,
          isAnalyzing: (data.depth ?? 0) < targetDepth,
        }));
      } else if (data.type === 'bestmove') {
        setEvaluation((prev) => ({
          ...prev,
          bestMove: data.bestMove,
          ponder: data.ponder || null,
          isAnalyzing: false,
        }));
      }
    };

    worker.postMessage({ command: 'init' });

    return () => {
      worker.postMessage({ command: 'stop' });
      worker.terminate();
    };
  }, []);

  // Re-analyze whenever FEN or depth changes
  const analyzeFen = useCallback(
    (currentFen: string, depth: number) => {
      if (!workerRef.current) return;
      currentFenRef.current = currentFen;
      setEvaluation((prev) => ({
        ...prev,
        depth: 0,
        isAnalyzing: true,
        bestMove: null,
        ponder: null,
      }));
      workerRef.current.postMessage({
        command: 'position',
        fen: currentFen,
        depth,
      });
    },
    []
  );

  const stopAnalysis = useCallback(() => {
    if (!workerRef.current) return;
    workerRef.current.postMessage({ command: 'stop' });
    setEvaluation((prev) => ({ ...prev, isAnalyzing: false }));
  }, []);

  const newGame = useCallback(() => {
    if (!workerRef.current) return;
    workerRef.current.postMessage({ command: 'newgame' });
    setEvaluation(DEFAULT_EVAL);
  }, []);

  useEffect(() => {
    if (fen && isEngineReady) {
      analyzeFen(fen, targetDepth);
    }
  }, [fen, isEngineReady, targetDepth, analyzeFen]);

  return {
    evaluation,
    isEngineReady,
    analyzeFen,
    stopAnalysis,
    newGame,
  };
}
