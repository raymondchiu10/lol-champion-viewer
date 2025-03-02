import { createContext } from "react";
import { Champion, EChampionTag } from "../../api/types_champion";

export interface ChampionContextType {
	champion: Champion | undefined;
	setChampion: React.Dispatch<React.SetStateAction<Champion | undefined>>;
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	tag: EChampionTag | null;
	setTag: React.Dispatch<React.SetStateAction<EChampionTag | null>>;
}

export const ChampionContext = createContext<ChampionContextType | undefined>(
	undefined,
);
