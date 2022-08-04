import removeThePs from "../utils/removeThePs";
import { IEpisode } from "../utils/IEpisode";
import { createEpisodeCode } from "./createEpisodeCode";

export default function ListAnEpisode(oneEpisode: IEpisode) {
    return (
      <div className="episodeCard">
        <h1>{oneEpisode.name}</h1>
        <h2>{createEpisodeCode(oneEpisode)}</h2>
        {oneEpisode.image !== null && <img src={oneEpisode.image.medium} />}
        <p>{removeThePs(oneEpisode)}</p>
      </div>
    );
  }
  