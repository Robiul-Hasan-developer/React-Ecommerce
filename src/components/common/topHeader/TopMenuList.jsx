import React from 'react';
import TopHdrCss from './TopHeader.module.css';
import { Link, NavLink } from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";

const TopMenuList = () => {
    // Authentication
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    console.log(isAuthenticated);

    const topMenus = [
        {
          text: 'Home',
          path: '/',
        },
        {
          text: 'About',
          path: '/about',
        },
        {
          text: 'Contact',
          path: '/contact',
        },
        {
          text: isAuthenticated ? 'Logout' : 'My Account',
        },
      ];
    
    
    return (
        <>  
            <ul className={`flex-align ${TopHdrCss.topMenuList}`}>
                <li className={`${TopHdrCss.topMenuListItem}`}>
                    <NavLink to="/" className={`${TopHdrCss.topMenuListLink}`}>Home </NavLink>
                </li>
                <li className={`${TopHdrCss.topMenuListItem}`}>
                    <NavLink to="/about" className={`${TopHdrCss.topMenuListLink}`}>About </NavLink>
                </li>
                <li className={`${TopHdrCss.topMenuListItem}`}>
                    <NavLink to="/contact" className={`${TopHdrCss.topMenuListLink}`}>Contact </NavLink>
                </li>
                <li className={`${TopHdrCss.topMenuListItem}`}>
                    {
                        isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className={`${TopHdrCss.topMenuListLink}`} > Logout</button>
                         : 
                        <button onClick={() => loginWithRedirect()} className={`${TopHdrCss.topMenuListLink}`}>My Account </button>
                    }
                </li>
            </ul>
        </>
    );
};

export default TopMenuList;