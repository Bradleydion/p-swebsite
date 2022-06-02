import "./App.css";
import ContactUs from "./components/ContactPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Careers from "./components/Careers";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Careers" element={<Careers />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
