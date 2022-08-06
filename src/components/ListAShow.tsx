import { IShow } from "../utils/Interfaces";
import removeThePsAndDs from "../utils/removeThePsAndDsShows";

export default function ListAShow(oneShow: IShow): JSX.Element {
  return (
    <div className="showCard">
      <h1>{oneShow.name}</h1>
      <h2>
        {oneShow.genres}, {oneShow.status}, {oneShow.rating.average},{" "}
        {oneShow.runtime}
      </h2>
      {oneShow.image.medium !== undefined && (
        <img src={oneShow.image.medium} alt="from show." />
      )}
      <p>{removeThePsAndDs(oneShow)}</p>
    </div>
  );
}
