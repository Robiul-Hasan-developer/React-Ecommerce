import React, { useContext, useState } from 'react';
import SidebarCss from './Sidebar.module.css';

import { SidebarContext } from '../sidebarContext/SidebarContext';
import { CartContext } from '../cartContext/CartContext';
import CartItem from './../cartItem/CartItem';
import { ToastContainer } from 'react-toastify';

const Sidebar = () => {

    const { isOpen, handleClose } = useContext(SidebarContext); 

    // Cart Context
    const { cart, clearCart, itemAmount, totalAmount } = useContext(CartContext); 
    // console.log(`${totalAmount} amount here`);

    const [showOverlay, setShowOverlay] = useState(false); 

    const handleHideOverlay = () => {
        setShowOverlay(!showOverlay); 
    }

    const handleClearAll = () => {
        clearCart(); 
    }

    return (
       <>
        <ToastContainer position="top-center" autoClose={300} />
        <div className={`d-flex flex-column justify-content-between ${SidebarCss.sidebar} ${isOpen ? SidebarCss.active: "" }`} >
            <div>
                <div className="flex-between gap-2 pb-3 mb-3 border-bottom">
                    <span className={`fs-13 ${SidebarCss.shoppingTitle}`}> Shopping Bag  
                    <span className={`text--base fw-bold ${SidebarCss.shoppingCount}`}>&nbsp; ({itemAmount})</span> 
                    </span>
                    <button type="button" onClick={handleClose} className={`${SidebarCss.sidebarClose}`}><i className="fas fa-arrow-right"></i></button>
                </div>

                <div className={`${SidebarCss.shoppingItems}`}>
                    {
                        cart.map((item, index) => {
                            return (
                                <CartItem item={item} key={item.id}/>
                            )
                        }) 
                    }
                </div>
            </div>

            <div className='flex-between gap-2 border-top pt-3 mt-3'>
                <strong className='text-dark fs-15'>Total Amount: ${parseFloat(totalAmount).toFixed(2)} </strong>
        
                <button type="button" onClick={handleClearAll} className='p-2 fs-13 lh-1 bg-danger bg-opacity-10 text--danger rounded'> <i className="fas fa-trash-alt"></i> </button>
            </div>
            
        </div>
       </>
    );
};

export default Sidebar;