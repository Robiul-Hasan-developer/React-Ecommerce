import React, { useContext } from 'react';
import ProductCss from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../common/cartContext/CartContext';
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({ product }) => {

    const {id, image, category, title, price} = product; 
    
    const {addToCart} = useContext(CartContext); 

    const handleAddToCart = () => {
        addToCart(product, id); 
        toast.success("Product Added To Cart!");
    }
    
    return (
        <>
         <div className="col-lg-3 col-sm-6">
            <div className={`${ProductCss.ProductItem}`}>
                <Link to={`/product/${id}`} className={`${ProductCss.ProductView}`}><i className="far fa-eye"></i>  </Link>
                <div className={`${ProductCss.ProductItemThumb}`}>
                    <Link to={`/product/${id}`} className={`${ProductCss.ProductItemThumbLink}`}>
                        <img src={ image} alt="" />
                    </Link>
                </div>
                <div className={`${ProductCss.ProductItemContent}`}>
                    <span className={`${ProductCss.ProductItemCategory}`}>{ category }</span>
                    <h6 className={`${ProductCss.ProductItemTitle}`}> <Link to={`/product/${id}`}> { title }</Link> </h6>
                    <div className="flex-between">
                        <h6 className={`${ProductCss.ProductItemPrice}`}>${ price }</h6>
                        {/* <button className={`${ProductCss.cartBtn}`} type="button"> <i className="fas fa-shopping-cart"></i> </button> */}
                        <button onClick={handleAddToCart} className={`${ProductCss.cartBtn}`} type="button"><i className="fas fa-shopping-bag"></i> </button>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center"  autoClose={300} />
        </div>
        </>
    );
};

export default ProductCard;