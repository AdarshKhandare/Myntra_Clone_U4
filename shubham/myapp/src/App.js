import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { SlideShow } from './Component/Slider';
import InnerContent from './Component/InnerContent';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <InnerContent/>
     <Footer/>
    </div>
  );
}

export default App;
