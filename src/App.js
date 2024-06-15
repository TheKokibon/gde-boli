import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Zasto from './components/Zasto';
import Functionality from './components/Functionality';
import Usage from './components/Usage';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Zasto/>
      <Usage/>
      <Functionality/>
      <Footer/>
    </div>
  );
}

export default App;
