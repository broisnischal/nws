import "./App.scss";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import ScrollIndicator from "./components/ScrollIndicaor";
import SecondaryNav from "./components/SecondaryNav";
import { ParallaxProvider } from "react-scroll-parallax";
import NoMatch from "./Redirect";
import HorizontalIndicator from "./components/HorizontalIndicator";
// import BottomAlert from "./components/BottomMsg";
import { Helmet } from "react-helmet-async";

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
      <HorizontalIndicator />
      <Helmet>
        <title>Nischal Dahal | neeswebservices</title>
        <link rel="canonical" href="/" />
        <link rel="icon" href="" />
        <meta property="og:title" content="Nischal Dahal | neeswebservices" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nischal-dahal.com.np/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dacp0r5b7/image/upload/v1661412465/icons/pp_2_11zon_sn5bhi.png"
        />
        <meta
          name="description"
          content="neeswebservices | Nischal Dahal | Hire Professional &amp; MERN stack Developer. neeswebservices - Nischal Dahal"
          data-rh="true"
        />
      </Helmet>
      <ParallaxProvider>
        <BrowserRouter>
          <Navbar />
          {scrolled && <SecondaryNav />}
          {/* <ScrollIndicator /> */}

          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>

      {/* <BottomAlert /> */}
      {/* <Loader type="line-scale" /> */}
    </>
  );
}

export default App;
