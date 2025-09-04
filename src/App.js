// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import Teaching from "./pages/teaching";
import Youtube from "./pages/youtube";
import SomeUsefulLinks from "./pages/SomeUsefulLinks"; 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          {/* Main long-scrollable homepage */}
          <Route path="/" element={<Home />} />

          {/* Separate pages */}
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/SomeUsefulLinks" element={<SomeUsefulLinks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
