export interface IShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: null | number;
  averageRuntime: number;
  premiered: string;
  ended?: null | string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  },
  rating: { average: null | number };
  weight: number;
  network: null | {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    },
    officialSite:  null | string;
  },
  webchannel: null | {
    id: number;
    name: string;
    country: null | {
      name: string;
      code: string;
      timezone: string;
    },
    officialSite: null | string;
  },
  dvdCountry: null | string;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: null | string;
  },
  image: {
    medium: string;
    original: string;
  },
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    },
    previousepisode: {
      href: string;
    }
  }
}

