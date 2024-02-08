// import React from 'react'
// import { useParams } from 'react-router-dom';
// import { connect } from 'react-redux';
// import BlogDetailsItem from './BlogDetailsItem';

// const BlogDetailsPage = (props) => {
  
//   const {id,title}=useParams();

//   return (
// <BlogDetailsItem { ...props}></BlogDetailsItem>
  
//   )
// }
// const mapStatetoProps =(state,props)=>{
//   return{
//     blog: state.blogs.find((blog)=>{
// return blog.id===props.id
//     })
//   }
// }
// export default connect(mapStatetoProps)(BlogDetailsPage)



import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogDetailsItem from './BlogDetailsItem';

const BlogDetailsPage = () => {


  const { id, title,describe } = useParams();


  return <BlogDetailsItem  id={id} title={title} describe={describe}   />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    blog: state.blogs.find((blog) => blog.id === ownProps.id)
  };
};

export default connect(mapStateToProps)(BlogDetailsPage);


// const BlogDetailsPage=(props)=>{
//   return(
//     <div>
//       Blog Details :{props.blog.title}
//     </div>
//   )
// }
// const mapStatetoProps=(state,props)=>{
//   return{
//     blog:state.blogs.find((blog)=>{
//       return blog.id ===props.match.params.id
//     })
//   }
// }
// export default connect(mapStatetoProps)(BlogDetailsPage)
