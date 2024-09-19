import { createContext } from "react";
import { Champion } from "../../api/types_champion";

export interface ChampionContextType {
	champion: Champion | undefined;
	setChampion: React.Dispatch<React.SetStateAction<Champion | undefined>>;
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const ChampionContext = createContext<ChampionContextType | undefined>(
	undefined,
);
