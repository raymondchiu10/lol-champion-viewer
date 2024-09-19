import { useChampion } from "../hooks/useChampions";
import ChampionTips from "./ChampionTips";

interface IProps {
	champion: string;
}

const ChampionTipsComponent = (props: IProps) => {
	const { champion } = props;
	const { championData } = useChampion(champion);

	if (!championData) {
		return <p>Error Fetching Data</p>;
	}

	return (
		<div className="champion-detail-card_tips">
			<h3>Champion Tips</h3>

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
		</div>
	);
};

export default ChampionTipsComponent;
