import React from "react";
import {Routes,Route } from "react-router-dom";
import Home from "./components/home/home";
import Contact from "./components/home/contact";
import Products from './components/home/products'
import Blog from "./components/home/news/card-list";
import BlogDetails from "./components/home/blogdetails";
import Vakansi from "./components/home/vakansiya";
import Productsdetails from "./components/home/productsdetails";


const RouterList = () => {
    return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<Productsdetails/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/news/:id' element={<BlogDetails/>}/>
        <Route path='/vakansi' element={<Vakansi/>}/>
       
      </Routes>
    )
}

export default RouterList