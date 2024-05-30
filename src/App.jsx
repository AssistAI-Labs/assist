import NavBar from "./components/NavBar"
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurTeam from "./Pages/OurTeam";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/assistai/" element={<Home/>} />
          <Route path="/assistai/about-us" element={<AboutUs/>} />
          <Route path="/assistai/contact-us" element={<ContactUs/>} />
          <Route path="/assistai/our-team" element={<OurTeam/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
