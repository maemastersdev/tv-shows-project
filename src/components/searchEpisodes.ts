import { IEpisode } from "../utils/IEpisode";

export function textInputFilter(oneEpisode: IEpisode, text: string): boolean {
  const searchEpisodeName: string = oneEpisode.name;
  const searchEpisodeSummary: string = oneEpisode.summary ?? "";
  if (
    searchEpisodeName.toLowerCase().includes(text.toLowerCase()) ||
    searchEpisodeSummary.toLowerCase().includes(text.toLowerCase())
  ) {
    return true;
  }
  return false;
}
