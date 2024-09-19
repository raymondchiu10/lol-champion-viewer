import { Champion } from "./types_champion";
import { DetailedChampionData } from "./types_champion-detailed";

export function isDetailedChampionData(
	champion: Champion | DetailedChampionData,
): champion is DetailedChampionData {
	return (champion as DetailedChampionData).lore !== undefined;
}
