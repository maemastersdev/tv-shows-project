import { IEpisode } from "./IEpisode";

export default function removeThePs(oneEpisode:IEpisode) {
    if (oneEpisode.summary != null) {
        oneEpisode.summary = oneEpisode.summary.replace("<p>","")
        oneEpisode.summary = oneEpisode.summary.replace("</p>","")}
    return oneEpisode.summary;
}