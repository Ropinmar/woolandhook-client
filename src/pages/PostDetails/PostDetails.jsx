import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./PostDetails.css"
const PostDetails = (props) => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    const getDetails = (id) => {
        axios
        .get(`http://localhost:5005/api/posts/${id}`)
        .then((response) => setPost(response.data))
        .catch(console.log)
    }

    useEffect(() => {
        getDetails(id)
    }, [id])
  return (
    <div>
        {post && (
            <>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
            </>
        )}
        {post && 
            post.comments.map((comment) =>(
                <li key={comment.id}>
                    <h3>{comment.content}</h3>
                </li>
            ))
        }
        
    </div>
  )
}

export default PostDetails
