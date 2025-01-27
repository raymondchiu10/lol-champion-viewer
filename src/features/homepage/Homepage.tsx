import ChampionCard from "./ChampionCard";
import { Suspense, useContext } from "react";
import { ChampionContext } from "../../utils/context/ChampionContext";
import { useChampions } from "../../utils/hooks/useChampions";
import Loading from "../../utils/Loading";

const Homepage = () => {
	const context = useContext(ChampionContext);

	if (!context) {
		throw new Error(
			"ChampionConsumer must be used within a ChampionProvider",
		);
	}

	const { champion, search } = context;

	const {
		championsData,
		isChampionsError,
		championsError,
		isChampionsLoading,
	} = useChampions();

	if (isChampionsLoading) {
		return <Loading />;
	}

	if (isChampionsError) {
		return <pre>{JSON.stringify(championsError)}</pre>;
	}

	if (championsData) {
		const filteredChampions =
			search !== ""
				? championsData?.filter((champ) =>
						champ.value.name
							.toLowerCase()
							.includes(search.toLowerCase()),
					)
				: championsData;

		return (
			<section className="homepage">
				<div className="homepage__champ-list">
					<Suspense fallback={<Loading />}>
						{champion ? (
							<ChampionCard champion={champion} />
						) : (
							filteredChampions.map((champ) => (
								<ChampionCard
									key={champ.label}
									champion={champ.value}
								/>
							))
						)}
					</Suspense>
				</div>
			</section>
		);
	}
};

export default Homepage;
