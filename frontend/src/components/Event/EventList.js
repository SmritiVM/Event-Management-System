import { useEffect, useState} from "react";
import Axios from "axios";
import EventCard from './EventCard';

const EventList = () => {
  const [arr, setArr] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:4000/eventRoute/event-list")
    .then((res) => {
      if(res.status === 200)
        setArr(res.data);
        // console.log(arr);}
      else
        Promise.reject();
    })
    .catch((err) => alert(err));
  })
  
  const EventListItems  = () => {
    return arr.map((val, index) => {
      return <EventCard obj = {val} action = "book"/>
    })
  }
  return (
    <div>
      <h1>Events list</h1>
      <div fluid className='cardContainer'>
            {EventListItems()}
            {/* <EventCard name = "Lohri" club = "CultureIT" date = "2023-04-02" time = "17:30 - 18:30" place = "Cricket ground" description = "yolo yolo yolo ya"/>
            <EventCard name = "Lohri" club = "CultureIT" date = "2023-04-02" time = "17:30 - 18:30" place = "Cricket ground"/>
            <EventCard name = "Lohri" club = "CultureIT" date = "2023-04-02" time = "17:30 - 18:30" place = "Cricket ground"/>
            <EventCard name = "Lohri" club = "CultureIT" date = "2023-04-02" time = "17:30 - 18:30" place = "Cricket ground"/>
            <EventCard name = "Lohri" club = "CultureIT" date = "2023-04-02" time = "17:30 - 18:30" place = "Cricket ground"/>
            <EventCard name = "Lohri" club = "CultureIT" date = "2023-04-02" time = "17:30 - 18:30" place = "Cricket ground"/> */}
      </div>
    </div>
  );
};

export default EventList;
