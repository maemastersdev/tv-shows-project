import ListAllEpisodes from "./components/ListAllEpisodes";
import { ListAllShows } from "./components/ListAllShows";

function App(): JSX.Element {
  return (
    <>
      <h1> TV SHOW </h1>
      <ListAllShows />
      <ListAllEpisodes />
      
    </>
  );
}

export default App;
