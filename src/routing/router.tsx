import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "../features/homepage/Homepage";
import ChampionPage from "../features/champion/ChampionPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Homepage />,
			},
		],
	},
	{
		path: "/champion/",
		element: <Layout />,
		children: [
			{
				path: ":id",
				element: <ChampionPage />,
			},
		],
	},
]);

export default router;
