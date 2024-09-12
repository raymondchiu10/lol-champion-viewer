import { useLocation } from "react-router-dom";
import ChampionCard from "../homepage/ChampionCard";
import { Champion } from "../../api/types_champion";
import { useChampion } from "../../utils/hooks/useChampions";
import LOLCarousel from "./LOLCarousel";

const ChampionPage = () => {
	const location = useLocation();
	const { championData, isChampionError, championError, isChampionLoading } =
		useChampion(location.pathname.replace("/champion/", ""));

	if (isChampionLoading) {
		return <h1>is Loading...</h1>;
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
				<LOLCarousel champion={championData.id} data={championData.skins}/>
				{
					<ul>
						{Object.entries(championData).map(([key, value]) => (
							<li key={key}>
								<strong>{key}</strong>: {JSON.stringify(value)}
							</li>
						))}
					</ul>
				}
			</section>
		);
	}
};

export default ChampionPage;
