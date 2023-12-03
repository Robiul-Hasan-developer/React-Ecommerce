import React from 'react';
import FeatureCss from './Feature.module.css';
import { features } from '../../data/Data';

const Feature = () => {
    return (
        <section className={`pt-60 ${FeatureCss.feature}`}>
            <div className="container">
                <h4 className="mb-3">Our Features</h4>
                <div className={`${FeatureCss.featureWrapper}`}>
                    {
                        features.map((feature, index) => {
                            return (
                                <div className={`flex-align flex-nowrap gap-3 ${FeatureCss.featureItem}`} key={index}>
                                    <span className={`${FeatureCss.featureItemIcon}`}> {feature.icon} </span>
                                    <div className={`${FeatureCss.featureItemContent}`}>
                                        <h6 className={`fs-15 mb-1 ${FeatureCss.featureItemTitle}`}>{feature.title}</h6>
                                        <p className={`fs-13 mb-0 ${FeatureCss.featureItemDesc }`}>{feature.desc}</p>
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

export default Feature;