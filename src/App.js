// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./component/navbar";
import Biography from "./component/Biography";
import Publication from "./component/Publication";
import Experience from "./component/Experience";
import AwardsAchievements from "./component/AwardsAchievements";
import Hero from "./component/Hero";
import Teaching from "./pages/teaching.jsx";
import Youtube from "./pages/youtube.jsx";
import SomeUsefullLinks from "./pages/SomeUsefulLinks.jsx";

function App() {
  return (
    <Router>
      {/* Persistent navigation */}
      {/* <Navbar /> */}

      {/* Route configuration */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Hero />} />

        {/* Sections */}
        <Route path="/biography" element={<Biography />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/awards" element={<AwardsAchievements />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/someusefulllinks" element={<SomeUsefullLinks />} />
        {/* 404 fallback */}
        <Route path="*" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
