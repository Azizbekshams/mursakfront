import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide' 
import '@splidejs/splide/dist/css/splide.min.css';
import './slider.scss'
import { Link } from "react-router-dom";
import axios from "axios";

const Home =()=>{

    const [banner1, setBanner1]= useState([])
    const [banner2, setBanner2]= useState([])
    const [banner3, setBanner3]= useState([])
    const [banner4, setBanner4]= useState([])
    const [banneralbom, setBanneralbom]= useState([])
  
    const [list,setList] = useState([])
    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        axios.get('http://localhost:3003/api/slider/getall')
        .then(res => {
            setList(res.data)
        })
        axios.get('http://localhost:3003/api/banner1/getall')
        .then(res => {
            console.log(res.data);
            setBanner1(res.data)
        })
        axios.get('http://localhost:3003/api/banner2/getall')
        .then(res => {
            console.log(res.data);
            setBanner2(res.data)
        })
        axios.get('http://localhost:3003/api/banner3/getall')
        .then(res => {
            console.log(res.data);
            setBanner3(res.data)
        })
        axios.get('http://localhost:3003/api/banner4/getall')
        .then(res => {
            console.log(res.data);
            setBanner4(res.data)
        })
        axios.get('http://localhost:3003/api/banneralbom/getall')
        .then(res => {
            console.log(res.data);
            setBanneralbom(res.data)
        })
    },[])

  


    
    return(
        <>
 
    <div className="wrapper">
       

       
        <div className="main-content-wrapper">
        
        <Splide className="slider__slide" options={ {
            arrows:false,
            autoplay:true,
            pagination:false,
            type:'loop',
          } }>
            {list.map(slide=>(
                <SplideSlide className="slide" key={slide._id}>
                    <img src={`http://localhost:3003/${slide.img}`} alt="" />
                    <div className="slider__text">
                        <div className="slider__title">{slide.title}</div>
                        <div className="slider__info">{slide.text}</div>
                        <Link to={slide.link}>Подробнее</Link>
                    </div>
                </SplideSlide>
            ))}

        </Splide>
       


            <div className="banner-area">
                <div className="container-fluid p-0">
                    <div className="row g-0">



                        <div className="col-md-6">
                            <div className="banner-box">
                                <div className="banner-inner banner-hover-2 banner-info-over-img banner-info-center">
                                <Splide className="banner-image" options={ {
            arrows:false,
            autoplay:true,
            pagination:false,
            perPage: 1,
            type:'fade',
          } }>
            {banner1.map(banner=>(
            <>
          
      <figure className="banner-image" key={banner._id} >              
                <SplideSlide  >

                    <img   src={`http://localhost:3003/${banner.img}`} alt="Banner" />
                  
                </SplideSlide> 
                </figure>
                <div className="banner-info">
                                        <div className="banner-info--inner text-center">
                                            <h2 className="heading__primary color--white mb--20">
                                                <span className="heading__primary--sub">{banner.title}</span>
                                                <span className="heading__primary--main">{banner.text}</span>
                                            </h2>
                                            <Link to="/products" className="btn btn-no-bg btn-color-white">See Now <i className="fa fa-angle-double-right"></i></Link>
                                        </div>
                                    </div>
                </>
            ))}

        </Splide>

     
                                </div>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div className="banner-box">
                                <div className="banner-inner banner-hover-2 banner-info-over-img banner-info-center">
                                <Splide className="banner-image" options={ {
            arrows:false,
            autoplay:true,
            pagination:false,
            perPage: 1,
            type:'fade',
          } }>
            {banner2.map(banner=>(
            <>
          
      <figure className="banner-image" key={banner._id} >              
                <SplideSlide  >

                    <img   src={`http://localhost:3003/${banner.img}`} alt="Banner" />
                  
                </SplideSlide> 
                </figure>
                <div className="banner-info">
                                        <div className="banner-info--inner text-center">
                                            <h2 className="heading__primary color--white mb--20">
                                                <span className="heading__primary--sub">{banner.title}</span>
                                                <span className="heading__primary--main">{banner.text}</span>
                                            </h2>
                                            <Link to="/products" className="btn btn-no-bg btn-color-white">See Now <i className="fa fa-angle-double-right"></i></Link>
                                        </div>
                                    </div>
                </>
            ))}

        </Splide>

     
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            


            <div className="full-width-banner-area"  style={{minHeight:"32rem"}} >
                
            

 <Splide className="slider__slide" options={ {
            arrows:false,
            autoplay:true,
            pagination:false,
            type:'loop',
          } }>
            {banneralbom.map(slide=>(
                <SplideSlide className="slide" key={slide._id}>
                    <img src={`http://localhost:3003/${slide.img}`} alt="" />
                   
                </SplideSlide>
            ))}

        </Splide>

            </div>

       
            <div className="banner-area">
                <div className="container-fluid p-0">
                    <div className="row g-0">

<div className="col-md-6">
<div className="banner-box">
    <div className="banner-inner banner-hover-2 banner-info-over-img banner-info-center">
    <Splide className="banner-image" options={ {
arrows:false,
autoplay:true,
pagination:false,
perPage: 1,
type:'fade',
} }>
{banner3.map(banner=>(
<>

<figure className="banner-image" key={banner._id} >              
<SplideSlide  >

<img   src={`http://localhost:3003/${banner.img}`} alt="Banner" />

</SplideSlide> 
</figure>
<div className="banner-info">
            <div className="banner-info--inner text-center">
                <h2 className="heading__primary color--white mb--20">
                    <span className="heading__primary--sub">{banner.title}</span>
                    <span className="heading__primary--main">{banner.text}</span>
                </h2>
                <Link to="/products" className="btn btn-no-bg btn-color-white">See Now <i className="fa fa-angle-double-right"></i></Link>
            </div>
        </div>
</>
))}

</Splide>


    </div>
</div>
</div>

<div className="col-md-6">
<div className="banner-box">
<div className="banner-inner banner-hover-2 banner-info-over-img banner-info-center">
<Splide className="banner-image" options={ {
arrows:false,
autoplay:true,
pagination:false,
perPage: 1,
type:'fade',
} }>
{banner4.map(banner=>(
<>

<figure className="banner-image" key={banner._id} >              
<SplideSlide  >

<img   src={`http://localhost:3003/${banner.img}`} alt="Banner" />

</SplideSlide> 
</figure>
<div className="banner-info">
<div className="banner-info--inner text-center">
<h2 className="heading__primary color--white mb--20">
<span className="heading__primary--sub">{banner.title}</span>
<span className="heading__primary--main">{banner.text}</span>
</h2>
<Link to="/products" className="btn btn-no-bg btn-color-white">See Now <i className="fa fa-angle-double-right"></i></Link>
</div>
</div>
</>
))}

</Splide>


</div>
</div>
</div>

                    </div>
                </div>
            </div>
           

           
        </div>

        <div className="col-md-12">
<div className="aboutme" >
   
    <div className="imgavatar">
     <img  src="assets/img/mursak/IMG_5250.png" alt="" />
     </div>

    <div className="textme">
        <h1>Nilufar Abduvalieva</h1>
        <span > Mursak brand was founded in 2013 by designer Nilufar Abduvalieva. "mursak" means a veil or an ancient women's cloak when translated from Arabic. </span>
         </div>
         
</div>

        </div>
        



    </div>


        </>
    )
}

export default Home