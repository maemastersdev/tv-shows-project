import { IEpisode } from "../utils/IEpisode";
import episodes from "../tvShowsData.json";

export function ListAllEpisodes(): JSX.Element {

    function createEpisodeCode(oneEpisode: IEpisode) {
        const seasonCode = oneEpisode.season.toString().padStart(2, '0');
        const episodeCode = oneEpisode.number.toString().padStart(2, '0');
        return `S${seasonCode}E${episodeCode}`
    }

    function listAnEpisode(oneEpisode: IEpisode ) {
        return (
            <div className="episodeCard">
            <h1>{oneEpisode.name}</h1>
            <h2>{createEpisodeCode(oneEpisode)}</h2>
            <img src={oneEpisode.image.medium}/>
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