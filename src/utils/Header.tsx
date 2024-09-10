import { useContext } from "react";
import { ChampionContext } from "./context/ChampionContext";
import LOLSearchInput from "./LOLSearchInput";
import { Link, useLocation } from "react-router-dom";
import { useChampions } from "./hooks/useChampions";

const Header = () => {
	const {
		championsData,
		isChampionsError,
		championsError,
		isChampionsLoading,
	} = useChampions();

	const { pathname } = useLocation();

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
					<h1>
						<Link to="/">LOL Champion Viewer</Link>
					</h1>

					{pathname === "/" && (
						<div className="header_container_dropdown">
							<LOLSearchInput
								onFocus={searchOnFocus}
								value={search}
								setValue={setSearch}
							/>
						</div>
					)}
				</div>
			</header>
		);
	}
	return;
};

export default Header;
