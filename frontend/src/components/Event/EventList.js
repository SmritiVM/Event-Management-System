import { useEffect, useState} from "react";
import Axios from "axios";
import EventCard from './EventCard';

const EventList = () => {
  const [arr, setArr] = useState([])

  useEffect(() => {
    Axios.get("https://eventhub-t514.onrender.com/eventRoute/event-list")
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
      const slotsLeft = "Slots Left: " + `${val.slots}`;
      return <EventCard obj = {val} action = "book" slotsLeft = {slotsLeft} />
    })
  }
  return (
    <div>
      <div fluid className='cardContainer'>
            {EventListItems()}
      </div>
    </div>
  );
};

export default EventList;
