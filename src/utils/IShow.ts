export interface IShow {
    id: number;
    name: string;
    image: {
        medium: string;
        original: string;
    },
    summary: string;
    genres: string[];
    status: string;
    rating: { average: null | number };
    runtime: null | number;
}