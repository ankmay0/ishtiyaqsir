// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Biography from "./component/Biography"; 
import Publication from "./component/Publication";
import Experience from "./component/Experience";
import AwardsAchievements from "./component/AwardsAchievements";
import Hero from "./component/Hero";

 

function App() {
  return (
    <div>
      
      <Navbar />
      {/* Other sections of your site */}
      <Hero/>
      <Biography/>
      <Publication/>
      <Experience/>
      <AwardsAchievements/>
      
    </div>
  );
}

export default App;
