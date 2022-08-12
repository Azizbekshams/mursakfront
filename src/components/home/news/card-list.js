import React, { useEffect, useState } from "react";
import CardNews from "./card";
import { Link } from "react-router-dom";
import './index.scss'
import axios from "axios";
import Lastpost from "../lastpost";
const CardList = () => {
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
    },[])
    return (
        <>
<div className="breadcrumb-area bg-color pt--150 pb--20" data-bg-color="#f6f6f6">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center flex-sm-row flex-column">
                            <h1 className="page-title" style={{marginTop:"50px"}}>Blog</h1>
                            <ul className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li className="current"><span>Blogs</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-content-wrapper">
            <div className="page-content-inner blog-page-sidebar ptb--80">
                <div className="container">
                    <div className="row">
                    
<div className="col-xl-9 col-lg-8 order-lg-2 mb-md--50" >
<div className="row">
{list.map((item,index)=>(
<div className="col-md-6 mb--50" key={index} >
<article className="blog blog-style-2">

                   
                        <div className="col-12 col-md-12 mb-2" >
                            <CardNews news={item}/>
                        </div>
                   
               
</article>
</div>

                   
))}

</div>

<div className="row">
<div className="col-12">
<nav className="pagination-wrap">
    <ul className="pagination">
        <li><a href="#" className="prev page-number"><i className="fa fa-angle-double-left"></i></a></li>
        <li><span className="current page-number">1</span></li>
        <li><a href="#" className="page-number">2</a></li>
        <li><a href="#" className="page-number">3</a></li>
        <li><a href="#" className="next page-number"><i className="fa fa-angle-double-right"></i></a></li>
    </ul>
</nav>
</div>
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


<Lastpost/>

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

        
        </>
       
    )
}

export default CardList