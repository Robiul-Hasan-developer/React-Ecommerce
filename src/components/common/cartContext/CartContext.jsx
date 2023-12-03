import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext(); 

const CartProvider = ({ children }) => {

    // Cart State
    const [cart, setCart] = useState([]); 

    // Item Amount State
    const [itemAmount, setItemAmount] = useState(0); 

    // Total Price Amount State
    const [totalAmount, setTotalAmount] = useState(0); 


    // Add Cart State
    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1}
        // console.log(newItem);

        // check if the item is already in the cart
        const cartItem = cart.find((item) => {
            return item.id === id; 
        }); 
        // console.log(cartItem);

        // if cart item already in the cart
        if(cartItem) {
            const newCart = [...cart].map((item) => {
                if(item.id === id) {
                    return {...item, amount: cartItem.amount + 1}; 
                } else {
                    return item; 
                }
            }); 
            setCart(newCart); 
        } else {
            setCart([ ...cart, newItem ]); 
        }
    }; 
    // console.log(cart);
    
    // Remove from the cart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id; 
        }); 
        setCart(newCart); 
    }; 
    
    // Clear Cart
    const clearCart = () => {
        setCart([]); 
    }
    
    // Increase Amount
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id
        }); 
        const added = addToCart(cartItem, id)
    }

    // Decrease Amount
    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
    
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: item.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        // console.log("Minus Btn Clicked");
    
        if (cartItem && cartItem.amount < 2) {
            removeFromCart(id);
        }
    }

    
    // Update Header Item Amount
    useEffect(() => {
        if(cart) {
            const amount = cart.reduce((prevItem, currentItem) => {
                return prevItem + currentItem.amount;     
            }, 0); 
            /* 0 is default prevItem value that is be added with currentItem */
            setItemAmount(amount); 
        }
    }, [cart]); 
    
    // Total Amount show in the Sidebar
    useEffect(() => {
        const totalAmount = cart.reduce((prevAmount, currentAmount) => {
            return prevAmount + currentAmount.price * currentAmount.amount; 
        }, 0); 
        setTotalAmount(totalAmount); 
    }, [cart]); 

    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, totalAmount}}>
            { children }
        </CartContext.Provider>
    );
};

export default CartProvider;



