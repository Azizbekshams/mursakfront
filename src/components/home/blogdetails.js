import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Lastpost from "./lastpost";
const BlogDetails =()=>{
    const [blog,setBlog] = useState({
        title:'',
        text:'',
        img:'',
        
    })
    let {id} = useParams()   
    const [list,setList] = useState([]) 
    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          axios.get('http://localhost:3003/api/blog/home')
          .then(res => {
              console.log(res.data);
              setList(res.data)
          })
        axios.get(`http://localhost:3003/api/blog/get/${id}`)
        .then(res => {
            console.log(res.data)
            setBlog(res.data)
        })
    },[])
    return(
       
        <div className="wrapper">
       
        <div className="breadcrumb-area bg-color pt--150 pb--20" data-bg-color="#f6f6f6">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center flex-sm-row flex-column">
                            <h1 className="page-title" style={{marginTop:"50px"}}>Blog Details</h1>
                            <ul className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li className="current"><span>Blog Details</span></li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
<div className="main-content-wrapper">
<div className="page-content-inner ptb--80">
    <div className="container">
        <div className="row mb--75">
            <div className="col-lg-8 col-xl-9 order-lg-2 mb-md--50">
                <div className="single-post">
                
                    <article className="single-post-details">
                        <div className="entry-header">
                            <h2 className="entry-title">{blog.title}</h2>
                            <div className="entry-meta mb--30">
                               
                                <span className="meta-separator">-</span>
                               
                            </div>
                        </div>
                        <div className="entry-media">
                            <div className="image">
                            <img src={'http://localhost:3003/'+blog.img}  alt="Post Thumbnail"/>
                            </div>
                        </div>
                        <div className="entry-content" dangerouslySetInnerHTML={{ __html: blog.text }}>
                        


                           
                        </div>

                        <div className="entry-footer-meta">
                            <div className="tag-list">
                                <span>
                                    <i className="fa fa-tags"></i>
                                </span>
                                <span>
                                    <a href="#">Business</a>,
                                    <a href="#">Creative</a>,
                                    <a href="#">Start-up</a>
                                </span>
                            </div>
                            <div className="author">
                                <span>
                                    Author: <a href="#">Mursak admin</a>
                                </span>
                            </div>
                        </div>
                    </article>
                    
                  
                   
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 order-lg-1">
                            <div className="sidebar-inner">
                                <div className="widget blog-widget widget-categories mb--40">
                                    <h3 className="widget-title mb--25">Categories</h3>
                                    <ul className="widget-list category-list">
                                        <li>
                                            <Link to="/blog">
                                                <span>Blogs</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/products">
                                                <span>Products</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>Furniture</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>Life Style</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>New Look</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>Photography</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>Technology</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>Travel</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                
                               
                                <div className="widget blog-widget widget-meta mb--40">
                                    <h3 className="widget-title mb--25">Meta</h3>
                                    <ul className="widget-list category-list">
                                        <li>
                                            <a href="https://t.me/zikoshams">
                                                <span>Site Admin</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/mursakboutique">
                                                <span>Telegram Chanel</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Instagram</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Twitter</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
        </div>
     
        </div>
    </div>
</div>
        </div>
    
    
        
    )
}

export default BlogDetails