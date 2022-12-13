import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NewComment from '../NewComment/NewComment';
import "./PostsListPage.css"


const API_URL = process.env.REACT_APP_SERVER_URL;
// console.log(API_URL)
const PostsListPage = (props) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getAllPosts = () => {
    axios
    .get(`${API_URL}/api/posts`)
    .then((response) => {
      // setPosts(response.data)
      const posts = response.data.map((post) => {
       return {...post, showComments: false}
      })
      setPosts(posts);
       })
    .catch(console.log);
  };

  const handleShowComments = (position) => {
    console.log(position)
    const postsUpdated = posts.map((post, index) => {
      if(position === index){
        post.showComments = !post.showComments;
      }
      return post;
    })
    setPosts(postsUpdated);
  }

  

  const handleDelete = async (post) => {
    try{
      console.log("Delete -->", post._id)
    //connect to server
    await axios.delete(`${API_URL}/api/posts/${post._id}`);
    // navigate("/posts")
    const newPosts = posts.filter(p => p._id !== post._id);
    setPosts(newPosts);
    }
    catch(err){
      console.log(err)
    }
    
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  // const handleDelete = (post) => {
  //   console.log("Delete -->", post)
  //   //connect to server
  //   axios
  //   .delete(`${API_URL}/api/posts/${post._id}`)
  //   .then()
  //   .then(navigate("/posts"))
  // }

  return (
    <div  className="container-fluid row justify-content-center">
      {posts.map((post, index) => {
        return(
          <div key={post._id} className="col-md-3 m-4 ms-3 p-2 fondo rounded">            
              
                <div className="card text-start shadowBorde p-1">
                  
                    <img src={post.image} className="card-header picForCard" alt="postPic"/>
                  
                  <div className="card-body">
                    {/* <Link to={`/posts/${post._id}`}>
                    </Link> */}
                    
                    <h2 className="card-title">{post.title}</h2>
                    <h4><strong>{post.author} </strong>- {post.wovenCraft}</h4>
                    
                    <p className="card-text">{post.text}</p>

                    <div className="d-flex justify-content-between">

                      <p>
                        <a className="btn btn-primary collapsed" data-bs-toggle="collapse" href={post._id} role="button"  aria-controls="CollapseExample1" onClick={() => handleShowComments(index)}>Comments</a>
                      </p>
                    
                      {post.showComments &&
                        <>
                        {post.comments.map((comment) => {
                          return (
                        <div className="row">
                          <div className="-collapse collapse" id={post._id} >
                            <div className="card card-body" key={comment._id}>
                             <h1>{comment.content}</h1>
                            </div>
                          </div>
                        </div>
                        )
                      })}
                      </>
                      }

                      {/* <p className="card-text">{post.comments}</p> */}
                      <div>
                        <Link to={`/edit-post/${post._id}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg>
                        </Link>

                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-trash" viewBox="0 0 16 16" onClick={() => handleDelete(post)}>
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>

                      </div>

                      {/* <Link to="/new-comment"></Link> */}
                        <h6 className="card-link" ><a href="/new-comment">New Comment</a></h6>
                        
                    </div>

                  </div>
                  <div className="card-footer text-muted">
                    <h6>{post.date}</h6>
                    <NewComment />
                  </div>
                    
                  
                </div>              
            
          </div>
        );
      })}
      
    </div>
  );
};

export default PostsListPage;