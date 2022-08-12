import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import axios from "axios";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link } from "react-router-dom";
import './oneclick.scss'
const Products =()=>{
    const [list,setList] = useState([])
    const [count,setCount]=useState('')
    const [value, setValue] = useState()
    
    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        axios.get('http://localhost:3003/api/products/getall')
        .then(res => {
            console.log(res.data,"ttt");
            setList(res.data)
            setCount(res.data.length)
        })
       
    },[])

  
     const[toggle,setToggle]=useState(false)
    const [info,setInfo] = useState(false)
    const [idpro,setIdPro]=useState('')

    const sendOneClick = (e) =>{
        e.preventDefault()
        let oneform = document.forms.oneclickform
        let formData = new FormData(oneform)
        axios.post('http://localhost:3003/api/oneclick',formData)
        .then(res => {
            console.log(res.data,'daaa');
            if (res.data == 'ok'){
                setInfo(true)
                setValue('')
                setToggle(false)
                oneform.reset()
            } else {
                setInfo(false)
            }
        })
    }

  const Oneclick =(id)=>{
    setToggle(true)
    setIdPro(id)

    }

    return(
        <>

         <div className="wrapper">

        <div style={{backgroundColor:"rgb(246, 246, 246)"}} className="breadcrumb-area bg-color ptb--130" data-bg-color="#f6f6f6">
            
<div className="container">
<div className="row">
<div className="col-12">
<div className="d-flex justify-content-between align-items-center flex-sm-row flex-column">
    
<h1 className="page-title" style={{marginTop:"50px"}}>Mursak's Products</h1>
<ul className="breadcrumb">
    <li><a href="/">Home</a></li>
    <li className="current"><span>Boutique Products</span></li>
</ul>
</div>
</div>
</div>
</div>
</div>
        
        <div  className="main-content-wrapper">
            <div className="shop-page-wrapper shop-fullwidth ptb--80">

                <div className="container">
                    <div className="row mb--50">
                        <div className="col-12">
            <div className="shop-toolbar">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-md--50 mb-xs--10">
                        <div className="shop-toolbar__left d-flex align-items-sm-center align-items-start flex-sm-row flex-column">
                            <div className="product-view-mode mr--50 mr-xs--0">
                                {/* <a className="active" href="#" data-target="grid">
                                    <img src="assets/img/icons/grid.png" alt="Grid" />
                                </a>
                                <a href="#" data-target="list">
                                    <img src="assets/img/icons/list.png" alt="Grid" />
                                </a> */}
                            </div>
                            <p className="product-pages">Showing {count} results</p>
                        </div>
                    </div>
        <div className="col-lg-6">
            <div className="shop-toolbar__right d-flex justify-content-lg-end justify-content-start flex-sm-row flex-column">
                {/* <div className="product-categories mb-xs--15 mr--50 mr-xs--0">
                    <select className="product-categories__select nice-select">
                        <option value="nav-all">All</option>
                        <option value="nav-men">Men</option>
                        <option value="nav-women">Women</option>
                        <option value="nav-kidz">Kidz</option>
                        <option value="nav-accessories">Accessories</option>
                    </select>
                </div>
                <div className="product-ordering">
                    <select className="product-ordering__select nice-select">
                        <option value="0">Default Sorting</option>
                        <option value="1">Relevance</option>
                        <option value="2">Name, A to Z</option>
                        <option value="3">Name, Z to A</option>
                        <option value="4">Price, low to high</option>
                        <option value="5">Price, high to low</option>
                    </select>
                </div> */}
            </div>
        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

<div className="container-fluid shop-products">
    <div className="row">
<div className="col-12 ">
<div className="tab-content" id="product-tab-content">
    <div className="tab-pane  fade show active" id="nav-all">
<div className="row xxl-block-grid-6  grid-space-20">


{list.map(pro=>{
 return(
 <div className="col-xl-3 col-md-4 col-sm-12  row mb--50" key={pro._id}>
  <div className="zakas-product" >
<div className="product-inner">
<figure className="product-image">
<Link to={`/product/${pro._id}`}>
<img src={`http://localhost:3003/${pro.img[0]}`} alt="Products"/>
</Link>
<div className="zakas-product-action">
<div className="product-action d-flex">

<div className="product-size">
<a href="#" className="action-btn">
<span className="current">XL</span>
</a>
<div className="product-size-swatch">
<span className="product-size-swatch-btn variation-btn">
L
</span>
<span className="product-size-swatch-btn variation-btn">
M
</span>
<span className="product-size-swatch-btn variation-btn">
S
</span>
</div>
</div>

<div className="product-color">
<a href="#" className="action-btn">
<span className="current abbey">Abbey</span>
</a>
<div className="product-color-swatch">
<span className="product-color-swatch-btn blue variation-btn">
Blue
</span>
<span className="product-color-swatch-btn copper variation-btn">
Copper
</span>
<span className="product-color-swatch-btn old-rose variation-btn">
Old Rose
</span>
</div>
</div>
<a href="#" className="action-btn">
<i className="flaticon flaticon-like"></i>
</a>
<a data-bs-toggle="modal" data-bs-target="#productModal" className="action-btn quick-view">
<i className="flaticon flaticon-eye"></i>
</a>
</div>
</div>
<span className={"product-badge"} > {pro.news? "New":"Mursak"} </span>
<span className="product-badge mt--30" > {pro.top? "Top":""} </span>
</figure>

<div className="product-info">
<h3 className="product-title mb--15" style={{fontSize:"12px"}}>
<Link to={`/product/${pro._id}`}>{pro.title}</Link>
</h3>
<div className="product-price-wrapper mb--30">
<span className="money">${pro.price}</span>

</div>
<button onClick={()=>Oneclick(pro._id)} className="btn btn-small btn-bg-sand btn-color-dark">One Click</button>
</div>
</div>
</div>



</div>)})}




</div>

<nav className="pagination-wrap mt--35 mt-md--100">
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
</div>
</div>
    
    </div>
    </div>
    </div>
    
<form onSubmit={(event)=>{
    sendOneClick(event)   
}}  
name='oneclickform'
className={`rmodal ${toggle?'show':''}`}
>
     
    <div className="PhoneInput1">
        <button type="button" onClick={()=>setToggle(false)} className="btnx">+</button>
        <input type="hidden" name="_id"  value={idpro}  />
      <PhoneInput
      
      placeholder="Введите номер телефона"
      value={value}
      country="US"
      
      onChange={setValue}
      
   
      />  
      <input type="hidden" value={value}  name='phone'  />
      
      <button type="submit"  className="subBtn"  > Отправлять</button>
    </div>
    
     
     </form>
        </>
    )
}

export default Products