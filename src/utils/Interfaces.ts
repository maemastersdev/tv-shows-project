import React from "react";

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: { average: null | number };
  image: null | {
    medium: string;
    original: string;
  };
  summary: null | string;
  _links: { self: { href: string } };
}

export interface ISelectShows {
  setShowID: React.Dispatch<React.SetStateAction<number | null>>;
  showID: number | null;
  shows: IShow[];
}

export interface IShow {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  genres: string[];
  status: string;
  rating: { average: null | number };
  runtime: null | number;
}

export interface ISearchText {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
