import { getChampionAsset } from "../../api/getChampionAsset";
import { isDetailedChampionData } from "../../api/typeguards";
import { Champion } from "../../api/types_champion";
import { DetailedChampionData } from "../../api/types_champion-detailed";
import ProfileIcon from "../../utils/ProfileIcon";
import ChampionTag from "./ChampionTag";
import { useNavigate } from "react-router-dom";

interface IProps {
	champion: Champion | DetailedChampionData;
}

const ChampionCard = (props: IProps) => {
	const { champion } = props;
	const navigate = useNavigate();

	const linkHelper = () => {
		navigate(`/champion/${champion.id}`);
	};

	return (
		<div onClick={linkHelper} className="champion-card">
			<header className="champion-card_header">
				<ProfileIcon
					src={getChampionAsset(champion.image.full)}
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
			<aside>{isDetailedChampionData(champion) ? champion.lore : champion.blurb}</aside>
		</div>
	);
};

export default ChampionCard;
