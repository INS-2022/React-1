import { createContext, useContext } from "react";

const SongContext = createContext();

export const useSongContext = () => useContext(SongContext);
