import Navbar from "./component/navbar";
import Biography from "./component/Biography"; 
import Publication from "./component/Publication";
import Experience from "./component/Experience";
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
      
    </div>
  );
}

export default App;