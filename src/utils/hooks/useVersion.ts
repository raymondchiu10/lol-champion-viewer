import { useQuery } from "@tanstack/react-query";
import { getVersion } from "../../api/getVersion";

export const useVersion = () => {
	const {
		data: versionData,
		isError: isVersionDataError,
		error: versionDataError,
		isLoading: isVersionDataLoading,
	} = useQuery({
		queryKey: ["version"],
		queryFn: getVersion,
		staleTime: 1000 * 60 * 60, // Example: data is considered fresh for 1 hour
		gcTime: 1000 * 60 * 60 * 2, // Example: cache the data for 2 hours
	});

	return {
		versionData,
		isVersionDataError,
		versionDataError,
		isVersionDataLoading,
	};
};
