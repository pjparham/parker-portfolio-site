import './App.css';
import About from './components/About';
import Hero from './components/Hero' 
// import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
