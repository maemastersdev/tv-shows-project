import { IEpisode } from "./Interfaces";

export default function removeThePsAndDs(oneEpisode: IEpisode): string | null {
  if (oneEpisode.summary != null) {
    oneEpisode.summary = oneEpisode.summary.replace("<p>", "");
    oneEpisode.summary = oneEpisode.summary.replace("</p>", "");
  }
  return oneEpisode.summary;
}
