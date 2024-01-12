export default class fakeSongService{
    constructor(){
        this.songs = [
              {"songId": 1, "songName": "Lavender Haze", "artist": "Taylor Swift", "album": "Midnights", "length": "3:45"},
              {"songId": 2, "songName": "Maroon", "artist": "Taylor Swift", "album": "Midnights", "length": "4:05"},
              {"songId": 3, "songName": "Anti-Hero", "artist": "Taylor Swift", "album": "Midnights", "length": "3:55"},
              {"songId": 4, "songName": "Snow On The Beach", "artist": "Taylor Swift", "album": "Midnights", "length": "4:15"},
              {"songId": 5, "songName": "You're On Your Own, Kid", "artist": "Taylor Swift", "album": "Midnights", "length": "3:50"},
              {"songId": 6, "songName": "Midnight Rain", "artist": "Taylor Swift", "album": "Midnights", "length": "4:00"}
            ];
    }

     getAll(){
        return this.songs;
    }

    async get(id){
        return this.songs.find((song)=>song.songId===id);
    }

    async create(data){
        return this.songs.push({songId:data.songId, songName: data.songName, artist: data.artist, album: data.album, length: data.length});
    }

    async update(id, data){
        const song = this.songs.find((song)=>song.songId===id);
        song.songName = data.songName;
        song.artist = data.artist;
        song.album = data.album;
        song.length = data.length;
        return song;
    }

    async delete(id){
        const song = this.songs.find((song)=>song.songId===id);
        const index = this.songs.indexOf(song);
        return this.songs.splice(index, 1);
    }

    async search(query){
        const songs_found = this.songs.filter((song)=>song.songName.includes(query));
        return songs_found;
    }

}