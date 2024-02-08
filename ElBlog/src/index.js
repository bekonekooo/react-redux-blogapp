import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';

import "./app.css"

import configureStore from './store/configureStore';
import { addBlog } from './actions/blogs';
import { removeBlog } from './actions/blogs';
import { editBlog } from './actions/blogs';

import { Provider } from 'react-redux';

const store = configureStore();


store.subscribe(()=>{
console.log(store.getState())
})

const blog1= store.dispatch(addBlog({title:"blog title 1",describe:"blog desribe 1"}))
const blog2= store.dispatch(addBlog({title:"blog title 2",describe:"blog desribe 2",dateAdded:Date.now()}))
store.dispatch(addBlog({title:"blog title 3",describe:"blog desribe 3",dateAdded:Date.now()}))


store.dispatch(editBlog(blog2.blog.id, {title: "Updated title"}));

store.dispatch(removeBlog({id:blog1.blog.id}))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>    <AppRouter /></Provider>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
