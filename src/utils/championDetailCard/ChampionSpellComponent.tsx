import { useState } from "react";
import { getSpellAsset } from "../../api/getChampionAsset";
import { ChampionSpell } from "../../api/types_champion-detailed";
import { useVersion } from "../hooks/useVersion";
import ChampionSpellItem from "./ChampionSpellItem";

interface IProps {
	spells: Array<ChampionSpell>;
}

const ChampionSpellComponent = (props: IProps) => {
	const [selectedSpell, setSelectedSpell] = useState<
		ChampionSpell | undefined
	>(undefined);
	const { versionData } = useVersion();

	const onPressHelper = (selected: ChampionSpell) => () => {
		setSelectedSpell(selected);
	};

	return (
		<div className="champion-spell-component">
			<h2>
				<label>Skills:</label>
			</h2>
			<div className="champion-spell-component__spells">
				{props.spells.map((item) => (
					<img
						className="champion-spell-component__img"
						key={item.id}
						src={getSpellAsset(item.image.full, versionData)}
						alt={item.name}
						draggable={false}
						onClick={onPressHelper(item)}
					/>
				))}
			</div>
			{selectedSpell && <ChampionSpellItem spell={selectedSpell} />}
		</div>
	);
};

export default ChampionSpellComponent;
