import { useLocation } from "react-router-dom";
import ChampionCard from "../homepage/ChampionCard";
import { Champion } from "../../api/types_champion";
import { useChampion } from "../../utils/hooks/useChampions";
import { getChampionLoadingAsset } from "../../api/getChampionAsset";

const ChampionPage = () => {
	const location = useLocation();
	const { championData, isChampionError, championError, isChampionLoading } =
		useChampion(location.pathname.replace("/champion/", ""));

	const championSplash = getChampionLoadingAsset(championData?.id);

	if (isChampionLoading) {
		return <h1>is Loading...</h1>;
	}

	if (isChampionError) {
		return <pre>{JSON.stringify(championError)}</pre>;
	}

	if (championData) {
		return (
			<section className="champion-page">
				<img src={championSplash} alt="championSplash"/>

				<ChampionCard champion={championData as unknown as Champion} />

			</section>
		);
	}
};

export default ChampionPage;
