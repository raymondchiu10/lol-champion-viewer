import { useContext } from "react";
import { useChampions } from "../features/app/hooks/useChampions";
import { ChampionContext } from "./context/ChampionContext";
import LOLSearchInput from "./LOLSearchInput";

const Header = () => {
	const {
		championsData,
		isChampionsError,
		championsError,
		isChampionsLoading,
	} = useChampions();

	const context = useContext(ChampionContext);

	if (!context) {
		throw new Error(
			"ChampionConsumer must be used within a ChampionProvider",
		);
	}

	const { search, setSearch } = context;


	const searchOnFocus = () => {
		setSearch("");
	};

	if (isChampionsLoading) {
		return <h1>is Loading...</h1>;
	}

	if (isChampionsError) {
		return <pre>{JSON.stringify(championsError)}</pre>;
	}

	if (championsData) {
		return (
			<header className="header">
				<div className="header_container">
					<h1>LOL Champion Viewer</h1>

					<div className="header_container_dropdown">
						<LOLSearchInput
							onFocus={searchOnFocus}
							value={search}
							setValue={setSearch}
						/>

					</div>
				</div>
			</header>
		);
	}
	return;
};

export default Header;
