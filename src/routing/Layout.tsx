import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
	return (
		<main>
			<ScrollRestoration />
			<Outlet />
		</main>
	);
};

export default Layout;
