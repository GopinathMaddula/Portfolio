import "./App.css";
import Header from "./components/Header/Header.tsx";
import MainContent from "./components/MainContent/MainContent.tsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About.tsx";
// import Contact from "./pages/Contact/Contact.tsx";
import Kharidh from "./pages/Kharidh/Kharidh.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Casestudies from "./pages/Casestudies/Casestudies.tsx";
import Resume from "./pages/Resume/Resume.tsx";
import Edpedia from "./pages/Edpedia/Edpedia.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/case-studies" element={<Casestudies />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/case-studies/kharidh" element={<Kharidh />} />
        <Route path="/case-studies/edpedia" element={<Edpedia />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
