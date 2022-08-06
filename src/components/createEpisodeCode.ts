import { IEpisode } from "../utils/Interfaces";

export function createEpisodeCode(oneEpisode: IEpisode) {
  const seasonCode = oneEpisode.season.toString().padStart(2, "0");
  const episodeCode = oneEpisode.number.toString().padStart(2, "0");
  return `S${seasonCode}E${episodeCode}`;
}
