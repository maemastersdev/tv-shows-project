import { IShow, ISearchText, ISelectShows } from "../utils/Interfaces";
import ListAShow from "./ListAShow";
import showsData from "../showsData.json";
import { showTextInputFilter } from "./searchShows";

interface IListOfShows {
  ISearchText: ISearchText;
  ISelectShows: ISelectShows;
}

export function ListAllShows({
  ISelectShows: { showID, setShowID, oneShow },
  ISearchText: { text, setText },
}: IListOfShows): JSX.Element {

  function handleSelectShow(showName: string) {
    const selectedShow = showsData.find((oneShow) => oneShow.name === showName);
    if (selectedShow) {
      setShowID(selectedShow.id);
      console.log(showID);
    }
  }


  const searchedShowData: IShow[] = showsData.filter((oneShow) =>
    showTextInputFilter(oneShow, text)
  );

  const ListedAllShows = searchedShowData.map(ListAShow);

  return (
    <>
      <h1> TV SHOWS APP </h1>
      <div>
        <select onChange={(e) => handleSelectShow(e.target.value)}>
          {showsData.map((oneShow) => (
            <option key={oneShow.id}> {oneShow.name} </option>
          ))}
        </select>
      </div>

      <input
        className="showssearchBar"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        placeholder="Search Shows"
      />

      <p>
        {" "}
        Showing {ListedAllShows.length} of {showsData.length} shows{" "}
      </p>
      {ListedAllShows}
    </>
  );
}
