import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProtectedRoute from './components/Protected/ProtectedRoute';
import ProtectedRouteAdmin from './components/Protected/ProtectedRoutedAdmin';

import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import ContactPage from './components/ContactPage/ContactPage';

import Register from './components/Login/Register';
import UserUpdateForm from './components/UserProfile/EditProfile';
import UserList from './components/UserList/UserList';

import CreateEvent from './components/Event/CreateEvent';
import EventList from './components/Event/EventList';
import UpdateEvent from './components/Event/UpdateEvent';
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
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "/edit-profile" 
          element = {
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <UserUpdateForm/>
          </ProtectedRoute>
          }
          
          />
          <Route path = "/view-user"  element = {
            <ProtectedRouteAdmin currentUser={user}>
              <UserList/>
            </ProtectedRouteAdmin>}
          />


          {/* Event Paths */}
          <Route path = "/create-event" 
            element = {
            <ProtectedRouteAdmin currentUser={user}>
              <CreateEvent/>
            </ProtectedRouteAdmin>}
          />

          <Route path = "/view-event" 
            element = {
            <ProtectedRoute isLoggedIn={isLoggedIn}>
            <EventList/>
            </ProtectedRoute>}
          />

          <Route path = "/update-event"
          element = {
            <ProtectedRouteAdmin currentUser={user}>
              <UpdateEvent/>
            </ProtectedRouteAdmin>
          }
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
