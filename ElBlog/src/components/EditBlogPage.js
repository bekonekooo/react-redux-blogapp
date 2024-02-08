// import React from 'react';
// import BlogForm from './BlogForm';
// import { connect } from 'react-redux';
// import { editBlog } from '../actions/blogs';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditBlogPage = (props) => {
 
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Edit page</h1>
//       <BlogForm blog={props.blog}
//       onSubmit={(blog)=>props.dispatch(editBlog(blog.id,blog))}
     
//       />
//     </div>
//   );

// };

// const mapStateToProps = (state, ownProps) => {
//   return {
//     blog: state.blogs.find((b) => b.id === ownProps.id)
//   };
// };
// export default connect(mapStateToProps)(EditBlogPage);
import React from 'react';
import BlogForm from './BlogForm';
import { connect } from 'react-redux';
import { editBlog, removeBlog } from '../actions/blogs';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlogPage = (props) => {
  const { id } = useParams(); // Extract id from URL params
  const navigate = useNavigate();

  return (
    <div>
      <h1>Edit page</h1>
      <BlogForm
        blog={props.blog}
        onSubmit={(blog) => {
          props.dispatch(editBlog(id, blog)); // Pass id along with the updated blog data
          navigate("/blogs");
        }}
      />
      <button onClick={()=>{
        props.dispatch(removeBlog({id:id}))
        navigate("/blogs")
      }}>DELETE  </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    blog: state.blogs.find((b) => b.id === ownProps.id)
  };
};

export default connect(mapStateToProps)(EditBlogPage);