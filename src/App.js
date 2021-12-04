import "./App.css";
import About from "./pages/contact/About";
import Home from "./pages/home/Home";
import Location from "./pages/location/Location";
import ElevenAustralia from "./pages/products/ElevenAustralia";
import LivingProof from "./pages/products/LivingProof";
import Services from "./pages/services/Services";

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Location />
      <ElevenAustralia />
      <LivingProof />
      <Services />
    </div>
  );
}

export default App;
