import React from "react";

const Cart = ({ cart, setCart }) => {
  return (
    <div
      id="cart"
      className={`${
        cart.isActive ? "flex" : "hidden"
      } overflow-scroll scrollbar-hide flex-col p-5 bg-white h-52 w-80 rounded-xl shadow-xl z-90 absolute left-1/2 -translate-x-1/2 top-10`}
    >
      <div className="text-black font-semibold text-sm h-10">Cart</div>
      <hr className="-mx-5" />
      <div id="cart-content" className="flex flex-col justify-between h-full">
        <div id="cart-items" className="pt-5 grow">
          {cart.items.map((item, index) => {
            return (
              <div key={index} className="flex">
                <img src={item.image} alt="" className="w-12 h-12 rounded-md" />
                <div className="text-dark-grayish-blue text-sm cart-product-info ml-3">
                    <p className="">
                    {item.name}
                    </p>
                    <div className="flex flex-row">${(item.originalPrice*item.sale/100).toFixed(2)} x {item.quantity} <div className="text-black font-semibold ml-3">${(item.originalPrice*item.sale/100*item.quantity).toFixed(2)}</div></div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="h-12 w-full bg-orange text-white font-medium rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
