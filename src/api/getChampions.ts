import { IDropdownOptions } from "../utils/LOLDropdown";
import axiosInstance from "./axiosInstance";
import { ChampionsData } from "./types_champion";
import {
	DetailedChampionData,
	DetailedChampionResponse,
} from "./types_champion-detailed";

export const getChampions = async (version: string = "14.18.1") => {
	axiosInstance.defaults.baseURL = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/`;

	const { data } =
		await axiosInstance.get<Record<string, ChampionsData>>("champion.json");

	const options: Array<IDropdownOptions> = Object.entries(data.data).map(
		(item) => ({
			label: item[0],
			value: item[1],
		}),
	);

	return options;
};

export const getDetailedChampions = async (
	version: string = "14.18.1",
	champion: string,
) => {
	axiosInstance.defaults.baseURL = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion`;

	const { data } = await axiosInstance.get<
		Record<string, DetailedChampionResponse>
	>(`${champion}.json`);

	const championData: DetailedChampionData[] = Object.entries(data.data).map(
		([, value]) => value as DetailedChampionData,
	);
	return championData[0];
};
