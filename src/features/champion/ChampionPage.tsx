import { useLocation } from "react-router-dom";
import ChampionCard from "../homepage/ChampionCard";
import { Champion } from "../../api/types_champion";
import { useChampion } from "../../utils/hooks/useChampions";
import LOLCarousel from "./LOLCarousel";
import ChampionDetailCard from "../../utils/championDetailCard/ChampionDetailCard";
import Loading from "../../utils/Loading";

const ChampionPage = () => {
	const location = useLocation();
	const { championData, isChampionError, championError, isChampionLoading } =
		useChampion(location.pathname.replace("/champion/", ""));

	if (isChampionLoading) {
		return <Loading/>;
	}

	if (isChampionError) {
		return <pre>{JSON.stringify(championError)}</pre>;
	}

	if (championData) {
		return (
			<section className="champion-page">
				<ChampionCard
					champion={championData as unknown as Champion}
					disabled={true}
				/>
				<LOLCarousel
					champion={championData.id}
					data={championData.skins}
				/>
				<ChampionDetailCard championData={championData} />
			</section>
		);
	}
};

export default ChampionPage;
