import React from "react"
import { Link } from "react-router-dom";
const Footer =()=>{
    return(
        <>
 
    <div className="wrapper">
        <footer className="footer" style={{backgroundColor:"black"}}>

            <div className="footer-top bg-color ptb--50" data-bg-color="#040406">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 text-center">
                            <div className="footer-widget mb--50">
                                <div className="textwidget">
                                    <h2 style={{color:"white", fontFamily:"Lucida Handwriting"}}>Mursak</h2>
                                </div>
                            </div>

                            <div className="footer-widget mb--45">
                               
                                <ul className="social color-2">
                                    <li className="social__item">
                                        <a href="https://t.me/mursakboutique" target="_blank" rel="noopener" className="social__link google-plus">
                                            <span>Telegram</span>
                                            <i className="fa fa-telegram"></i>
                                        </a>
                                    </li>
                                    <li className="social__item">
                                        <a href="https://www.facebook.com/mursak.boutique" target="_blank" rel="noopener" className="social__link facebook">
                                            <span>facebook</span>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="social__item">
                                        <a href="https://pl.pinterest.com/pin/675047431626474891/" target="_blank" rel="noopener" className="social__link pinterest">
                                            <span>Pinterest</span>
                                            <i className="fa fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li className="social__item">
                                        <a href="https://www.instagram.com/mursak.boutique/" target="_blank" rel="noopener" className="social__link twitter">
                                            <span>Instagram</span>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            
                            </div>
                            <div className="footer-widget">
                                <figure>
                                    <img src="assets/img/mursak/payment.png" alt="payment"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            

            
            <div className="footer-bottom bg-color ptb--25" data-bg-color="#12181b"  style={{backgroundColor:"rgb(18, 24, 27)"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-lg-start text-center mb-md--10">
                            <p className="copyright-text color--white">&copy; Mursak 2022 Made With <i className="fa fa-heart"></i> By <a href="#" target="_blank" rel="noopener">5F Group</a></p>
                        </div>
                        <div className="col-lg-4 text-lg-start text-center mb-md--10">
                           <a href="#" target="_blank" rel="noopener">Contact: +99890 (90) 9778647</a>
                        </div>

                        <div className="col-lg-4 text-lg-end text-center">
                            <div className="footer-widget">
                                <ul className="footer-menu color-2">
                                    <li><a href="">About Us</a></li>
                                 <li><a href="">Help</a></li>
                                    <li><Link to="/vakansi">Vacancy
</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>


        </>
    )
}

export default Footer