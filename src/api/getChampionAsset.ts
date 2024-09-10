export const getChampionAsset = (
	champion: string = "",
	version: string = "14.17.1",
): string => {
	return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}`;
};

export const getChampionLoadingAsset = (
	champion: string = "",
	skin: string = "0",
): string => {
	return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${skin}.jpg`;
};
