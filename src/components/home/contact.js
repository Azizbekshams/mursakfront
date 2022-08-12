import React from "react"
import '../../components/home/page.scss'
import Feedback from "./feedback/index";

const Contact =()=>{
    return(
        
 <div className="container">
      
       
 <div className="row"  style={{marginTop:"100px"}}>
                <div  className="col-4 col-md-6 col-sm-12 sm-order-2">
                    <div className="contact__list ">
                        <div className="contact__item">
                            <div className="contact__address">Mursak,​Асака 2-й проезд, 13
Мирзо-Улугбекский район, Ташкент</div>
                            <a href="tel:+998909778647" className="contact__phone">+998 90‒977‒86‒47</a>
                        </div>
                        <div className="contact__item">
                            <div className="contact__address">Mursak, дом моды, Асака 2-й проезд, 13, Ташкент </div>
                            <a href="tel:+998712552521" className="contact__phone">+99871 255-25-21</a>
                        </div>
                        <div className="contact__item">
                            <div className="contact__address">If you have Telegram, you can contact</div>
                            <a href="https://t.me/mursakdream" className="contact__phone">https://t.me/mursakdream</a>
                        </div>
                        
                        <div className="contact__body " >
                            <div className="contact__email ">
                                
                                MursakBoutique@gmail.com
                            </div>
                            <div className="contact__worktime">
                               
                                <div>
                                    <div className="contact__worktime--top">Режим работы</div>
                                    <div className="contact__worktime--bottom">Пн-вс с 10:00 до 17:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-md-6 col-sm-12 sm-order-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.77788963262!2d69.27779831494695!3d41.29193820987061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ac939e4fa8d%3A0x7254e01f1535f861!2zMzggT3liZWsga28nY2hhc2ksINCi0L7RiNC60LXQvdGCLCBPYHpiZWtpc3Rvbg!5e0!3m2!1suz!2s!4v1659124982959!5m2!1suz!2s" width="860" height="512" style={{border:0}} className='map col-sm-14' allowFullScreen="" loading="lazy"></iframe>
                    
                </div>
            </div>
      
      <Feedback title='Связаться с нами'/>
    </div>
    


    )
}

export default Contact