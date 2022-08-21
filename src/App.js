import "./App.scss";
import Navbar from "./components/Navbar";
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ScrollIndicator from "./components/ScrollIndicaor";
import SecondaryNav from "./components/SecondaryNav";
import {ParallaxProvider} from "react-scroll-parallax";
function App() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 80) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		});
	}, [scrolled, setScrolled]);

	return (
		<>
			<ParallaxProvider>
				<BrowserRouter>
					<Navbar />
					{scrolled && <SecondaryNav />}
					<ScrollIndicator />
					<Routes>
						<Route path="/">
							<Route index element={<Home />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ParallaxProvider>
		</>
	);
}

export default App;
