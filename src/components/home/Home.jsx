import React, { useContext } from 'react';
import Hero from './hero/Hero';
import Footer from '../common/footer/Footer';
import Headers from '../common/headers/Headers';
import FlashDeal from './flashDeal/FlashDeal';
import Category from './category/Category';
import Feature from './feature/Feature';
import AppDownload from './appDownload/AppDownload';
import LatestProducts from './latestProduct/LatestProducts';
import AppStore from './appStore/AppStore';
import Cta from './cta/Cta';

const Home = () => {
    
    return (
        <>
            <Headers/>
            <Hero/>   
            <Category/>   
            <Feature/>   
            <FlashDeal/>
            <AppDownload/>
            <LatestProducts/>
            <AppStore/>
            <Cta/>
            <Footer/>  
        </>
    );
};

export default Home;