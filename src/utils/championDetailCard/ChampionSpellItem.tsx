import { getSpellAsset } from "../../api/getChampionAsset";
import { ChampionSpell } from "../../api/types_champion-detailed";
import { useVersion } from "../hooks/useVersion";

interface IProps {
	spell: ChampionSpell;
}

const ChampionSpellItem = (props: IProps) => {
	const { spell } = props;
	const { versionData } = useVersion();
	return (
		<div className="champion-spell-item">
			<h3>
				<label>{spell.name}</label>
			</h3>
			<div className="champion-spell-item__image-container">
				<img
					className="champion-spell-item__img"
					src={getSpellAsset(spell.image.full, versionData)}
					alt={spell.id}
				/>
			</div>
			<p dangerouslySetInnerHTML={{ __html: spell.description }} />
		</div>
	);
};

export default ChampionSpellItem;
