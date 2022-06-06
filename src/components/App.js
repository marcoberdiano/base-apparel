import Hero from "./Hero";
import Main from "./Main";
import imgDesk from '../images/hero-desktop.jpg';
//import Footer from "./Footer";
function App() {
  return (
    <div className="app">

      <div className="app-left">
        <Hero/>
        <Main/>
      </div>
     
     <div className="app-right">
      <img src={imgDesk} alt="hero desktop" className="bg-img-desktop" />
     </div>
     
    </div>
  );
}

export default App;
