import { IEpisode } from "../utils/IEpisode";
import episodes from "../tvShowsData.json";

export function ListAllEpisodes(): JSX.Element {

    function listAnEpisode(oneEpisode: IEpisode ) {
        return (
            <div className="episodeCard">
            <h1>{oneEpisode.name}</h1>
            <img src={oneEpisode.image.original}/>
            <p>{oneEpisode.summary}</p>
            </div>
        );
    }

    const ListedAllEpisodes = episodes.map(listAnEpisode);

    return (
        <>
        <div>
            {ListedAllEpisodes}
        </div>
        </>
    );
}

export default ListAllEpisodes