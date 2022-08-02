import { IEpisode } from "../utils/IEpisode";
import { textInputFilter } from "./searchEpisodes";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export function ListAllEpisodes(): JSX.Element {
  
  function FetchData(){

    const [episodes, setEpisodes] = useState<IEpisode[]>([])

     useEffect(() => {
        axios
            .get("https://api.tvmaze.com/shows/82/episodes")
            .then(res => {
                setEpisodes(res.data) 
            }) 
            .catch(err => {
                console.log(err)
            })
              
    })
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
      {oneEpisode.image !== null&& <img src={oneEpisode.image.medium} />}
      <p>{oneEpisode.summary}</p>
    </div>
  );
}

function createEpisodeCode(oneEpisode: IEpisode) {
  const seasonCode = oneEpisode.season.toString().padStart(2, "0");
  const episodeCode = oneEpisode.number.toString().padStart(2, "0");
  return `S${seasonCode}E${episodeCode}`;
}

export default ListAllEpisodes;
