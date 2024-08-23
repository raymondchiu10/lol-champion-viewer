import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../features/app/App";
import Example from "../features/example/Example";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "/about",
				element: <Example />,
			},
		],
	},
]);

export default router;
