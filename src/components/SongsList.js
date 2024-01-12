import SongItem from "./SongItem";

export default function SongsList(props) {
    return (
        <div>
            {
                props.songs.map(song =>
                    <SongItem key={song.songId} song={song} />
                )
            }
        </div>
    )
}