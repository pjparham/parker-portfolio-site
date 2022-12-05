import './App.css';
import Hero from './components/Hero' 
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
