import { getChampionSquareAsset } from "../../api/getChampionSquareAsset";
import { Champion } from "../../api/types_champion";
import ProfileIcon from "../../utils/ProfileIcon";
import ChampionTag from "./ChampionTag";

interface IProps {
	champion: Champion;
}

const ChampionCard = (props: IProps) => {
	const { champion } = props;

	return (
		<div className="champion-card">
			<header className="champion-card_header">
				<ProfileIcon
					src={getChampionSquareAsset(champion.image.full)}
					alt={champion.name}
				/>

				<div className="champion-card_subheader">
					<hgroup>
						<h2>{champion.name}</h2>
						<h3>{champion.title}</h3>
					</hgroup>
					<ChampionTag tags={champion.tags} />
				</div>
			</header>
			<aside>{champion.blurb}</aside>
		</div>
	);
};

export default ChampionCard;
