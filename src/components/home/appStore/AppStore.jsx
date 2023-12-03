import React from 'react';
import { appStore } from '../../data/Data';
import { Link } from 'react-router-dom';

const AppStore = () => {
    return (
        <section className='appStore section-bg py-60'>
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-4 col-md-6 d-md-block d-none">
                        <div className="appStoreThumb">
                            <img src={appStore.imageLeft} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="appStoreContent text-center">
                            <h4 className="appStoreContent__title mb-3">{appStore.title}</h4>
                            <p className="appStoreContent__desc fs-15">{appStore.desc}</p>
                            <div className="appStoreThumb d-flex align-items-center gap-3 mt-lg-5 mt-4 justify-content-center">
                               <Link> <img src={appStore.appStore} alt="" /></Link>
                               <Link> <img src={appStore.appGoogle} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-lg-block d-none">
                        <div className="appStoreThumb">
                            <img src={appStore.imageRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppStore;