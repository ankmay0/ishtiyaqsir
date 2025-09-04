import Navbar from "./component/navbar";
import Biography from "./component/Biography"; 
import Hero from "./component/Hero";
 

function App() {
  return (
    <div>
      
      <Navbar />
      {/* Other sections of your site */}
      <Hero/>
      <Biography/>
      
    </div>
  );
}

export default App;