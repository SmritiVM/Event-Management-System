import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRouteAdmin from './components/ProtectedRoutedAdmin';

import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import RegistrationForm from './components/Login/Register';
import EventRegistrationForm from './components/Event/eventform';
import EventList from './components/Event/EventList';

import './App.css';



function App() {
  localStorage.clear();
  const [isLoggedIn, setLoggedIn] = useState("false");
  const [user, setUser] = useState();

  useEffect(() => {
    setInterval(() => {
        const loginStatus = localStorage.getItem("loginStatus");
        const user = localStorage.getItem("user");
        setLoggedIn(loginStatus);
        setUser(user);
    }, [])
}, 5000)

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
          <Route path = "/create-event" 
            element = {
            <ProtectedRouteAdmin currentUser={user}>
              <EventRegistrationForm/>
              </ProtectedRouteAdmin>}
          />

          <Route path = "/view-event" 
            element = {
            <ProtectedRoute isLoggedIn={isLoggedIn}>
            <EventList/>
            </ProtectedRoute>}
          />
          
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
