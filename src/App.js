import "./App.css";
import ContactUs from "./components/ContactPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Careers from "./components/Careers";
import Service from "./components/Service";
import Safety from "./components/Safety";
import Construction from "./components/Construction";
import SmallProjects from "./components/SmallProjects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Safety" element={<Safety />}></Route>
          <Route path="/Construction" element={<Construction />}></Route>
          <Route path="/SmallProjects" element={<SmallProjects />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
