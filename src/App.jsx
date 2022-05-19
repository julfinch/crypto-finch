import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Data from "./components/data/Data";
import Cloud from "./components/cloud/Cloud";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
    </>
  );
}
