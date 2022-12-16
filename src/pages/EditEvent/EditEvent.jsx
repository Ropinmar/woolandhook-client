import React, {useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import "./EditEvent.css";
import { ThemeContext } from "../../context/theme.context";
const API_URL = process.env.REACT_APP_SERVER_URL;

const EditEvent = (props) => {

    console.log(props)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [materials, setMaterials] = useState("");
    const [eventPic, setEventPic] = useState("");
    const { eventId } = useParams();
    //useNavigate 
    const navigate = useNavigate();
    //theme for chance background
    const { theme } = useContext(ThemeContext);

    useEffect (() => {
        axios.get(`${API_URL}/api/events/${eventId}`)
        .then((response) => {
            const oneEvent = response.data;
            setTitle(oneEvent.title);
            setDescription(oneEvent.description);
            setDate(oneEvent.date);
            setMaterials(oneEvent.materials);
            setEventPic(oneEvent.eventPic);
        })
        .then(console.log(eventId))
        .catch(console.log);
    }, [eventId]);
// form control for editing, getting data from body and then putting in the code
  const handleFormSubmitE = (e) => {
    e.preventDefault();

    const requestBody = {title, description, date, materials, eventPic};
    axios.put(`${API_URL}/api/events/${eventId}`, requestBody)
    .then((response) => {
        navigate(`/events`)
    });
  };

  return (
    // form for editing the event 
    <div className="container-fluid row px-5 m-0 probando">
        <div className={"container prueba2 d-flex justify-content-center align-items-center row pb-4 " + theme}>
            <div className="col-7 p-3  justify-content-center align-items-center mt-4  borderShadow prueba rounded">
                <form className="col-12 g-4 justify-content-center align-items-center p-4 light" onSubmit={handleFormSubmitE}>

                    <div className="col-12 mb-3">
                        <label htmlFor="titleInputEvent" className="form-label"><h2>Title:</h2></label>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="New event" 
                        id="titleInputEvent"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}></input>
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlFor="descriptionInput" className="form-label">Description:</label>
                        <input 
                        type="text" 
                        className="form-control"
                        id="descriptionInput"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}></input>
                    </div>


                    <div className="col-12 mb-3">
                        <label htmlFor="materialsInput" className="form-label">Materials:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="What will we need?" 
                        id="materialsInput"
                        name="materials"
                        value={materials}
                        onChange={(e) => setMaterials(e.target.value)}></input>
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlFor="imageInputEvent" className="form-label">Image:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="url" 
                        id="imageInputEvent"
                        name="eventPic"
                        value={eventPic}
                        onChange={(e) => setEventPic(e.target.value)}></input>
                        
                    </div>

                    <div className="col-12 buttonForm">
                        <div className="mb-3 dateInput">
                            <label htmlFor="dateInputEvent" className="form-label">Date</label>
                            <input 
                            className="form-control" 
                            type="date" 
                            name="date" 
                            id="dateInputEvent"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}></input>
                        </div>
                        

                        <div className=''>
                            <button className="btn btn-outline-ligth btn-md buttonStart mx-2 mt-3" type="submit">Edit!</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default EditEvent;