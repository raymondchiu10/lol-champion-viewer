export const getChampionAsset = (
	champion: string = "",
	version: string = "14.18.1",
): string => {
	return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}`;
};

export const getChampionLoadingAsset = (
	champion: string = "",
	skin: string = "0",
): string => {
	return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${skin}.jpg`;
};

export const getPassiveAsset = (
	full: string,
	version: string = "14.18.1",
): string => {
	return `https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${full}`;
}

export const getSpellAsset = (
	full: string,
	version: string = "14.18.1",
): string => {
	return `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${full}`;
}
