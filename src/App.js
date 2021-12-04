import "./App.css";
import About from "./pages/contact/About";
import Home from "./pages/home/Home";
import Location from "./pages/location/Location";
import ElevenAustralia from "./pages/products/ElevenAustralia";
import LivingProof from "./pages/products/LivingProof";
import Menu from "./pages/services/Menu";

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Location />
      <ElevenAustralia />
      <LivingProof />
      <Menu />
    </div>
  );
}

export default App;
