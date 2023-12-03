import React, { useContext } from 'react';
import ProductCard from '../flashDeal/ProductCard';
import { ProductContext } from './../../common/productContext/ProductContext';
import Heading from './../../common/Heading';

const LatestProducts = () => {
    
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
        <>
            <section className="py-120 latestProducts">
                <div className="container">
                <Heading title="Latest Discounted Products" subtitle="See Our latest discounted products below. Choose your daily needs from here and get a special discount with free shipping." />
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
        </>
    );
};

export default LatestProducts;