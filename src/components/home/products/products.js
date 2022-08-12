import React from "react";
import { Link } from "react-router-dom";
import right from '../../assets/img/right.svg'
import Item from "./item";
const Products = ({title,link,products}) => {
    
    return (
        <div className="products mb-4">
            <div className="container">
                <div className="d-flex align-items-center mb-4">
                    <div className="btitle">{title}</div>
                    <Link to={link} className="products__more">
                        Все товары
                        <img src={right}/>
                    </Link>
                </div>
                <div className="d-flex">
                    {products.map(product=>(
                        <Item key={product._id} product={product}/>
                    ))}
                </div>    
            </div>
        </div>
    )
}

export default Products