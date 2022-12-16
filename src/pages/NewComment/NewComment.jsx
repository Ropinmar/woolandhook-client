import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./NewComment.css"
const API_URL = process.env.REACT_APP_SERVER_URL;

const NewComment = (props) => {
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState([]);
    const [idPost, setIdPost] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${API_URL}/api/comments`,{content, post: idPost})
        // .then(() => console.log(idPost))
        // .then((respuesta) => respuesta.json())
        .then(() => navigate(`/posts`))
        .catch(console.log)
    }

    const getPosts = async () => {
        try{
            //get posts
            const allPosts = await axios.get(`${API_URL}/api/posts`);
            setPosts(allPosts.data);
            setIdPost(allPosts.data[0]._id);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

  return (
    <div className="row p-0">
        <form onSubmit={handleSubmit} className=" col">
        
            <label><h6>What do you think?</h6></label>
            <input 
            type="text" 
            name="content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            className="rounded col-10">
            </input>

            <div  className="col-12d-flex align-items-center justify-content-between mt-1 p-1">
                <label><h6 className="btn">Post</h6></label>
                <select onChange={(e) => setIdPost(e.target.value)} className="btn btn-light border rounded  btn-sm">
                    {posts.map(({_id, title}) => {
                    return <option key={_id} value={_id}>{title}</option>
                    })}
                </select>
                <button type="submit" className="btn btn-light btn-sm ">Comment!</button>
            </div>
        </form>
    </div>
  )
}

export default NewComment