import React from 'react';
import CategoryCss from './Category.module.css';
import { catItems } from '../../data/Data';

const Category = () => {

    return (
        <section className={`pt-120 ${CategoryCss.category}`}>
            <div className="container">
                <div className={`${CategoryCss.categoryWrapper}`}>
                    {
                        catItems.map((catItem, index) => {
                            return (
                                <div className={`${CategoryCss.categoryItem}`} key={index}>
                                    <div className={`${CategoryCss.categoryItemThumb}`}>
                                        <img src={catItem.image} alt="" />
                                    </div>
                                <div className={`${CategoryCss.categoryItemContent}`}>
                                    <h6 className={`${CategoryCss.categoryItemTitle}`}>{catItem.name}</h6>
                                    <span className={`${CategoryCss.categoryItemQty}`}>{catItem.qty}</span>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Category;