import Aos from "aos";
import "aos/dist/aos.css";
import About from "../component/About";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Project from "../component/Project";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Footer />
    </>
  );
}

export default App;
