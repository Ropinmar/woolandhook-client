import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,  useParams, useNavigate } from 'react-router-dom';
import "./EventList.css"

const API_URL = process.env.REACT_APP_SERVER_URL;


const EventList = (props) => {
    const [events, setEvents] = useState([]);
    const { eventId } = useParams();
    const navigate = useNavigate();

    const getEvents = () => {
        axios.get(`${API_URL}/api/events`)
        .then((response) => setEvents(response.data))
        .catch(console.log);
    };


    const handleDelete = async (event) => {
        try{
            console.log("Deleteando --->", event._id)
            await axios.delete(`${API_URL}/api/events/${event._id}`);
            // navigate("/events");
            const newEvents = events.filter(e => e._id !== event._id);

            setEvents(newEvents);

        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getEvents(eventId);
    }, [eventId]);

  return (
    <div>
    {events.map((event, id) => {
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center p-3 fondoEvents">
                <div key={event._id} className="col-8">
                    <div className="card m-3 border-0 bordeShadow bordeEvent">
                        <div className="row g-0 p-3">
                            <div className="col-md-4 bordeShadow bordeEvent2">
                                <img src={event.eventPic} className="img-thumbnail rounded-start w-75" alt="eventPic" />
                            </div>
                            <div className="col-md-8 bordeShadow bordeEvent2">
                                <div className="card-body">
                                <h5 className="card-title">{event.title}</h5>
                                <p className="card-text">{event.description}</p>
                                {/* <Link to={`/events/${event._id}`}></Link> */}
                                <p className="card-text">{event.materials}</p>
                                
                                <p className="card-text"><small className="text-muted">Date:{event.date}</small></p>
                                <p><strong>{event.author}</strong></p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-trash" viewBox="0 0 16 16" onClick={() => handleDelete(event)}>
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                                <Link to={`/edit-event/${event._id}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                                </Link>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )
    })}
            
    </div>
  )
}

export default EventList