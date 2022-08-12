import React from "react";
import { Link } from "react-router-dom";
import star from '../../assets/img/star.svg'
import comment from '../../assets/img/comment.svg'
import fav from '../../assets/img/fav.svg'
import compare from '../../assets/img/compare.svg'
import cart from '../../assets/img/cart.svg'
// import img from '../../assets/img/product.jpg'
import './item.scss'

const Item = ({product}) =>{

    let price = ''
    
    return (
        
        <div className="card">
            <div className="card__img">
                <div className="card__badge">
                    {product.news?(<span className="badge badge-success">Новинка</span>):''}
                    {product.top?(<span className="badge badge-danger">Хит продаж</span>):''}
                </div>
                <img src={`http://localhost:3003/${product.photos[0]}`} alt="" />
            </div>
            <div className="card__category">{product.category.title}</div>
            <Link to={`/product/${product._id}`} className="card__title">{product.title}</Link>
            <div className="card__review">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <span className="card__comments">
                    <img src={comment}/> (12)
                </span>
            </div>
            <div className="card__row mb-2">
                <div className="card__val">
                    {product.sale>0?(<><div className="card__oldprice">{product.price} ₽</div>
                    <div className="card__newprice">{product.price*(100-product.sale)/100} ₽</div>
                    <div className="card__sale">
                        <span className="card__percent">{product.sale}%</span>
                        <span className="card__econom">— {product.price-product.price*(100-product.sale)/100} ₽</span>
                    </div></>):(
                    <div className="card__newprice">{product.price} ₽</div>
                    )}
                </div>
                <div className="card__btns">
                    <button className="btn little"><img src={fav}/></button>
                    <button className="btn little"><img src={compare}/></button>
                </div>
            </div>
            <div className="card__bottom">
                <button className="btn outline">
                Купить в 1 клик
                </button>
                <button className="btn">
                    <img src={cart}/>
                </button>
            </div>
        </div>
    )
}

export default Item