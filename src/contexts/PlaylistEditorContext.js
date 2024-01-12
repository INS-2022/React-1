import { createContext, useState, useEffect, useContext } from "react";
import { PlaylistAPI } from "../api/API";
import { HttpClient } from "../helpers/HttpClient";

const PlaylistEditorContext = createContext();

export const usePlaylistEditorContext = () => useContext(PlaylistEditorContext);

export const PlaylistEditorProvider = ({children}) => {
    const httpClient = new HttpClient();
    const playlistAPI = new 
}