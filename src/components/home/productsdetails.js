import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide' 
import '@splidejs/splide/dist/css/splide.min.css';
import './slider.scss'
import axios from "axios";
import { useParams } from "react-router-dom";



const Productsdetails =()=>{
    const [product,setProduct] = useState({})
    const [imgmassiv,setImgmassiv]=useState([])
    const [atrmassiv,setAtrmassiv]=useState([])
    let {id} = useParams()

    useEffect(()=>{

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });

          axios.get(`http://localhost:3003/api/product/get/${id}`)
          .then(res=> {
            console.log(res.data);
              setProduct(res.data)
              setImgmassiv(res.data.img);
              setAtrmassiv(res.data.atributes);
          })
      
       
    },[id])

 
 
    

    return(
        <>
        <div className="wrapper" key={product._id}>

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

<div className="main-content-wrapper">
<div className="page-content-inner ptb--80">
<div className="container">
<div className="row g-0 mb--80">
<div className="col-lg-7 product-main-image">

<div className="product-image">
<div className="product-gallery vertical-slide-nav">
    <div className="product-gallery__large-image mb-md--30">
        <div className="product-gallery__wrapper">

        

<Splide  className="slider__slide" options={ {
            arrows:false,
            autoplay:true,
            pagination:true,
            
            type:'loop',
          } }>
         <SplideSlide>
         <img src={`http://localhost:3003/${imgmassiv[0]}`} alt="" />
         </SplideSlide>
         
         <SplideSlide>
         <img src={`http://localhost:3003/${imgmassiv[1]}`} alt="" />
         </SplideSlide>
         <SplideSlide>
         <img src={`http://localhost:3003/${imgmassiv[2]}`} alt="" />
         </SplideSlide>
         <SplideSlide>
         <img src={`http://localhost:3003/${imgmassiv[3]}`} alt="" />
         </SplideSlide>

        

        </Splide>

</div>
</div>
</div>

<span className="product-badge sale">Top</span>
</div>


</div>


<div className="col-xl-4 offset-xl-1 col-lg-5 product-main-details mt-md--50">
<div className="product-summary pl-lg--30 pl-md--0">


<h3 className="product-title mb--20">{product.title}</h3>
<p className="product-short-description mb--20">{product.text}</p>
<div className="product-price-wrapper mb--25">
<span className="money">${product.price}</span>

</div>
<form action="#" className="variation-form mb--20">
<div className="product-size-variations d-flex align-items-center mb--15">
<p className="variation-label">Size:</p>   
<div className="product-size-variation variation-wrapper">
<div className="variation">
<a className="product-size-variation-btn selected" data-bs-toggle="tooltip" data-bs-placement="top" title="S">
<span className="product-size-variation-label">S</span>
</a>
</div>
<div className="variation">
<a className="product-size-variation-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="M">
<span className="product-size-variation-label">M</span>
</a>
</div>
<div className="variation">
<a className="product-size-variation-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="L">
<span className="product-size-variation-label">L</span>
</a>
</div>
<div className="variation">
<a className="product-size-variation-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="XL">
<span className="product-size-variation-label">XL</span>
</a>
</div>
</div>                                 
</div>
{/* <a href="" className="reset_variations">Clear</a> */}
</form>
{/* <div className="product-action d-flex flex-sm-row align-items-sm-center flex-column align-items-start mb--30">
<div className="quantity-wrapper d-flex align-items-center mr--30 mr-xs--0 mb-xs--30">
<label className="quantity-label" for="qty">Quantity:</label>
<div className="quantity">
<input type="number" className="quantity-input" name="qty" id="qty" value="1" min="1"/>
</div>
</div>
<button type="button" className="btn btn-small btn-bg-red btn-color-white btn-hover-2" onclick="window.location.href='cart.html'">
Add To Cart
</button>
</div>   */}
{/* <div className="product-footer-meta">
<p><span>Category:</span> 
<a href="shop.html">{product.title}</a>,
<a href="shop.html">SweatShirt</a>,
<a href="shop.html">Jacket</a>,
<a href="shop.html">Blazer</a>
</p>
</div> */}
</div>
</div>
</div>
<div className="row justify-content-center mb--80">
<div className="col-12">
<div className="product-data-tab tab-style-3">
<div className="nav nav-tabs product-data-tab__head mb--35 mb-sm--25" id="product-tab" role="tablist">
<button type="button" className="product-data-tab__link nav-link active" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" role="tab" aria-selected="true"> 
<span>Description</span>
</button>
<button type="button" className="product-data-tab__link nav-link" id="nav-info-tab" data-bs-toggle="tab" data-bs-target="#nav-info" role="tab" aria-selected="true">
<span>Additional Information</span>
</button>
{/* <button type="button" className="product-data-tab__link nav-link" id="nav-reviews-tab" data-bs-toggle="tab" data-bs-target="#nav-reviews" role="tab" aria-selected="true">
<span>Reviews(1)</span>
</button> */}
</div>
<div className="tab-content product-data-tab__content" id="product-tabContent">
<div className="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
<div className="product-description">
<p>{product.text}</p>


</div>
</div>
<div className="tab-pane" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab">
<div className="table-content table-responsive">
<table className="table shop_attributes">
<tbody>
<tr>
<th>Weight</th>
<td>500g</td>
</tr>
<tr>
<th>Dimensions</th>
<td>160 × 152 × 110 cm</td>
</tr>
<tr>
<th>Color</th>
<td>
red
</td>
<td>
blue
</td>
</tr>
</tbody>
</table>
</div>
</div>

{/* <div className="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab">
<div className="product-reviews">
<h3 className="review__title">1 review for Black Blazer</h3>
<ul className="review__list">
<li className="review__item">
<div className="review__container">
<img src="assets/img/others/comment-1.jpg" alt="Review Avatar" className="review__avatar"/>
<div className="review__text">
<div className="d-flex flex-sm-row flex-column justify-content-between">
<div className="review__meta">
<strong className="review__author">John Snow </strong>
<span className="review__dash">-</span>
<span className="review__published-date">November 20, 2018</span>
</div>
<div className="product-rating">
<div className="star-rating star-five">
<span>Rated <strong className="rating">5.00</strong> out of 5</span>
</div>
</div>
</div>
<p className="review__description">Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
</div>
</div>
</li>
</ul>
<div className="review-form-wrapper">
<div className="row">
<div className="col-lg-8">
<span className="reply-title">Add a review</span>
<form action="#" className="form pr--30">
<div className="form-notes mb--20">
<p>Your email address will not be published. Required fields are marked <span className="required">*</span></p>
</div>
<div className="form__group mb--10 pb--1">
<label className="form__label d-block" >Your Ratings</label>
<div className="rating">
<span><i className="fa fa-star"></i></span>
<span><i className="fa fa-star"></i></span>
<span><i className="fa fa-star"></i></span>
<span><i className="fa fa-star"></i></span>
<span><i className="fa fa-star"></i></span>
</div>
</div>
<div className="form__group mb--10">
<label className="form__label d-block" for="email">Your Review<span className="required">*</span></label>
<textarea name="review" id="review" className="form__input form__input--textarea"></textarea>
</div>
<div className="form__group mb--20">
<label className="form__label d-block" for="name">Name<span className="required">*</span></label>
<input type="text" name="name" id="name" className="form__input"/>
</div>
<div className="form__group mb--20">
<label className="form__label d-block" for="email">Email<span className="required">*</span></label>
<input type="email" name="email" id="email" className="form__input"/>
</div>
<div className="form__group">
<div className="row">
<div className="col-12">
<input type="submit" value="Submit Now" className="btn-submit"/>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div> */}

</div>
</div>
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

export default Productsdetails