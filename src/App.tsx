import { useState } from "react";
import ListAllEpisodes from "./components/ListAllEpisodes";
import { ListAllShows } from "./components/ListAllShows";

function App(): JSX.Element {
  // create a useState for showID, null or a number, initalise as null.
  const [showID, setShowID] = useState<number | null>(null);
  const [text, setText] = useState("");

  return (
    <>
      {showID === null && (
        <ListAllShows
          ISelectShows={{ showID, setShowID }}
          ISearchText={{ text, setText }}
        />
      )}

      {showID !== null && (
        <ListAllEpisodes
          ISearchText={{ text, setText }}
          ISelectShows={{ showID, setShowID }}
        />
      )}
    </>
  );
}

export default App;
