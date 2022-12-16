import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NewComment from '../NewComment/NewComment';
import "./PostsListPage.css";
import { ThemeContext } from "../../context/theme.context";
import moment from "moment";

const API_URL = process.env.REACT_APP_SERVER_URL;
// console.log(API_URL)
const PostsListPage = (props) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const { theme } = useContext(ThemeContext);

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


  return (
    <div className="container-fluid px-5 probando">
    <div  className={"container row d-flex justify-content-center mx-4 pt-2  backgroundColor " + theme}>
      {posts.map((post, index) => {
        return(
          <div key={post._id} className="col-md-3 mx-5 ms-1 mb-2  p-2 fondo rounded">            
              
                <div className="card text-start shadowBorde p-1">
                  
                    <img src={post.image} className="card-header picForCard" alt="postPic"/>
                  
                  <div className="card-body p-0">
                    <div className="row pb-3 pt-3 m-1 d-flex justify-content-start align-items-center">
                       <div className="col-8">
                        <h2 className="card-title">Title: {post.title[0].toUpperCase() + post.title.substring(1)}</h2>
                      </div>
                      <div className="col-8">
                        <h4><strong>{post.author} </strong>Kind of wovencraft: {post.wovenCraft}</h4>
                      </div>
                      <div className="col-8">
                        <p className="card-text">info: {post.text}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center col">

                      <button onClick={() => handleShowComments(index)} className="btn btn-light col-4 d-flex justify-content-start btnSign">Comments</button>

                        {post.showComments &&
                        <>
                          {post.comments.map((comment) => {
                            return (
                              <div className="col-6 card-text">
                              <h5 key={comment._id}>{comment.content}</h5>
                              </div>
                              )
                          })}
                        </>
                        }

                      {/* <p className="card-text">{post.comments}</p> */}
                      <div className="col-3">
                        <Link to={`/edit-post/${post._id}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg>
                        </Link>


                         {/* modal to delete */}
                        <button type="button" className="btn btn-outline-light btn-sm col-6" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-trash" viewBox="0 0 16 16" >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        </button>

                           
                          <div className="modal fade col-md-3 ms-auto" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog p-3 fondo rounded">
                              <div className={"modal-content p-3 d-flex justify-content-center align-items-center light " + theme}>
                                <div className="modal-body col ">
                                  <h1>Delete the post?</h1>
                                </div>
                                <div className="modal-footer col-8">
                                  <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-outline-secondary" onClick={() => handleDelete(post)}>Sure!</button>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>

                     
                    </div>

                  </div>
                  <div className="card-footer text-muted">
                    <h6>{moment(post.date).format("DD/MM/YYYY")}</h6>
                    <NewComment />
                  </div>
                    
                  
                </div>              
            
          </div>
        );
      })}
      
    </div>
    </div>
  );
};

export default PostsListPage;