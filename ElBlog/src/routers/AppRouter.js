import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'

import HomePage from '../components/HomePage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import BlogListPage from '../components/BlogListPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import AddBlogPage from '../components/AddBlogPage'
import EditBlogPage from '../components/EditBlogPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogListPage />} />
        <Route path="/blogs/:id/:title/:describe"  element={<BlogDetailsPage />} />
        <Route path="/create" element={<AddBlogPage />} />
        <Route path='/edit/:id/:title/:describe' element={<EditBlogPage></EditBlogPage>}></Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default AppRouter
