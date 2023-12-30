import React, { useState, useEffect } from "react";

const EventTimeline = ({ events }) => {
    const [sortedEvents, setSortedEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
  
    useEffect(() => {
      // Sort events by date in ascending order
      const sorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
      setSortedEvents(sorted);
    }, [events]);
  
    const handleEventClick = (event) => {
      setSelectedEvent(event);
    };
  
    return (
      <div className="event-timeline">
        <div className="event-list">
          {sortedEvents.map((event, index) => (
            <div key={index} className="event-group">
              <div className="event-date mt-2 p-1" style={{backgroundColor: "gray", color: "white"}}>{event.date}</div>
              <div
                className={`event-item ${selectedEvent === event ? "selected" : ""}`}
                onClick={() => handleEventClick(event)}
              >
                <div className="event-title mt-2 mb-2">{event.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="event-details">
          {selectedEvent && (
            <>
              <h2>{selectedEvent.title}</h2>
              <p>{selectedEvent.date}</p>
              <p>{selectedEvent.description}</p>
            </>
          )}
        </div>
      </div>
    );
  };

export default EventTimeline;