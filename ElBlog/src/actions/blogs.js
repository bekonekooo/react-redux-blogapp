//ACTION
import { v4 as uuidv } from 'uuid';
export const addBlog=({title="",describe="",dateAdded=0     })=>({
    type:"ADD_BLOG",
      blog:{
          id:uuidv(),
          title:title,
          describe:describe,
          dateAdded:dateAdded
      }
  })
  
  export const removeBlog =({id})=>(
    {
      type:"REMOVE_BLOG",
      id:id
    }
  )
  export  const editBlog=(id,updates)=>({
        type:"EDIT_BLOG",
        id,
        updates
      })