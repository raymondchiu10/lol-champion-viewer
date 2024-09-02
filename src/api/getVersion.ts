import axiosInstance from "./axiosInstance";

type VersionsResponse = string[];

const getVersion = async (): Promise<string> => {
	const response = await axiosInstance.get<VersionsResponse>(
		"https://ddragon.leagueoflegends.com/api/versions.json",
	);
	return response.data[0];
};

export default getVersion;
