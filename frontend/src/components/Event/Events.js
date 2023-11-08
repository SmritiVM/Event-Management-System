import { Container, Row, Col } from 'react-bootstrap';

import EventCard from './EventCard';

const EventList = () => {
  return (
    <div>
      <h1>Events list</h1>
      <div fluid className='cardContainer'>
            <EventCard name = "Lohri" club = "CultureIT" date = "2023-04-02" time = "17:30 - 18:30" place = "Cricket ground" description = "yolo yolo yolo ya"/>
            <EventCard name = "Lohri" club = "CultureIT" date = "2023-04-02" time = "17:30 - 18:30" place = "Cricket ground"/>
            <EventCard name = "Lohri" club = "CultureIT" date = "2023-04-02" time = "17:30 - 18:30" place = "Cricket ground"/>
            <EventCard name = "Lohri" club = "CultureIT" date = "2023-04-02" time = "17:30 - 18:30" place = "Cricket ground"/>
            <EventCard name = "Lohri" club = "CultureIT" date = "2023-04-02" time = "17:30 - 18:30" place = "Cricket ground"/>
            <EventCard name = "Lohri" club = "CultureIT" date = "2023-04-02" time = "17:30 - 18:30" place = "Cricket ground"/>
      </div>
    </div>
  );
};

export default EventList;
