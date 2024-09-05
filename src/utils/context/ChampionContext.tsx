import { createContext } from "react";
import { Champion } from "../../api/types_champion";

export interface ChampionContextType {
	champion: Champion | undefined;
	setChampion: React.Dispatch<React.SetStateAction<Champion | undefined>>;
}

export const ChampionContext = createContext<ChampionContextType | undefined>(
	undefined,
);
