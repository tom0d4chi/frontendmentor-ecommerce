import React from 'react'

const Cart = ({cart, setCart, cartState, setCartState}) =>{
    console.log(cart.items)

    return(
        <div
        id="cart"
        className={`${cartState ? 'flex': 'hidden'} flex-col bg-white h-56 w-80 rounded-xl shadow-xl z-90 absolute left-1/2 -translate-x-1/2 top-10`}
      >
        {cart.items.map((item, index) =>{
            return (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>

                </div>
            )
        })}
      </div>
    )
}

export default Cart