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
    Aos.init({ duration: 1400, easing: "ease-in-out", once: true });
  }, []);
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
