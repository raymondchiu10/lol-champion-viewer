import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../features/app/App";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
		],
	},
]);

export default router;
