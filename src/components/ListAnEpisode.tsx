import removeThePs from "../utils/removeThePs";
import { IEpisode } from "../utils/Interfaces";
import { createEpisodeCode } from "./createEpisodeCode";

export default function ListAnEpisode(oneEpisode: IEpisode): JSX.Element {
  return (
    <div className="episodeCard">
      <h1>{oneEpisode.name}</h1>
      <h2>{createEpisodeCode(oneEpisode)}</h2>
      {oneEpisode.image !== null && <img src={oneEpisode.image.medium} alt = "from Episode"/>}
      <p>{removeThePs(oneEpisode)}</p>
    </div>
  );
}
