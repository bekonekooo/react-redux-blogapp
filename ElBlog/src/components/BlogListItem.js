import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({id,title,describe}) => {
  return (
    
    <li key={id}>
            {title} - <Link to={`/blogs/${id}/${title}/${describe}`}>Details</Link>
             - <Link to={`/edit/${id}/${title}/${describe}`}>Edit</Link>
    </li>
  )
}

export default BlogListItem
