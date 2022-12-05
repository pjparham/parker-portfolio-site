import './App.css';
import Hero from './components/Hero' 
// import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
