import { useState } from 'react';
import Card from 'react-bootstrap/Card';

import "./Events.css";

function EventCard(props){
    const {_id, name, date, place, club, time, description, slots, startTime, endTime} = props.obj;
    let year = date.slice(0,4);
    let month = date.slice(5,7);
    let day = date.slice(8,10);
    const [desc, setDescription] = useState(
        <Card.Text style={{fontSize:"1.75vw", fontWeight:"bolder"}}>
            Date: {day}-{month}-{year}<br></br>
            Time: {startTime} to {endTime}<br></br>
            Place: {place}<br></br>
        </Card.Text>
    )

    const closeDescription = () => {
        setDescription(
            <Card.Text style={{fontSize:"1.75vw", fontWeight:"bolder"}}>
            Date: {day}-{month}-{year}<br></br>
            Time: {startTime} to {endTime}<br></br>
            Place: {place}<br></br>
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
            <button className='cardButton' style={{"backgroundColor": "greenyellow"}}>Book Now!</button>
        </Card.Body>
        
        </Card>
    );
};

export default EventCard;