import { IShow } from "../utils/IShow";

export default function ListAShow(oneShow: IShow) {
  return (
    <div className="showCard">
      <h1>{oneShow.name}</h1>
      <h2>{oneShow.genres}, {oneShow.status}, {oneShow.rating}, {oneShow.runtime}</h2>
      {oneShow.image !== null && <img src={oneShow.image.medium} />}
      <p>{(oneShow.summary)}</p>
    </div>
  );
}
