import React from 'react'
import BlogForm from './BlogForm'
import {connect} from "react-redux"
import {addBlog} from "../actions/blogs"
import { useNavigate } from 'react-router-dom';


const AddBlogPage = (props) => {

  const navigate = useNavigate();
  const handleSubmit = (blog) => {
    props.dispatch(addBlog(blog));
    navigate("/blogs");
  };

  return (
    <div>
      <h1>Add Blog</h1>
      <BlogForm onSubmit={handleSubmit }></BlogForm>
 
    </div>
  )

}

export default connect()(AddBlogPage)
