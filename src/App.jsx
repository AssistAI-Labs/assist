import NavBar from "./components/NavBar"
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
// import { Route, Routes } from 'react-router-dom';
import OurTeam from "./Pages/OurTeam";
import ContactUs from "./Pages/ContactUs";
import { Element } from "react-scroll";
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="aboutUs">
        <AboutUs />
      </Element>
      <Element name="contactUs">
        <ContactUs />
      </Element>
      <Element name="ourTeam">
        <OurTeam />
      </Element>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/our-team" element={<OurTeam/>} />
      </Routes> */}
    </>
  )
}

export default App
