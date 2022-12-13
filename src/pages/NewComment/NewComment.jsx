import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <div>NewComment
        <form onSubmit={handleSubmit}>
            <label>What do you think?</label>
            <input 
            type="text" 
            name="content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)}>
            </input>
            <label>Post</label>
            <select onChange={(e) => setIdPost(e.target.value)}>
                {posts.map(({_id, title}) => {
                   return <option key={_id} value={_id}>{title}</option>
                })}
            </select>
            <button type="submit">Comment!</button>

        </form>
    </div>
  )
}

export default NewComment