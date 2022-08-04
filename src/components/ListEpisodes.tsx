import { IEpisode } from "../utils/IEpisode";
import { IShow } from "../utils/IShow";
import { textInputFilter } from "./searchEpisodes";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ListAnEpisode from "./ListAnEpisode";
import removeThePs from "../utils/removeThePs";

export function ListAllEpisodes(): JSX.Element {
  const [selectorPlaceholder, setSelectorPlaceholder] =
    useState("Select a show");
  const [showID, setShowID] = useState<string>("82");

  const arrayOfShows: IShow[] = [
    { title: "Game of Thrones", ID: "82" },
    { title: "The Simpsons", ID: "83" },
  ];

  function handleSelectShow(showName: string) {
    const selectedShow = arrayOfShows.find((show) => show.title === showName);
    if (selectedShow) {
      setShowID(selectedShow.ID);
      console.log(showID);
    }
  }

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

  const [text, setText] = useState("");
  const searchedEpisodeData: IEpisode[] = episodes.filter((oneEpisode) =>
    textInputFilter(oneEpisode, text)
  );

  const ListedAllEpisodes = searchedEpisodeData.map(ListAnEpisode);

  return (
    <>
      <div>
        <p>selected show id is: {showID}</p>
        <select
          placeholder={selectorPlaceholder}
          onChange={(e) => handleSelectShow(e.target.value)}
        >
          {arrayOfShows.map((oneShow) => (
            <option key={oneShow.ID}> {oneShow.title} </option>
          ))}
        </select>
      </div>
      <hr></hr>
      <input
        className="searchBar"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      {ListedAllEpisodes}
    </>
  );
}

export default ListAllEpisodes;
