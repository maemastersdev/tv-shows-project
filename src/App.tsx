import ListAllEpisodes from "./components/ListEpisodes";
import episodes from "./tvShowsData.json";

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  return (
    <>
      <h1> TV SHOW </h1>
      <ListAllEpisodes />
    </>
  );
}

export default App;
