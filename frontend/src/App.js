import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import RegistrationForm from './components/Login/Register';
import EventRegistrationForm from './components/Event/eventform';
import EventList from './components/Event/EventList';

import './App.css';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Routes>
          {/* General paths */}
          <Route path = "/" element = {<Home/>}/>

          {/* User paths */}
          <Route path = "/register" element = {<RegistrationForm/>}/>

          {/* Event Paths */}
          <Route path = "/create-event" element = {<EventRegistrationForm/>}/>
          <Route path = "/view-event" element = {<EventList/>}/>
          
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
