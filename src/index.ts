import { soulsLevels, TSoulsLevel, TSoulsLevels } from "./soul-levels";
import { reviews, TReviews } from "./reviews";
import { aboutGame, TAboutGame } from "./about-game";

// Get all soul level information
function allLevels(): TSoulsLevels {
  return soulsLevels;
}

function nextLevel(level: number): TSoulsLevel {
  const wholeLevel = Math.round(level);
  if (wholeLevel < 1 || wholeLevel > 714) {
    return soulsLevels[0];
  } else {
    return soulsLevels[wholeLevel + 1];
  }
}

function runesTo(level: number): number {
  const wholeLevel = Math.round(level);
  return runesFromTo(1, wholeLevel);
}

function runesFromTo(levelFrom: number, levelTo: number): number {
  const wholeLevelFrom = Math.round(levelFrom);
  const wholeLevelTo = Math.round(levelTo);

  if (
    wholeLevelFrom < 1 ||
    wholeLevelFrom > 714 ||
    wholeLevelTo < 1 ||
    wholeLevelTo > 714
  ) {
    return -1;
  }

  let totalFrom = soulsLevels[wholeLevelFrom].total;
  let totalTo = soulsLevels[wholeLevelTo].total;

  if (levelTo <= wholeLevelFrom) {
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
