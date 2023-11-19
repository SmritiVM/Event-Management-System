import { useEffect, useState } from "react";
import Axios from "axios";

import EventCard from "./EventCard";

export default function BookedEventsList(){
    const [arr, setArr] = useState([])
    const user = localStorage.getItem("user");
    useEffect(() => {
        Axios.get("https://eventhub-t514.onrender.com/eventRoute/check-user/" + user)
        .then((res) => {
            if(res.status === 200){
                if(res.data != null){
                    setArr(res.data.bookedEvents);
                }
            }
            else
                Promise.reject();
        })
    })

    const BookedItems = () => {
        return arr.map((val, index) => {
            return <EventCard obj = {val} action = "view"/>
        })
    }

    return(
        <div>
            <div fluid className="cardContainer">
                {BookedItems()}
            </div>
        </div>
    )
    
}