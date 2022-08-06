import { IShow } from "../utils/Interfaces";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ListAShow from "./ListAShow";
import showsData from "../showsData.json";
import { showTextInputFilter } from "./searchShows";

export function ListAllShows(): JSX.Element {
  

  const [searchText, setSearchText] = useState("");
  const searchedShowData: IShow[] = showsData.filter((oneShow) =>
    showTextInputFilter(oneShow, searchText)
  );

  const ListedAllShows = searchedShowData.map(ListAShow);

  return (
    <>
      <input
        className="showssearchBar"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />

      {ListedAllShows}
    </>
  );
}

