import React, { useContext } from 'react';
import FlashCss from './FlashDeal.module.css';
import ProductCss from './ProductCard.module.css';

import { ProductContext } from './../../common/productContext/ProductContext';
import ProductCard from './ProductCard';
import Heading from '../../common/Heading';


const FlashDeal = () => {

    const { products } = useContext(ProductContext); 
    // console.log(products);
    
    // get only men's & women's clothing category
    const filterProducts = products.filter((item) => {
        return (
            item.category === "men's clothing" || item.category === "women's clothing" 
        )
    }); 
    // console.log(filterProducts);
    

    return (
        <section className={`py-120 ${FlashCss.flashDeal}`}>
            <div className="container">
                <Heading title="Popular Products for Daily Shopping" subtitle="See all our popular products in this week. You  can choose your daily needs products from this list and get some special offer with free shipping." />
                <div className="row gy-4">
                    {
                        filterProducts.map((product, index) => {
                            return (
                                <ProductCard product={product} key={product.id}/>
                            )
                        })
                    }
                </div>
            </div>
            
        </section>
    );
};

export default FlashDeal;