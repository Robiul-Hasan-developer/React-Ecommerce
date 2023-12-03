import React, { useContext } from 'react';
import CartItemCss from './CartItem.module.css';
import { Link } from 'react-router-dom';
// Cart context
import { CartContext } from '../cartContext/CartContext';
import { ToastContainer, toast } from 'react-toastify';


const CartItem = ({ item }) => {

    const {id, image, title, price, amount} = item; 
    // console.log(item)

    const { removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext); 
    
    const handleRemoveCart = () => {
        removeFromCart(id); 
        toast.success("Deleted Successfully!");
    }

    return (
        <>
             <div className={`${CartItemCss.shoppingItem}`}>
                <div className={`d-flex align-items-center gap-2 ${CartItemCss.shoppingItemLeft}`}>
                    <div className={`${CartItemCss.shoppingItemThumb}`}>
                         <a href={`/product/${id}`}>
                            <img src={image} alt="" className='fit-image' />
                         </a>
                    </div>
                    <div className={`${CartItemCss.shoppingItemContent}`}>
                        <h6 className={`fs-14 fw-semibold mb-1 ${CartItemCss.shoppingItemTitle}`}>
                             {/* <Link  to={`/product/${id}`}> { title } </Link>  */}
                             <a href={`/product/${id}`} className={`${CartItemCss.shoppingItemTitleLink}`}> { title } </a>
                         </h6>       
                        <div className="flex-align mt-3 gap-3">
                            
                            <div className={`border rounded ${CartItemCss.countItem}`}>
                                <button type="button" onClick={ () => decreaseAmount(id)} className={`${CartItemCss.countItemDecrement}`}> <i className="fas fa-minus"></i> </button>
                                <span className={`${CartItemCss.countItemCount}`}> { amount } </span>
                                <button type="button" onClick={ () => increaseAmount(id)} className={`${CartItemCss.countItemIncrement}`}> <i className="fas fa-plus"></i></button>
                            </div>

                            <span className={`fs-14 ${CartItemCss.shoppingItemPrice}`}>${price}</span>    
                        </div>
                    </div>
                </div>
                <div className={`${CartItemCss.shoppingItemRight}`}>
                    <button type="button" onClick={handleRemoveCart} className={`${CartItemCss.shoppingItemRemove}`}> <i className="fas fa-times"></i> </button>
                    {/* Total Price ( Make the price at 2 decimals ) */}
                    <span className={`${CartItemCss.shoppingItemTotal}`}>{`$${ parseFloat(price * amount).toFixed(2) } `}</span>
                </div>
            </div>
        </>
    );
};

export default CartItem;