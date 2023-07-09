import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";





import "./styles/App.scss";
import "./styles/component/Header.scss";
import "./styles/component/Home.scss";
import "./styles/component/Footer.scss";
import "./styles/component/Contact.scss";
import "./styles/mediaquery.scss";





function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
