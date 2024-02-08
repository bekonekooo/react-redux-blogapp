import React from 'react'
 

const BlogDetailsItem = ({id,title,describe}) => {

  return (
    
    <div>
      <p>blog id: {id}</p>
      <p>blog title: {title} </p>
      <p>blog describe: {describe}</p>
    </div>
  )
}

export default BlogDetailsItem
