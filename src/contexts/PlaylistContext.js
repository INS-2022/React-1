import { createContext, useState, useEffect, useContext } from "react";
import { PlaylistAPI } from "../api/API";
import { HttpClient } from "../helpers/HttpClient";

const PlaylistContext = createContext();

export const usePlaylistContext = () => useContext(PlaylistContext);

export const PlaylistProvider = ({ children }) => {
    const httpClient = new HttpClient();
    const playlistAPI = new PlaylistAPI(httpClient);
    const [playlist, setPlaylist] = useState([]);
    
    const addPlaylist = (newPlaylist) => {
        setPlaylist((prevPlaylist) => [...prevPlaylist, newPlaylist]);
    }

    const updatePlaylist = (id, newPlaylist) => {
        setPlaylist(newPlaylists);
    }

    useEffect(() => {
        const fetchPlaylist = async () => {
            const response = await playlistAPI.fetchPlaylist();
            setPlaylist(response);
        }
        fetchPlaylist();
    }
    , []);

    useEffect(() => {
        const updatePlaylist = async () => {
            await playlistAPI.updatePlaylist(playlist);
        }
        updatePlaylist();
    }, [playlist]);

    return (
        <PlaylistContext.Provider value={{ playlist, setPlaylist, addPlaylist, updatePlaylist}}>
        {children}
        </PlaylistContext.Provider>
    );
}


