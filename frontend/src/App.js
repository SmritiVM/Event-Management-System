import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';


import './App.css';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
