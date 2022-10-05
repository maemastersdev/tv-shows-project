import { IEpisode, ISelectShows, ISearchText } from "../utils/Interfaces";
import { textInputFilter } from "./searchEpisodes";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ListAnEpisode from "./ListAnEpisode";

interface IListOfEpisodes {
  ISelectShows: ISelectShows;
  ISearchText: ISearchText;
}

export function ListAllEpisodes({
  ISelectShows: { showID, setShowID },
  ISearchText: { text, setText },
}: IListOfEpisodes): JSX.Element {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${showID}/episodes`)
      .then((res) => {
        setEpisodes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // [] to prevent constant re-render (( tells useEffect to call function ONLY after FIRST render ))
    // with no second arg, function will be called after EVERY render of the component
    // [showID] function will be called after first render, AND after either showID change
  }, [showID]);

  const searchedEpisodeData: IEpisode[] = episodes.filter((oneEpisode) =>
    textInputFilter(oneEpisode, text)
  );

  const ListedAllEpisodes = searchedEpisodeData.map(ListAnEpisode);

  function handleBackToShows() {
    setShowID(null);
  }

  return (
    <>
      <h1 onClick={handleBackToShows}> TV SHOWS APP</h1>
      <hr></hr>
      <input
        className="searchBar"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        placeholder="Search Episodes"
      />

      <button onClick={handleBackToShows}>Back to shows!</button>
      <p>
        {" "}
        Showing {ListedAllEpisodes.length} of {ListedAllEpisodes.length} shows{" "}
      </p>
      {ListedAllEpisodes}
    </>
  );
}

export default ListAllEpisodes;
