import React from 'react';
import CtaCss from './Cta.module.css';
import Subscription from './../../common/footer/Subscription';

const Cta = () => {
    return (
        <section className={`py-120 ${CtaCss.cta}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card card-body p-md-5 p-sm-4 p-3">
                            <div className={`${CtaCss.ctaContent}`}>
                                <h4 className={`mb-4 text-center ${CtaCss.ctaTitle}`}>Join our newsletter and get $20 discount for your first order</h4>
                                <Subscription/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Cta;