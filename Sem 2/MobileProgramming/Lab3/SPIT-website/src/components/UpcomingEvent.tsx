// UpcomingEvents.tsx
import { image } from "ionicons/icons";
import "../style/UpcomingEvent.scss"
import React from 'react';

const UpcomingEvent: React.FC = () => {
  // Dummy data for upcoming events
  const upcomingEvents = [
    { id: 1, title: 'E-Summit', date: '2024-02-10', location: 'IIT Bombay', imgSrc: 'https://www.spit.ac.in/wp-content/uploads/2020/03/I_Hack_ESummit2020Horizontal-Scaled-150x150.png' },
    { id: 2, title: 'AICTE ATAL', date: '2024-02-15', location: 'Bhavan\'s Campus', imgSrc: 'https://www.spit.ac.in/wp-content/uploads/2022/01/SMC-ATAL-FFDP-Image.jpg' },
    { id: 3, title: 'Event 3', date: '2024-02-20', location: 'Location 3', imgSrc: 'https://www.spit.ac.in/wp-content/uploads/2022/10/brochure_mca.png  ' },
  ];

  return (
    <div className="upcoming-events">
      <h2 className="title">Upcoming Events</h2>
      {upcomingEvents.map(event => (
        <div className="event" key={event.id}>
          <div className="event-info">
            <div>
              <h3 className="event-title">{event.title}</h3>
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
