import { IShow2 } from "../utils/IShow";

export default function ListAShow(oneShow: IShow2) {
  return (
    <div className="showCard">
      <h1>{oneShow.name}</h1>
      <h2>{oneShow.genres}, {oneShow.status}, {oneShow.rating.average}, {oneShow.runtime}</h2>
      {oneShow.image.medium !== undefined && <img src={oneShow.image.medium} />}
      <p>{(oneShow.summary)}</p>
    </div>
  );
}
