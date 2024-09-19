import { getPassiveAsset } from "../../api/getChampionAsset";
import { DetailedChampionData } from "../../api/types_champion-detailed";
import ChampionSpellComponent from "./ChampionSpellComponent";
import ChampionTips from "./ChampionTips";

interface IProps {
	championData: DetailedChampionData;
}

const ChampionDetailCard = (props: IProps) => {
	const { championData } = props;

	return (
		<section className="champion-detail-card">
			<div className="champion-detail-card_passive">
				<h2>
					<label>Passive:</label>
				</h2>

				<h3>
					<label>{championData.passive.name}</label>
				</h3>

				<div className="champion-detail-card_passive_img">
					<img
						src={getPassiveAsset(championData.passive.image.full)}
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

			<details className="champion-detail-card_tips">
				<summary>Champion Tips</summary>

				<div>
					<ul className="champion-detail-card_tips_container">
						{championData.allytips.map((item, index) => {
							return (
								<ChampionTips
									key={`allytips-${championData.id}-${index}`}
									type={"allytips"}
									tip={item}
								/>
							);
						})}
					</ul>

					<ul className="champion-detail-card_tips_container">
						{championData.enemytips.map((item, index) => {
							return (
								<ChampionTips
									key={`enemytips-${championData.id}-${index}`}
									type={"enemytips"}
									tip={item}
								/>
							);
						})}
					</ul>
				</div>
			</details>

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