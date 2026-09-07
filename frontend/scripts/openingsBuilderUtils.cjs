// Builder script for 200+ deep opening lines, move purpose explanations, and GM games
const fs = require('fs');
const path = require('path');
const { Chess } = require('chess.js');

console.log("Starting 200+ Deep Openings Master Builder...");

// Helper to validate and get moves
function validateMoves(moveList, openingName) {
  const chess = new Chess();
  for (let i = 0; i < moveList.length; i++) {
    const m = moveList[i];
    try {
      const res = chess.move(m);
      if (!res) {
        throw new Error(`Invalid move "${m}" at ply ${i} in "${openingName}"`);
      }
    } catch (e) {
      throw new Error(`Error executing move "${m}" at ply ${i} in "${openingName}": ${e.message}`);
    }
  }
  return true;
}

// Generate Move Purpose Explanations for a variation
function generateExplanations(moves, varName, themes, whitePlan, blackPlan) {
  const chess = new Chess();
  return moves.map((mv, ply) => {
    const isWhite = ply % 2 === 0;
    const color = isWhite ? 'white' : 'black';
    const moveNum = Math.floor(ply / 2) + 1;
    const tag = isWhite ? `${moveNum}. ${mv}` : `${moveNum}... ${mv}`;
    chess.move(mv);
    const theme = themes[ply % themes.length] || 'Central control and positional harmony';

    let purpose = '';
    let concept = '';

    if (ply === 0) {
      purpose = `${tag}: White stakes an immediate claim in the center, seizing vital space and opening diagonal pathways.`;
      concept = 'Classical central occupation and early initiative.';
    } else if (ply === 1) {
      purpose = `${tag}: Black dynamically disputes White's central dominance and establishes early structural asymmetry.`;
      concept = 'Counterplay against White center.';
    } else if (ply === 2 || ply === 3) {
      purpose = `${tag}: Rapid minor piece development contesting key central outposts in the ${varName}.`;
      concept = 'Piece development and central pressure.';
    } else if (ply === 4 || ply === 5) {
      purpose = `${tag}: Direct central pawn challenge, defining the central tension and spatial boundaries.`;
      concept = theme;
    } else if (mv === 'O-O' || mv === 'O-O-O') {
      purpose = `${tag}: ${isWhite ? 'White' : 'Black'} secures king safety and activates the rook along central or semi-open files.`;
      concept = 'King safety and rook activation.';
    } else if (mv.includes('x')) {
      purpose = `${tag}: Strategic capture altering the pawn structure and opening lines for active piece coordination.`;
      concept = 'Tactical execution & structure resolution.';
    } else if (mv.includes('+')) {
      purpose = `${tag}: Forcing check disrupting the opponent's defensive harmony and seizing tempo.`;
      concept = 'Initiative & tactical pressure.';
    } else {
      purpose = `${tag}: ${isWhite ? 'White' : 'Black'} improves piece activity and harmonizes with the overarching plan: ${isWhite ? whitePlan : blackPlan}.`;
      concept = `${theme} — ${isWhite ? 'White initiative' : 'Black counterstrike'}.`;
    }

    return {
      san: mv,
      ply: ply + 1,
      color,
      purpose,
      strategicConcept: concept,
      tacticalThemes: [theme],
      grandmasterTip: `In the ${varName}, precise move order and handling of ${theme} is paramount.`
    };
  });
}

module.exports = {
  validateMoves,
  generateExplanations
};
