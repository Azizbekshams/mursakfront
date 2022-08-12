import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Lastpost= ()=>{
    const [list,setList] = useState([])
    useEffect(()=>{
              axios.get('http://localhost:3003/api/blog/home')
        .then(res => {
            console.log(res.data);
            setList(res.data)
        })
    },[])
    return(
        <div className="widget blog-widget widget-recent-posts mb--40">
<h3 className="widget-title mb--25">Recent Post</h3>
<div className="recent-post">

{list.map((item,index)=>(
  <div className="recent-post__item" key={item._id}>

<div className="recent-post__thumb">
<Link to={`/news/${item._id}`}>
<img src={`http://localhost:3003/${item.img}`} alt="Blog"/>
</Link>
</div>

<div className="recent-post__content">
<h6 style={{fontSize:"12px"}} className="recent-post__title text-truncate">
<Link to={`/news/${item._id}`}  >{item.title}  </Link>
</h6>
<span className="recent-post__meta">{item.createdAt}</span>
</div>
</div>  


))}






</div>
</div>
    )
}


export default Lastpost