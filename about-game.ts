export type TAboutGame = {
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

export const aboutGame: TAboutGame = {
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
