import React from "react"
import { Link } from "react-router-dom"
const Head =()=>{
    return(
        <>
 
    <div className="wrapper">
       
 <header className="header header-style-2 header-transparent" >
            <div className="header-inner fixed-header">
                <div className="container-fluid">

                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}  >

                       

                        <div>
                            <Link to='/' className="logo">
                                <figure className="logo--transparent">
                                   <h2 style={{color:"white", fontFamily:"Lucida Handwriting"}}>Mursak</h2>
                                </figure>
                                <figure className="logo--normal">
                                
                                    <h2 style={{fontFamily:"Lucida Handwriting"}}>Mursak</h2>
                                </figure>
                            </Link>
                        </div>

                        <div>
                            <ul className="header-toolbar white-color" style={{marginRight:"10px"}} >
         <li className="header-toolbar__item">
                                    <Link  to='/products'   className="header-toolbar__btn" style={{fontSize:"14px"}} >
                                        Products
                                    </Link>
                                </li>

        <li className="header-toolbar__item mini-cart-item">
                                    <Link to='/contact' style={{fontSize:"14px"}} className="header-toolbar__btn toolbar-btn mini-cart-btn">
                                        Contact
                                    </Link>
                                </li>
      <li  className="header-toolbar__item mini-cart-item" >
                                    <Link to='/blog' style={{fontSize:"14px", marginLeft:"16px"}} className="header-toolbar__btn toolbar-btn mini-cart-btn">
                                        Blog
                                    </Link>
                                </li>

                             
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

           
        </header>

    </div>


        </>
    )
}

export default Head