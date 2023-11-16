import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProtectedRoute from './components/Protected/ProtectedRoute';
import ProtectedRouteAdmin from './components/Protected/ProtectedRoutedAdmin';

import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import ContactPage from './components/ContactPage/ContactPage';

import RegistrationForm from './components/Login/Register';
import EventRegistrationForm from './components/Event/eventform';

import UserList from './components/UserList/UserList';

import EventList from './components/Event/EventList';
import BookedEventsList from './components/Event/BookedEventsList';

import './App.css';



function App() {
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
          <Route path = "/contact" element = {<ContactPage/>}/>

          {/* User paths */}
          <Route path = "/register" element = {<RegistrationForm/>}/>

          <Route path = "/view-user"  element = {
            <ProtectedRouteAdmin currentUser={user}>
              <UserList/>
            </ProtectedRouteAdmin>}
          />

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

          <Route path = "/booked-events"
          element = {
            <ProtectedRoute isLoggedIn={isLoggedIn}>
            <BookedEventsList/>
            </ProtectedRoute>}
          />
          
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
