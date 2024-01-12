// import {fakeSongService} from '../services/fakeSongService ';
import SongsList from '../components/SongsList';
import fakeSongService from '../services/fakeSongService';
function Songs() {
    const songsService = new fakeSongService();
    const songs = songsService.getAll();
    return (
        <div>
            <h1 className='title'>Songs</h1>
            <SongsList songs={songs} />
        </div>
    )
}
export default Songs;