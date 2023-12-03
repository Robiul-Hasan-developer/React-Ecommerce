// ================== Middle Header Css Start ======================
import React, { useContext, useState } from 'react';
import MhCss from './MiddleHeader.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../../public/images/logo.svg'
import { SidebarContext } from '../sidebarContext/SidebarContext';
import { CartContext } from '../cartContext/CartContext';

import { useAuth0 } from "@auth0/auth0-react";


const MiddleHeader = () => {

    // Sidebar Context
    const { isOpen, setIsOpen } = useContext(SidebarContext); 

    // Cart Context
    const {itemAmount} = useContext(CartContext); 

    const handleSidebarClick = () => {
        setIsOpen(!isOpen); 
    }
    const [showOverlay, setShowOverlay] = useState(false); 
    const handleHideOverlay = () => {
        setShowOverlay(!showOverlay); 
    }

    
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  
    
    return (
        <>
            { isOpen && <div className="sidebar-overlay" onClick={ handleSidebarClick }></div> }
            <div className={`${MhCss.middleHeader}`}>
                <div className="container">
                    <div className={`flex-between gap-3 ${MhCss.middleHeaderInner}`}>                    
                        <div className={`${MhCss.Logo}`}>
                            <Link to="/" className={`${MhCss.LogoLink}`}>
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                        <form className={`${MhCss.searchForm}`}>
                            <input type="text" className={`form--control ${MhCss.searchFormInput}`} placeholder='Search for products (e.g. shirt, pant, cap)' />
                            <button type="submit" className={`${MhCss.searchFormIcon}`}> <i className="las la-search"></i> </button>
                        </form>
                        <div className={`flex-align gap-3 ${MhCss.actionButtons}`}>
                        
                            <button type="button" onClick={()=> {handleSidebarClick(); handleHideOverlay();}} className={`${MhCss.actionButton}`}>
                                <i className="fas fa-shopping-cart"></i>
                                <span className={`${MhCss.actionButtonCount}`}>{itemAmount}</span>
                            </button>
                            
                            {
                                isAuthenticated ? <button type="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className={`${MhCss.actionButton}`}> <i className="fas fa-sign-out-alt"></i></button>
                                :
                                <button type="button" onClick={() => loginWithRedirect()} className={`${MhCss.actionButton}`}> <i className="far fa-user"></i> </button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MiddleHeader;
// ================== Middle Header Css End ======================