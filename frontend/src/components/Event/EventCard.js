import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Axios from "axios";

import "./Events.css";

function EventCard(props){
    const navigate = useNavigate();
    // Extracting event details from database
    const {_id, name, date, place, club, description, slots, startTime, endTime, registeredUsers} = props.obj;
    let year = date.slice(0,4);
    let month = date.slice(5,7);
    let day = date.slice(8,10);

    const user = localStorage.getItem("user");// Get current user

    // Function to book event
    const Book = () => {
        
        
        Axios.get("http://localhost:4000/eventRoute/check-user/" + user)
        .then((res) => {
            if(res.status === 200){
                if(res.data != null){
                    const check = res.data.bookedEvents.some(e => e._id === props.obj._id);
                    if (check){
                        alert("Event already registered");
                    }

                    else if (slots === 0){
                        alert("Slots Full! Cannot register");
                    }

                    else{

                        //Data for user updation
                        const userData = res.data;
                        // const data = {username: user, fullName: res.data.fullName,
                        // email: res.data.email, phone: res.data.phone, password: res.data.password,
                        userData.bookedEvents = [...userData.bookedEvents,
                            {_id, name, date, place, club, description, startTime, endTime}];

                        //Data for event updation
                        const eventData = props.obj;
                        eventData.slots = eventData.slots - 1;
                        eventData.registeredUsers = [...eventData.registeredUsers, 
                            {username: user, fullName: res.data.fullName,
                            email: res.data.email, phone: res.data.phone}];

                        Axios.all([
                        // Updating user information and adding event
                        Axios.put("http://localhost:4000/eventRoute/update-user/" + res.data._id, userData)
                        .then((updateResponse) => {
                            if(updateResponse.status === 200)
                                alert("Event Booked");
                            
                            else
                                Promise.reject();
                        })
                        .catch((updateError) => alert(updateError)),
                        
                        
                        // Updating event information by adding user and reducing slots
                        Axios.put("http://localhost:4000/eventRoute/update-event/" + _id, eventData)
                        .then((eventUpdateResponse) => {
                            if(eventUpdateResponse.status === 200)
                            {    
                                console.log("Slot count reduced");
                                       
                            }
                            else
                                Promise.reject();
                            })
                        .catch((eventUpdateError) => alert(eventUpdateError))

                        ])
                    }
                }
            }
            else
                Promise.reject();
            }
            
        )
        .catch((err) => alert(err));
        

    }

    // Function to view list of all registered users
    const registeredUserItems = () => {
        return registeredUsers.map((val, index) => {
            return(
                <tr>
                    <td>{val.username}</td>
                    <td>{val.fullName}</td>
                    <td>{val.email}</td>
                    <td>{val.phone}</td>    
                </tr>
            )
        })
    }
    const viewRegisteredUsers = () => {
        setDescription(
            <table className='userTable' border = "1" bordercolor = "white" cellspacing = "0" cellpadding = "5">
                <thead>
                    <tr>
                        <th class = "text-center">Username</th>
                        <th class = "text-center">Full Name</th>
                        <th class = "text-center">Email</th>
                        <th class = "text-center">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {registeredUserItems()}
                </tbody>
            </table>
        )
        setActionButton(   
            <div>
            <button className='cardButton' style={{"backgroundColor": "blue"}} onClick={closeRegisteredUsers}>
                Close Registered Users
            </button>
            <button className='cardButton' style={{"backgroundColor": "green"}} onClick={deleteEvent}>
                Delete
            </button>
            <button className='cardButton' style={{"backgroundColor": "red"}}>
                Update
            </button>
            </div>);
    }
    const closeRegisteredUsers = () => {
        setDescription(
            <Card.Text style={{fontSize:"1.75vw", fontWeight:"bolder"}}>
            Date: {day}-{month}-{year}<br></br>
            Time: {startTime} to {endTime}<br></br>
            Place: {place}<br></br>
            {props.slotsLeft}
            </Card.Text>
        )
        setActionButton(   
            <div><button className='cardButton' style={{"backgroundColor": "blue"}} onClick={viewRegisteredUsers}>
                View Registered Users
            </button>
            <button className='cardButton' style={{"backgroundColor": "green"}} onClick={deleteEvent}>
                Delete
            </button>
            <button className='cardButton' style={{"backgroundColor": "red"}} onClick={updateEvent}>
                Update
            </button>
            </div>);
    }
     
    // Function to delete event
    const deleteEvent = () => {
        Axios.all([ 
        Axios.delete("http://localhost:4000/eventRoute/delete-event/" + _id)
        .then((res) => {
            if(res.status === 200){
                alert("Event deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err) => alert(err)),

        Axios.get("http://localhost:4000/eventRoute/user-list")
        .then((userResponse) => {
            if(userResponse.status === 200){
                // Finding users who have booked current event
                const collectedUsers = userResponse.data;
                for(let i = 0; i < collectedUsers.length; i++){
                    let userData = collectedUsers[i];
                    userData.bookedEvents = userData.bookedEvents.filter((event) => event._id !== _id);
                    
                    Axios.put("http://localhost:4000/eventRoute/update-user/" + collectedUsers[i]._id, userData)
                        .then((updateResponse) => {
                            if(updateResponse.status === 200)
                                console.log("User details updated")
                            
                            else
                                Promise.reject();
                        })
                        .catch((updateError) => alert(updateError))
                }
                

            }
        } )
    ])
       
    }

    
// Function to update event
    const updateEvent = () => {
        localStorage.setItem("eventID", _id);
        navigate("/update-event");
    }

// Setting action button according to booking, viewing and admin privileges 
    const [actionButton, setActionButton] = useState();

    useEffect(() => {
        if (props.action === "book"){
            setActionButton(
            <button className='cardButton' style={{"backgroundColor": "greenyellow"}} onClick={Book}>
                Book Now!
            </button>);
        }

        else if (props.action === "view"){
            setActionButton();
        }

        if (user === "admin"){
            setActionButton(   
            <div><button className='cardButton' style={{"backgroundColor": "blue"}} onClick={viewRegisteredUsers}>
                View Registered Users
            </button>
            <button className='cardButton' style={{"backgroundColor": "green"}} onClick={deleteEvent}>
                Delete
            </button>
            <button className='cardButton' style={{"backgroundColor": "red"}} onClick={updateEvent}>
                Update
            </button>
            </div>);
        }
    }, [])

    

    // Displaying description based on condition
    const [desc, setDescription] = useState(
        <Card.Text style={{fontSize:"1.75vw", fontWeight:"bolder"}}>
            Date: {day}-{month}-{year}<br></br>
            Time: {startTime} to {endTime}<br></br>
            Place: {place}<br></br>
            {props.slotsLeft}
        </Card.Text>
    )

    const closeDescription = () => {
        setDescription(
            <Card.Text style={{fontSize:"1.75vw", fontWeight:"bolder"}}>
            Date: {day}-{month}-{year}<br></br>
            Time: {startTime} to {endTime}<br></br>
            Place: {place}<br></br>
            {props.slotsLeft}
            </Card.Text>
        )
        setDescButton(
            <button className='cardButton' style={{"backgroundColor":"wheat"}} onClick={viewDescription}>View Description</button>
        )
    }
    const viewDescription = () => {
        setDescription(
        <Card.Text style={{fontSize:"1.75vw", fontWeight:"bolder"}}>
            {description}
        </Card.Text> 
        )
        setDescButton(
            <button className='cardButton' style={{"backgroundColor":"wheat"}} onClick={closeDescription}>Close Description</button>
        )
    } 

    const [descButton, setDescButton] = useState(
        <button className='cardButton' style={{"backgroundColor":"wheat"}} onClick={viewDescription}>View Description</button>
    )
    
    
    return (
        <Card className='eventCard'>
        <Card.Body>
            <Card.Title style={{fontSize:"2vw", fontWeight:"bolder"}}>{name}</Card.Title>
            <Card.Subtitle style={{fontSize:"1.3vw", fontWeight:"bold", "fontStyle":"italic"}}>{club}</Card.Subtitle>
            {desc}
            {descButton}
            {actionButton}
        </Card.Body>
        
        </Card>
    );
};

export default EventCard;