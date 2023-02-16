import { soulsLevels, TSoulsLevel, TSoulsLevels } from "./soul-levels";
import { reviews, TReviews } from "./reviews";
import { aboutGame, TAboutGame } from "./about-game";

// Get all soul level information
function allLevels(): TSoulsLevels {
  return soulsLevels;
}

function nextLevel(level: number): TSoulsLevel {
  if (level < 1 || level > 714) {
    return soulsLevels[0];
  } else {
    return soulsLevels[level + 1];
  }
}

function runesTo(level: number): number {
  return runesFromTo(1, level);
}

function runesFromTo(levelFrom: number, levelTo: number): number {
  if (levelFrom < 1 || levelFrom > 714 || levelTo < 1 || levelTo > 714) {
    return -1;
  }

  let totalFrom = soulsLevels[levelFrom].total;
  let totalTo = soulsLevels[levelTo].total;

  if (levelTo <= levelFrom) {
    return totalFrom - totalTo;
  } else {
    return totalTo - totalFrom;
  }
}

function ratings(): TReviews {
  return reviews;
}

function info(): TAboutGame {
  return aboutGame;
}

let eldenring = {
  allLevels,
  nextLevel,
  runesTo,
  runesFromTo,
  ratings,
  info,
};

module.exports = eldenring;
