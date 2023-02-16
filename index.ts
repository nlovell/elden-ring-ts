import { soulsLevels, TSoulsLevel, TSoulsLevels } from "./soul-levels";
import { reviews, TReviews } from "./reviews";

// Get all soul level information
function allLevels(): TSoulsLevels {
  return soulsLevels;
}

function nextLevel(lvl: number): TSoulsLevel {
  if (lvl < 1 || lvl > 714) {
    return soulsLevels[0];
  } else {
    return soulsLevels[lvl + 1];
  }
}

function runesTo(lvl: number): number {
  return runesFromTo(1, lvl);
}

function runesFromTo(lvlFrom: number, lvlTo: number): number {
  if (lvlFrom < 1 || lvlFrom > 714 || lvlTo < 1 || lvlTo > 714) {
    return -1;
  } else {
    if (lvlTo <= lvlFrom) {
      return -1;
    } else {
      let totalFrom = soulsLevels[lvlFrom].total;
      let totalTo = soulsLevels[lvlTo].total;

      return totalTo - totalFrom;
    }
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
