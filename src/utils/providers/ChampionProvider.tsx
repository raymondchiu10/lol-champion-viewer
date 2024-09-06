import { ReactNode, useState } from "react";
import { ChampionContext } from "../context/ChampionContext";
import { Champion } from "../../api/types_champion";

interface IProps {
	children: ReactNode;
}

const ChampionProvider = (props: IProps) => {
	const [champion, setChampion] = useState<Champion | undefined>(undefined);
	const [search, setSearch] = useState<string>("");

	return (
		<ChampionContext.Provider value={{ champion, setChampion, search, setSearch }}>
			{props.children}
		</ChampionContext.Provider>
	);
};

export default ChampionProvider;
