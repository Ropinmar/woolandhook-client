import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const API_URL = process.env.REACT_APP_SERVER_URL;
console.log(API_URL)
const PostsListPage = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    axios
    .get(`${API_URL}/api/posts`)
    .then((response) => setPosts(response.data))
    .catch(console.log);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return(
          <div key={post._id}>
            {/* <Link to={`/posts/${post._id}`}>
              <h3>{post.title}</h3>
              <h4>{post.wovenCraft}</h4>
              <p>{post.text}</p>
              <img src={post.image} alt="postPic"/>
            </Link> */}
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col  gy-5">
                <div className="card padding-card">
                  <img src={post.image}  className="card-img-top" alt="postPic"/>
                  <div className="card-body">
                  <Link to={`/posts/${post._id}`}>
                    <h2 className="card-title">{post.title}</h2>
                    </Link>
                    <h4>{post.author}</h4>
                    <h4>{post.wovenCraft}</h4>
                    <h4>{post.date}</h4>
                    <p className="card-text">{post.text}</p>
                    {/* <p className="card-text">{post.comments}</p> */}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostsListPage;