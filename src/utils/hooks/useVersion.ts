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
	});

	return {
		versionData,
		isVersionDataError,
		versionDataError,
		isVersionDataLoading,
	};
};
