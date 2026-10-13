import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <NavBar />
      <main id="main-content" tabIndex={-1}>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
