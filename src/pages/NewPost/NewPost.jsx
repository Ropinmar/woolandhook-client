import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./NewPost.css"

const API_URL = process.env.REACT_APP_SERVER_URL;


const NewPost = () => {
    const [title, setTitle] = useState("");
    const [wovenCraft, setWovenCraft] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const { id } = useParams();

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        try{
            //prevent the form submited
        e.preventDefault();
        // console.log({title, wovenCraft, text, image, date});
        //send data to server
        const newPost = await axios.post(`${API_URL}/api/posts`, {
            title, 
            wovenCraft, 
            text, 
            image,
            date
        });
        //send to all posts
        navigate(`/posts/`)
        // navigate(`/posts/${newPost.data._id}`)
        }
        catch(err){
            console.log(err)
        }
        

    }


  return (
    // form to create a new post
    <div className="container row-12 d-flex h-100">
        <div className="col-7 justify-content-center align-items-center mt-5 probando2">
            <form className="col-12 g-4 justify-content-center align-items-center " onSubmit={handleSubmit}>

                <div className="col-8 mb-3">
                    <label htmlFor="titleInput" className="form-label">Title:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="New post" 
                    id="titleInput"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}></input>
                </div>

                <div className="col-8 mb-3">
                    <label htmlFor="wovenInput" className="form-label">Wovencraft</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Crochet, Macrame or knitting" 
                    id="wovenInput"
                    name="wovenCraft"
                    value={wovenCraft}
                    onChange={(e) => setWovenCraft(e.target.value)}></input>
                </div>

                <div className="col-8 mb-3">
                    <label htmlFor="textInput" className="form-label">Text about</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="New post" 
                    id="textInput"
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}></input>
                </div>

                <div className="col-8 mb-3">
                    <label htmlFor="imageInput" className="form-label">Image</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="New post" 
                    id="imageInput"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}></input>
                    {/* <img src={image} alt="" id="image" value={image} onChange={(e) => setImage(e.target.value)}/> */}
                </div>

                <div className="col-8 buttonForm">
                    <div className="mb-3 dateInput">
                        <label htmlFor="dateInput" className="form-label">Date</label>
                        <input 
                        className="form-control" 
                        type="date" 
                        name="date" 
                        id="dateInput"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}></input>
                    </div>
                    

                    <div className=''>
                        <button className="btn btn-outline-ligth btn-md buttonStart mx-2 mt-3" type="submit">Create</button>
                    </div>
                </div>

            </form>
        </div>



        <div className="row mt-3 container flex-column">


            <div className="row">
                <div className="col-6 p-0 m-0">
                    <img src="./images/signup-pic4.jpg" alt="" className="img-fluid signUp-pic borderPic"></img>
                </div>

                <div className="col-6 p-0 m-0">
                    <img src="./images/signup-pic2.jpg" alt="" className="img-fluid signUp-pic borderPic2"></img>
                </div>
                
                <div className="col-6 p-0 m-0">
                    <img src="./images/signup-pic.jpg" alt="" className="img-fluid signUp-pic borderPic3"></img>
                </div>

                <div className="col-6 p-0 m-0">
                    <img src="./images/signup-pic3.jpg" alt="" className="img-fluid signUp-pic borderPic4"></img>
                </div>
                </div>
        </div>
    </div>
  )
}

export default NewPost;