import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeContext } from "../../context/theme.context";
import "./EditPost.css"
const API_URL = process.env.REACT_APP_SERVER_URL;

const EditPost = (props) => {
  const [title, setTitle] = useState("");
  const [wovenCraft, setWovenCraft] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const { postId } = useParams();

  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate()

  useEffect(() => {

    axios.get(`${API_URL}/api/posts/${postId}`)
    .then((response) => {
      const editPost = response.data;
      setTitle(editPost.title);
      setWovenCraft(editPost.wovenCraft);
      setText(editPost.text);
      setImage(editPost.image);
      setDate(editPost.date);
    })
    .catch(console.log);
  }, [postId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //info from body
    const requestBody = {title, wovenCraft, text, image, date};

    //request to update the post
    axios.put(`${API_URL}/api/posts/${postId}`, requestBody)
    .then((response) => {
      navigate(`/posts/`)
    });
  }
  
  return (
    <div className="container-fluid px-5 probando">
    <div className={"container-fluid row d-flex justify-content-center align-items-center p-2 pb-4 " + theme}>
      <div className="col-6 d-flex justify-content-center align-items-center fondoEdit2 p-3 rounded">
            <form className="col-12 light p-4 m-0" onSubmit={handleFormSubmit}>

                <div className="col-12 mb-3">
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

                <div className="col-12 mb-3">
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

                <div className="col-12 mb-3">
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

                <div className="col-12 mb-3">
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

                <div className="col-12 buttonForm">
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
                        <button className="btn btn-outline-ligth btn-md buttonStart mx-2 mt-3" type="submit">Edit!</button>
                    </div>
                </div>

            </form>
        </div>

    </div>
    </div>
  )
}

export default EditPost;