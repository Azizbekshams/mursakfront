// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom"
// import axios from "axios";
// import BlogDetails from "./blogdetails";

// const Blog =()=>{

//     const [list,setList] = useState([])
//     useEffect(()=>{
//         axios.get('http://localhost:3003/api/blog/home')
//         .then(res => {
//             console.log(res.data)
//             setList(res.data)
//         })
//     },[])

//     return(
//         <div>
//         <div className="breadcrumb-area bg-color ptb--130" data-bg-color="#f6f6f6">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="d-flex justify-content-between align-items-center flex-sm-row flex-column">
//                             <h1 className="page-title" style={{marginTop:"50px"}}>Blog</h1>
//                             <ul className="breadcrumb">
//                                 <li><a href="index.html">Home</a></li>
//                                 <li className="current"><span>Blog Grid</span></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
     
//         <div className="main-content-wrapper">
//             <div className="page-content-inner blog-page-sidebar ptb--80">
//                 <div className="container">
//                     <div className="row">

// <div className="col-xl-9 col-lg-8 order-lg-2 mb-md--50">
// <div className="row">


// {list.map((item,index)=>(

// <div className="col-md-6 mb--50" key={index}>
// <article className="blog blog-style-2">
//     <div className="blog-media">
//         <figure className="image">
//             <Link to="/blogdetails">
//                 <img src={`http://localhost:3003/${item.img}`} alt="Blog"/>
//             </Link>
//         </figure>
//     </div>
    
//     <div className="blog-info">
//         <h2 className="blog-title">
//             <a href="single-post-image.html">{item.title}</a> <br />
//             <span style={{fontSize:"12px", color:"grey"}}>{item.createdAt}</span>
//         </h2>
//         <div className="blog-meta">
            
//             <div className="blog-meta--right">
//                 <Link to="/blogdetails" className="btn btn-no-bg btn-color-dark">Read More <i className="fa fa-angle-double-right"></i></Link>
//             </div>
//         </div>
//     </div>
// </article>
// </div>

//                     ))}


// </div>

// <div className="row">
// <div className="col-12">
// <nav className="pagination-wrap">
//     <ul className="pagination">
//         <li><a href="#" className="prev page-number"><i className="fa fa-angle-double-left"></i></a></li>
//         <li><span className="current page-number">1</span></li>
//         <li><a href="#" className="page-number">2</a></li>
//         <li><a href="#" className="page-number">3</a></li>
//         <li><a href="#" className="next page-number"><i className="fa fa-angle-double-right"></i></a></li>
//     </ul>
// </nav>
// </div>
// </div>
// </div>

// <div className="col-xl-3 col-lg-4 order-lg-1">
// <div className="sidebar-inner">
// <div className="widget blog-widget widget-categories mb--40">
// <h3 className="widget-title mb--25">Categories</h3>
// <ul className="widget-list category-list">
// <li>
// <a href="">
// <span>Cafe</span>
// <i className="fa fa-angle-double-right"></i>
// </a>
// </li>
// <li>
// <a href="">
// <span>Fashion</span>
// <i className="fa fa-angle-double-right"></i>
// </a>
// </li>
// <li>
// <a href="">
// <span>Furniture</span>
// <i className="fa fa-angle-double-right"></i>
// </a>
// </li>
// <li>
// <a href="">
// <span>Life Style</span>
// <i className="fa fa-angle-double-right"></i>
// </a>
// </li>
// <li>
// <a href="">
// <span>New Look</span>
// <i className="fa fa-angle-double-right"></i>
// </a>
// </li>
// <li>
// <a href="">
// <span>Photography</span>
// <i className="fa fa-angle-double-right"></i>
// </a>
// </li>
// <li>
// <a href="">
// <span>Technology</span>
// <i className="fa fa-angle-double-right"></i>
// </a>
// </li>
// <li>
// <a href="">
// <span>Travel</span>
// <i className="fa fa-angle-double-right"></i>
// </a>
// </li>
// </ul>
// </div>
// <div className="widget blog-widget widget-recent-posts mb--40">
// <h3 className="widget-title mb--25">Recent Post</h3>
// <div className="recent-post">

// <div className="recent-post__item">

// <div className="recent-post__thumb">
// <a href="single-post-image.html">
// <img src="assets/img/mursak/IMG_5250.png" alt="Blog"/>
// </a>
// </div>

// <div className="recent-post__content">
// <h3 className="recent-post__title text-truncate">
// <a href="single-post-image.html">My iPhone Photos</a>
// </h3>
// <span className="recent-post__meta">September 15, 2021</span>
// </div>
// </div>

// <div className="recent-post__item">
// <div className="recent-post__thumb">
// <a href="single-post-image.html">
// <img src="assets/img/mursak/photo_2022-07-17_13-53-59.jpg" alt="Blog"/>
// </a>
// </div>
// <div className="recent-post__content">
// <h3 className="recent-post__title text-truncate">
// <a href="single-post-image.html">Summer Night Party</a>
// </h3>
// <span className="recent-post__meta">September 15, 2018</span>
// </div>
// </div>
// <div className="recent-post__item">
// <div className="recent-post__thumb">
// <a href="single-post-image.html">
// <img src="assets/img/mursak/photo_2022-07-17_13-54-03.jpg" alt="Blog"/>
// </a>
// </div>
// <div className="recent-post__content">
// <h3 className="recent-post__title text-truncate">
// <a href="single-post-image.html">10 ways care your skin in home</a>
// </h3>
// <span className="recent-post__meta">September 15, 2018</span>
// </div>
// </div>
// <div className="recent-post__item">
// <div className="recent-post__thumb">
// <a href="single-post-image.html">
// <img src="assets/img/mursak/photo_2022-05-08_15-26-39.jpg" alt="Blog"/>
// </a>
// </div>
// <div className="recent-post__content">
// <h3 className="recent-post__title text-truncate">
// <a href="single-post-image.html">Forever youth</a>
// </h3>
// <span className="recent-post__meta">September 15, 2018</span>
// </div>
// </div>
// </div>
// </div>

// <div className="widget blog-widget widget-meta mb--40">
// <h3 className="widget-title mb--25">Meta</h3>
// <ul className="widget-list category-list">
// <li>
// <a href="https://t.me/zikoshams">
// <span>Site Admin</span>
// <i className="fa fa-angle-double-right"></i>
// </a>
// </li>
// <li>
// <a href="https://t.me/mursakboutique">
// <span>Telegram Chanel</span>
// <i className="fa fa-angle-double-right"></i>
// </a>
// </li>
// <li>
// <a href="#">
// <span>Instagram</span>
// <i className="fa fa-angle-double-right"></i>
// </a>
// </li>
// <li>
// <a href="#">
// <span>Twitter</span>
// <i className="fa fa-angle-double-right"></i>
// </a>
// </li>

// </ul>
// </div>

// </div>
// </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
       


    


//         </div>
//     )
// }

// export default Blog