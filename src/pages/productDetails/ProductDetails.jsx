import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../components/common/productContext/ProductContext';
import { CartContext } from '../../components/common/cartContext/CartContext';
import Headers from '../../components/common/headers/Headers';
import Footer from '../../components/common/footer/Footer';
import DetailsCss from './ProductDetails.module.css';
import { ToastContainer, toast } from 'react-toastify';



const ProductDetails = () => {

    const {id} = useParams(); 
    
    const {products} = useContext(ProductContext); 
    const {addToCart} = useContext(CartContext);
    
    // Get Single product based on id
    const product = products.find((item) => {
        return ( item.id === parseInt(id))
    })
    console.log(product);

    // if Product is no found
    if(!product) {
        return (
            <h1>loading...</h1>
        )
    }

    // destructure product
    const {title, price, description, image} = product; 

    const handleAddToCartDetails = () => {
        addToCart(product, product.id); 
        toast.success("Product Added To Cart!");
    }
    
    return (
        <>
            <Headers/>
            <section className={`py-120 ${DetailsCss.details}`}>
            <ToastContainer position="top-center"  autoClose={300} />
                <div className="container">
                    <div className="row gy-sm-5 gy-4 align-items-center">
                        <div className="col-lg-5 col-md-6 pe-md-5">
                            <div className={`${DetailsCss.detailsThumb}`}>
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className={`${DetailsCss.detailsContent}`}>
                                <h3 className={`mb-2 ${DetailsCss.detailsTitle}`}>{title}</h3>
                                <strong className='text--base mb-2'>${price}</strong>
                                <p className={`mb-4 mt-3 ${DetailsCss.detailsDesc}`}>{description}</p>
                                <button type="button" onClick={ handleAddToCartDetails } className='btn btn--base'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default ProductDetails;