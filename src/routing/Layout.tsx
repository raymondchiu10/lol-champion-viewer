import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "../utils/Footer";
import Container from "../utils/Container";
import Header from "../utils/Header";

const Layout = () => {
	return (
		<main className="main">
			<Header />
			<Container>
				<ScrollRestoration />
				<Outlet />
			</Container>
			<Footer />
		</main>
	);
};

export default Layout;
