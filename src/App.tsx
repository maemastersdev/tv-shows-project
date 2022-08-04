import ListAllEpisodes from "./components/ListAllEpisodes";
import shows from "./showsData.json";

function App(): JSX.Element {
  return (
    <>
      <h1> TV SHOW </h1>
      <ListAllEpisodes />
    </>
  );
}

export default App;
