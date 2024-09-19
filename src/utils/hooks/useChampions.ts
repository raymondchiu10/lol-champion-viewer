import { useQuery } from "@tanstack/react-query";
import { useVersion } from "./useVersion";
import { getChampions, getDetailedChampions } from "../../api/getChampions";
import { useMemo } from "react";

export const useChampions = () => {
	const { versionData } = useVersion();

	const {
		data: championsData,
		isError: isChampionsError,
		error: championsError,
		isLoading: isChampionsLoading,
	} = useQuery({
		queryKey: ["champions", versionData],
		queryFn: () => {
			if (!versionData) {
				return Promise.resolve([]);
			}
			return getChampions(versionData);
		},
		enabled: !!versionData,
		staleTime: 1000 * 60 * 10,
		gcTime: 1000 * 60 * 30,
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

	const queryKey = useMemo(() => ["champion", modifier] as const, [modifier]);

	const {
		data: championData,
		isError: isChampionError,
		error: championError,
		isLoading: isChampionLoading,
	} = useQuery({
		queryKey,
		queryFn: () => {
			if (!versionData) {
				return Promise.resolve(null);
			}
			return getDetailedChampions(versionData, modifier);
		},
		enabled: !!versionData,
		staleTime: 1000 * 60 * 5,
		gcTime: 1000 * 60 * 15,
	});

	return {
		championData,
		isChampionError,
		championError,
		isChampionLoading,
	};
};
