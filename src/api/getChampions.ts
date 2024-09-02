import { IDropdownOptions } from "../utils/LOLDropdown";
import axiosInstance from "./axiosInstance";
import { ChampionsData } from "./types_champion";

export const getChampions = async (version: string = "14.17.1") => {
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
