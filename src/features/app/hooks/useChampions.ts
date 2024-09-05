import { useQuery } from "@tanstack/react-query";
import { getChampions, getDetailedChampions } from "../../../api/getChampions";
import { useVersion } from "./useVersion";

export const useChampions = () => {
	const { versionData } = useVersion();

	const {
		data: championsData,
		isError: isChampionsError,
		error: championsError,
		isLoading: isChampionsLoading,
	} = useQuery({
		queryKey: ["champions"],
		queryFn: () => getChampions(versionData),
	});

	return {
		championsData,
		isChampionsError,
		championsError,
		isChampionsLoading,
	};
};

export const useChampion = (modifier: string = "") => {
	const { versionData } = useVersion();

	const {
		data: championData,
		isError: isChampionError,
		error: championError,
		isLoading: isChampionLoading,
	} = useQuery({
		queryKey: ["champion"],
		queryFn: () => getDetailedChampions(versionData, modifier),
	});

	return {
		championData,
		isChampionError,
		championError,
		isChampionLoading,
	};
};
