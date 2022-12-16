import React, {useState, useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./NewEvent.css";
import { ThemeContext } from "../../context/theme.context";
const API_URL = process.env.REACT_APP_SERVER_URL;

const NewEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [materials, setMaterials] = useState("");
  const [eventPic, setEventPic] = useState("");
  // const [author, setAuthor] = useState("");
//useContext to change the background
  const { theme } = useContext(ThemeContext);

  const  navigate = useNavigate();

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      console.log({title, description, date, materials, eventPic});
      //send to server
      const newEvent = await axios.post(`${API_URL}/api/events`,{title, description, date, materials, eventPic})
      //send to all events
      console.log(newEvent);
      navigate(`/events`);
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className="container-fluid px-5 probando">
        <div className={"container-fluid row-12 d-flex h-100 w-100 " + theme }>


            <div className="col mt-3 mb-5 p-2 borderShadow h-75">


                <div className={"row p-5 mx-3 mt-4 " + theme}>
                    <div className="col-6 p-0 m-0">
                        <img src="./images/new-event1.jpg" alt="" className="img-fluid size-pic-event forLeft"></img>
                    </div>

                    <div className="col-6 p-0 m-0">
                        <img src="./images/new-event2.jpg" alt="" className="img-fluid size-pic-event forRight"></img>
                    </div>
                    
                    <div className="col-12 p-0 m-0">
                        <img src="./images/new-event3.jpg" alt="" className="img-fluid size-pic-event forDown"></img>
                    </div>
                </div>
            </div>
            
            <div className="col-5  colorF3 p-3 borderShadow rounded h-75 m-2">
                <div className={"light col-12 container pt-2 p-3 d-flex justify-content-center align-items-center "}> 
                    <form className={"fondoOscuro col-8 rounded p-1 mb-0 pb-0"} onSubmit={handleSubmit}>
                            <div className="col-12 pt-2 text-center">
                                <h2>New Event</h2>
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="titleInputEvent" className="form-label">Title:</label>
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
                                {/* <img src={image} alt="" id="image" value={image} onChange={(e) => setImage(e.target.value)}/> */}
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
                                    <button className="btn btn-outline-ligth btn-md buttonStart mx-2 mt-3" type="submit">Create</button>
                                </div>
                            </div>

                    </form>
                </div>
                    
            </div>
        </div>
    </div>
  )
}

export default NewEvent