const fs = require('fs');
const path = require('path');

const gmGamesBuilder = `const fs = require('fs');
const path = require('path');

console.log("Generating 1,100+ GM Opening Games dataset...");

// List of Grandmaster Legends for games pairing
const GM_PLAYERS = [
  { name: "Garry Kasparov", elo: 2812 },
  { name: "Magnus Carlsen", elo: 2882 },
  { name: "Anatoly Karpov", elo: 2780 },
  { name: "Bobby Fischer", elo: 2785 },
  { name: "Vladimir Kramnik", elo: 2801 },
  { name: "Viswanathan Anand", elo: 2795 },
  { name: "Hikaru Nakamura", elo: 2802 },
  { name: "Fabiano Caruana", elo: 2828 },
  { name: "Mikhail Tal", elo: 2705 },
  { name: "Mikhail Botvinnik", elo: 2720 },
  { name: "Alexander Alekhine", elo: 2690 },
  { name: "José Raúl Capablanca", elo: 2725 },
  { name: "Boris Spassky", elo: 2690 },
  { name: "Viktor Korchnoi", elo: 2695 },
  { name: "Tigran Petrosian", elo: 2680 },
  { name: "Maxime Vachier-Lagrave", elo: 2785 },
  { name: "Levon Aronian", elo: 2805 },
  { name: "Ding Liren", elo: 2816 },
  { name: "Ian Nepomniachtchi", elo: 2795 },
  { name: "Alireza Firouzja", elo: 2804 },
  { name: "Anish Giri", elo: 2776 },
  { name: "Wesley So", elo: 2780 },
  { name: "Shakhriyar Mamedyarov", elo: 2801 },
  { name: "Peter Svidler", elo: 2765 },
  { name: "Alexander Grischuk", elo: 2777 }
];

const FAMOUS_EVENTS = [
  "World Chess Championship Match",
  "Candidates Tournament",
  "Tata Steel Masters (Wijk aan Zee)",
  "Sinquefield Cup (St. Louis)",
  "Norway Chess",
  "Linares Super Grandmaster Tournament",
  "FIDE World Cup",
  "Biel Chess Festival",
  "Dortmund Sparkassen Chess Meeting",
  "Reykjavik Open",
  "FIDE Grand Prix",
  "Olympiad Board 1"
];

// Read OPENING_FAMILIES from openingsMasterData.ts
const masterData = require('../src/data/openingsMasterData.ts');

`;

console.log("GM games builder ready");
