import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./_index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routing/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChampionProvider from "./utils/providers/ChampionProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChampionProvider>
				<RouterProvider router={router} />
			</ChampionProvider>
			{/* Remember to comment out the dev tools for production */}
			{/* <ReactQueryDevtools /> */}
		</QueryClientProvider>
	</StrictMode>,
);
