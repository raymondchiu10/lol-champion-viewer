import { getPassiveAsset } from "../../api/getChampionAsset";
import { DetailedChampionData } from "../../api/types_champion-detailed";
import { useVersion } from "../hooks/useVersion";
import ChampionSpellComponent from "./ChampionSpellComponent";
import ChampionTipsComponent from "./ChampionTipsComponent";

interface IProps {
	championData: DetailedChampionData;
}

const ChampionDetailCard = (props: IProps) => {
	const { championData } = props;
	const { versionData } = useVersion();

	return (
		<section className="champion-detail-card">
			<div className="champion-detail-card__passive">
				<h2>
					<label>Passive:</label>
				</h2>

				<h3>
					<label>{championData.passive.name}</label>
				</h3>

				<div className="champion-detail-card__img">
					<img
						src={getPassiveAsset(
							championData.passive.image.full,
							versionData || undefined,
						)}
						alt={championData.passive.name}
					/>
				</div>
				<p
					dangerouslySetInnerHTML={{
						__html: championData.passive.description,
					}}
				/>
			</div>

			<div>
				<h2>
					<label>Resource Type: {championData.partype}</label>
				</h2>
			</div>

			<ChampionSpellComponent spells={championData.spells} />

			<ChampionTipsComponent champion={championData.id} />

			{/* {Object.entries(championData).map(([key, value]) => {
				return (
					<li key={key}>
						<strong>{key}</strong>: {JSON.stringify(value)}
					</li>
				);
			})} */}
		</section>
	);
};

export default ChampionDetailCard;
