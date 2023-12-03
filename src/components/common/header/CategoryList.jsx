import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { categories, nav } from '../../data/Data';
// import CategoryList from './CategoryList'

const CategoryList = () => {

    const [showmenu, setShowMenu] = useState(false); 

    const handleClick = () => {
        setShowMenu(!showmenu)
    }

    // Show Overlay For Small Screen Start
    // const [showOverlay, setShowOverlay] = useState(false); 
    // const handleBodyOverlay = () => {
    //     setShowOverlay(!showOverlay); 
    // }
    // const handleRemoveBodyOverlay = () => {
    //     setShowOverlay(false); 
    // }
    // Show Overlay For Small Screen End

    
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

    return (
        <>
            
        </>
    );
};

export default CategoryList;