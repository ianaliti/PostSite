import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import MyButton from "./UI/button/MyButton";
import Loader from "./UI/Loader/Loader";



const SinglePage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([]);
    const navigate = useNavigate()
    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
            const response = await PostService.getCommentsByPostId(params.id)
            setComments(response.data);
        });
    
    useEffect(() => {
        fetchPostsById(params.id)
        fetchComments(params.id)
    }, [])

    const goBack = () => navigate(-1)

    return (
        <div style={{padding: '30px'}}>
            <h1>My post id is {params.id}</h1>
            {isLoading
            ? <Loader /> 
            : <div>{post.id}. {post.title}</div>
           }
           <h1>Comments</h1>
            {isComLoading
                ? <Loader/>
                : <div> 
                    {comments.map(comm => 
                        <div key={comm.id} style={{marginTop: 25}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                        )}
                    </div>
                }
            <MyButton onClick={goBack} style={{marginTop: 20}}>Back</MyButton>
        </div>
    )
}

export {SinglePage}