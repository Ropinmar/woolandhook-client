import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_SERVER_URL;


const NewPost = () => {
    const [title, setTitle] = useState("");
    const [wovenCraft, setWovenCraft] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        try{
            //prevent the form submited
        e.preventDefault();
        console.log({title, wovenCraft, text, image, date});
        //send data to server
        const newPost = await axios.post(`${API_URL}/api/posts`, {title, wovenCraft, text, image});
        //send to all posts
        navigate(`/posts/${newPost.data._id}`)
        }
        catch(err){
            console.log(err)
        }
        

    }


  return (
    // form to create a new post
    <div className="container">
        <div className="row mt-3">
            <form className="row g-5" onSubmit={handleSubmit}>

                <div className="col-6">
                    <label for="titleInput" className="form-label">Title:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="New post" 
                    id="titleInput"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}></input>
                </div>

                <div className="col-6">
                    <label for="wovenInput" className="form-label">Wovencraft</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Crochet, Macrame or knitting" 
                    id="wovenInput"
                    name="wovenCraft"
                    value={wovenCraft}
                    onChange={(e) => setWovenCraft(e.target.value)}></input>
                </div>

                <div className="col-6">
                    <label for="textInput" className="form-label">Text about</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="New post" 
                    id="textInput"
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}></input>
                </div>

                <div className="col-6">
                    <label for="imageInput" className="form-label">Image</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="New post" 
                    id="imageInput"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}></input>
                </div>
                
                <div className="col-6">
                    <label for="dateInput" className="form-label">Date</label>
                    <input 
                    className="form-control" 
                    type="date" 
                    name="date" 
                    id="dateInput"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}></input>
                </div>
                

                <div className='col-12 justify-content-center align-items-center'>
                    <button className="btn btn-outline-ligth btn-lg buttonStart" type="submit">Create</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default NewPost;