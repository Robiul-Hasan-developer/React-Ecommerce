import React from 'react';
import BannerStyle from './Hero.module.css';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { heros } from '../../data/Data';


const Hero = () => {
    return (
        <section className={`${BannerStyle.heroSection}`}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                >
                {
                    heros.map((hero, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={`${BannerStyle.heroSlider}`}>
                                    <div className="container">
                                        <div className="row gy-sm-5 gy-4 align-items-center">
                                            <div className="col-lg-7">
                                                <div className={`${BannerStyle.heroContent}`}>
                                                    <span className={`${BannerStyle.heroSubtitle}`}>{hero.subtitle}</span>
                                                    <h1 className={`${BannerStyle.heroTitle}`}>{hero.title}</h1>     
                                                    <p className={`${BannerStyle.heroDesc}`}> {hero.desc} </p>
                                                    <div className={`${BannerStyle.heroBtn}`}>
                                                        <Link className='btn btn--base'>Shop Now <span className="icon"><i className="fas fa-arrow-right"></i></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className={`${BannerStyle.heroThumb}`}>
                                                    <img src={hero.image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            
       
        </section>
    );
};

export default Hero;