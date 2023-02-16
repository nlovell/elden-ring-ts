import { soulsLevels, TSoulsLevel, TSoulsLevels } from "./soul-levels";
import { reviews, TReviews } from "./reviews";

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

type aboutGame = {
  title: string;
  genre: string;
  release: string;
  developer: string;
  platforms: string[];
  awards: string[];
  writers: string[];
  directors: string[];
  composers: string[];
  publishers: string[];
};

function info(): aboutGame {
  return {
    title: "Elden Ring",
    genre: "Action Role-Playing",
    release: "February 25, 2022",
    developer: "FromSoftware Inc",
    platforms: [
      "PlayStation 4",
      "Xbox Series X and Series S",
      "Xbox One",
      "PlayStation 5",
      "Microsoft Windows",
    ],
    awards: ["The Game Award for Most Anticipated Game"],
    directors: ["Hidetaka Miyazaki", "Yui Tanimura"],
    writers: ["George R. R. Martin", "Hidetaka Miyazaki"],
    composers: [
      "Yuka Kitamura",
      "Tsukasa Saitoh",
      "Yoshimi Kudō",
      "Tai Tomisawa",
      "Shoi Miyazawa",
    ],
    publishers: [
      "FromSoftware Inc",
      "BANDAI NAMCO",
      "Namco Bandai Games America Inc",
    ],
  };
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
