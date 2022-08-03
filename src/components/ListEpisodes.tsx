import { IEpisode } from "../utils/IEpisode";
import { textInputFilter } from "./searchEpisodes";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import removeThePs from "../utils/removeThePs";

interface IShow {
  title: string;
  ID: string;
}

export function ShowSelector(): JSX.Element {
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

  return (
    <div>
      <select
        placeholder={selectorPlaceholder}
        onChange={(e) => handleSelectShow(e.target.value)}
      >
        {arrayOfShows.map((oneShow) => (
          <option key={oneShow.ID}> {oneShow.title} </option>
        ))}
      </select>
    </div>
  );
}

export function ListAllEpisodes(): JSX.Element {
  function FetchData() {
    const [episodes, setEpisodes] = useState<IEpisode[]>([]);

    useEffect(() => {
      axios
        .get(`https://api.tvmaze.com/shows/82/episodes`)
        .then((res) => {
          setEpisodes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return episodes;
  }

  const episodes = FetchData();

  const [text, setText] = useState("");
  const searchedEpisodeData: IEpisode[] = episodes.filter((oneEpisode) =>
    textInputFilter(oneEpisode, text)
  );

  const ListedAllEpisodes = searchedEpisodeData.map(ListAnEpisode);

  return (
    <>
      <ShowSelector />
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

function ListAnEpisode(oneEpisode: IEpisode) {
  return (
    <div className="episodeCard">
      <h1>{oneEpisode.name}</h1>
      <h2>{createEpisodeCode(oneEpisode)}</h2>
      {oneEpisode.image !== null && <img src={oneEpisode.image.medium} />}
      <p>{removeThePs(oneEpisode)}</p>
    </div>
  );
}

function createEpisodeCode(oneEpisode: IEpisode) {
  const seasonCode = oneEpisode.season.toString().padStart(2, "0");
  const episodeCode = oneEpisode.number.toString().padStart(2, "0");
  return `S${seasonCode}E${episodeCode}`;
}

export default ListAllEpisodes;
