// UpcomingEvents.tsx
import { image } from "ionicons/icons";
import "../style/UpcomingEvent.scss"
import React from 'react';

const UpcomingEvent: React.FC = () => {
  // Dummy data for upcoming events
  const upcomingEvents = [
    { id: 1, title: 'Carnival', date: '2024-02-10', location: 'IIT Bombay', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/oculus-2023.appspot.com/o/events%2Fposters%2Fcarnival_Card.png?alt=media&token=49e974db-3303-4373-b151-196ca6239490', link:"https://oculus.spit.ac.in/events/carnival" },
    { id: 2, title: 'IPL Auction', date: '2024-02-15', location: 'Bhavan\'s Campus', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/oculus-2023.appspot.com/o/events%2Fposters%2FIpl_Card.png?alt=media&token=7d4a2e7d-d829-4c6e-9c96-64aa07f08d52', link:"https://oculus.spit.ac.in/events/ipl" },
    { id: 3, title: 'Sargam', date: '2024-02-20', location: 'Bhavan\'s Campus', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/oculus-2023.appspot.com/o/events%2Fposters%2FOculus_Sargam%20Card.png?alt=media&token=21e571f4-d7b3-4c4d-bfc1-539eac97ac7c' , link:"https://oculus.spit.ac.in/events/sargam"},
  ];

  return (
    <div className="upcoming-events">
      <h2 className="title">Upcoming Events</h2>
      {upcomingEvents.map(event => (
        <div className="event" key={event.id}>
          <div className="event-info">
            <div>
              <a href={event.link} className="linkStyle" target="_self"><h3 className="event-title">{event.title}</h3></a>
              <p className="event-date">Date: {event.date}</p>
              <p className="event-location">Location: {event.location}</p>
            </div>
            <img className="event-image" src={event.imgSrc} alt="event" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvent;
