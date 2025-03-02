import { useContext } from "react";
import { ChampionContext } from "./context/ChampionContext";
import LOLSearchInput from "./LOLSearchInput";
import { Link, useLocation } from "react-router-dom";
import { useChampions } from "./hooks/useChampions";
import Loading from "./Loading";
import { EChampionTag } from "../api/types_champion";
import clsx from "clsx";

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

	const { search, setSearch, tag, setTag } = context;

	const searchOnFocus = () => {
		setSearch("");
	};

	if (isChampionsLoading) {
		return <Loading />;
	}

	if (isChampionsError) {
		return <pre>{JSON.stringify(championsError)}</pre>;
	}

	if (championsData) {
		return (
			<header className="header">
				<div className="header__container">
					<h1>
						<Link to="/">LOL Champion Viewer</Link>
					</h1>

					{pathname === "/" && (
						<div className="header__filter">
							<div className="header__filter-tags">
								{Object.values(EChampionTag).map(
									(item, index) => {
										const color = item.toLowerCase();
										return (
											<span
												key={index}
												className={clsx(
													`header__filter-tag-item champion-tag--${color}`,
													{
														"header__filter-tag-item--active":
															item === tag,
													},
												)}
												onClick={() => {
													if (item === tag) {
														setTag(null);
													} else {
														setTag(item);
													}
												}}
											>
												{item}
											</span>
										);
									},
								)}
							</div>

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
