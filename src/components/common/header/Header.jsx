import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { categories, nav } from '../../data/Data';
import CategoryList from './CategoryList';
import MiddleHeader from '../middleHeader/MiddleHeader';

const Header = () => {

    const [showmenu, setShowMenu] = useState(false); 

    const handleClick = () => {
        setShowMenu(!showmenu)
    }

    // Show Overlay For Small Screen Start
    const [showOverlay, setShowOverlay] = useState(false); 
    const handleBodyOverlay = () => {
        setShowOverlay(!showOverlay); 
    }
    const handleRemoveBodyOverlay = () => {
        setShowOverlay(false); 
    }
    // Show Overlay For Small Screen End

    // Close Sidebar btn Start
    const closeSidebarBtn = () => {
        setShowMenu(false)
    }
    // Close Sidebar btn End 
    
    /* Remove Dropdown menu when click on body ** First Way ** Start */
    document.addEventListener('click', (event) => {
        if (
            event.target.closest('.category__btn') === null && 
            event.target.closest('.category-list') === null  
        ) {
            setShowMenu(false)
        }
    }); 
    /* Remove Dropdown menu when click on body ** First Way ** End */

    // Sticky Header Code
    const [isActiveSticky, setIsActiveSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 20 ? setIsActiveSticky(true): setIsActiveSticky(false); 
        }); 
        console.log(isActiveSticky);
    }); 
    
    return (
        // <div className='top-0 position-sticky z-3'>
        <div className={`transition ${isActiveSticky ? 'top-0 position-sticky bg-danger z-3 w-100 shadow-sm' : ''}`}>
            <MiddleHeader/>
        
        { showOverlay && <div className="sidebar-overlay sidebar-overlay--sm" onClick={handleRemoveBodyOverlay}></div>  }
            <header className="header" id="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="category">
                            <button type="button" onClick={() => {handleClick(); handleBodyOverlay();}} className={`category__btn ${ showmenu ? 'active' : '' }`}>
                                <span className="icon"><span className="fas fa-border-all"></span></span> All Categories 
                                <span className="arrow"><i className="fas fa-angle-down"></i></span>
                            </button>

                            <ul className={`category-list d-lg-block d-none ${ showmenu ? 'active' : '' }`}>
                                <li className='d-lg-none d-flex'>
                                    <button type="button" className='close-sidebar fs-5' onClick={() => {closeSidebarBtn(); handleRemoveBodyOverlay()}}><i className="las la-times"></i></button>
                                </li>
                                {
                                    categories.map((category, index) => {
                                        return (
                                            <li className="category-list__item" key={index}>
                                                <Link to={category.path} className="category-list__link">{category.text}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                        </div>
                        <button className="navbar-toggler header-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span id="hiddenNav"><i className="las la-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-menu ms-auto align-items-lg-center">
                                {
                                    nav.map((list, index) => (
                                        <li key={index} className="nav-item">
                                            <NavLink to={list.path} 
                                            className={`nav-link ${list.isActive ? 'active' : ''}`} aria-current="page">{list.text}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>  

            {/* Category List For Small Device Start */}
            <ul className={`category-list d-lg-none d-block  ${ showmenu ? 'active' : '' }`}>
                <li className='d-lg-none d-flex justify-content-end'>
                    <button type="button" className='close-sidebar' onClick={() => {closeSidebarBtn(); handleRemoveBodyOverlay()}}><i className="las la-times"></i></button>
                </li>
                {
                    categories.map((category, index) => {
                        return (
                            <li className="category-list__item" key={index}>
                                <Link to={category.path} className="category-list__link">{category.text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            {/* Category List For Small Device ENd */}

        </div>
    );
};

export default Header;

