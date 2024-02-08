import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogList = (props) => {

  return (
<ul>
    {props.blogs.map(blog =>{
      // console.log(props.blogs)
        // console.log(blog.describe)
        return <BlogListItem  key={blog.id} {...blog}></BlogListItem>
    })}
</ul>
  )
}

const mapStatetoProps=(state)=>{
    return {
        blogs:state.blogs
    }
}
export default connect(mapStatetoProps)(BlogList);
