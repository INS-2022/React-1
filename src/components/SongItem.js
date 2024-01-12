export default function SongItem (props) {
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-title">{props.song.songName}</p>
                <p className="card-text">{props.song.album} - {props.song.artist}</p>
            </div>
            <div className="card-side">
                <p className="card-right-data">{props.song.length}</p>
            </div>
        </div>
    )
}