export const getChampionSquareAsset = (
	champion: string = "",
	version: string = "14.17.1",
): string => {
	return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}`;
};
