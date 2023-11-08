import { useState } from 'react';
import Card from 'react-bootstrap/Card';

import "./Events.css";

function EventCard(props){
    const [description, setDescription] = useState(
        <Card.Text style={{fontSize:"1.75vw", fontWeight:"bolder"}}>
            Date: {props.date}<br></br>
            Time: {props.time}<br></br>
            Place: {props.place}<br></br>
        </Card.Text>
    )

    const closeDescription = () => {
        setDescription(
            <Card.Text style={{fontSize:"1.75vw", fontWeight:"bolder"}}>
            Date: {props.date}<br></br>
            Time: {props.time}<br></br>
            Place: {props.place}<br></br>
            </Card.Text>
        )
        setDescButton(
            <button className='cardButton' style={{"backgroundColor":"wheat"}} onClick={viewDescription}>View Description</button>
        )
    }
    const viewDescription = () => {
        setDescription(
        <Card.Text style={{fontSize:"1.75vw", fontWeight:"bolder"}}>
            {props.description}
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
            <Card.Title style={{fontSize:"2vw", fontWeight:"bolder"}}>{props.name}</Card.Title>
            <Card.Subtitle style={{fontSize:"1.3vw", fontWeight:"bold", "fontStyle":"italic"}}>{props.club}</Card.Subtitle>
            {description}
            {descButton}
            <button className='cardButton' style={{"backgroundColor": "greenyellow"}}>Book Now!</button>
        </Card.Body>
        
        </Card>
    );
};

export default EventCard;