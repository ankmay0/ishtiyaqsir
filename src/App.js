import Navbar from "./component/navbar";
import Biography from "./component/Biography"; 
import Publication from "./component/Publication";
import Hero from "./component/Hero";
 

function App() {
  return (
    <div>
      
      <Navbar />
      {/* Other sections of your site */}
      <Hero/>
      <Biography/>
      <Publication/>
      
    </div>
  );
}

export default App;