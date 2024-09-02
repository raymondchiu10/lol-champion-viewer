import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://ddragon.leagueoflegends.com/cdn/14.16.1/data/en_US/",
	headers: {
		"Content-Type": "application/json",
	},
});

export default axiosInstance;
