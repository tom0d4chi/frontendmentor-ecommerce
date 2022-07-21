import React from "react";

const Cart = ({ cart, setCart }) => {
  const handleDeleteItem = (itemId) => {
    return () => {
      setCart({
        ...cart,
        items: cart.items.filter((item) => {
          return item.id !== itemId;
        }),
      });
    };
  };

  return (
    <div
      id="cart"
      className={`${
        cart.isActive ? "visible opacity-100" : "invisible -translate-y-3 opacity-0"
      } fixed flex transition-all overflow-scroll scrollbar-hide flex-col p-5 bg-white h-52 w-[22rem] rounded-xl shadow-xl z-20 top-[4.5rem] left-1/2 -translate-x-1/2 sm:absolute sm:top-10`}
    >
      <div className="text-black font-semibold text-sm pb-3">Cart</div>
      <hr className="-mx-5" />
      <div
        id="cart-content"
        className="flex flex-col justify-between h-full w-full transition-all"
      >
        <div
          id="cart-items"
          className={`${
            cart.items.length > 0 ? "visible relative opacity-100" : "invisible absolute opacity-0 h-0 w-0"
          } pt-5  w-full transition-opacity`}
        >
          {cart.items.map((item, index) => {
            return (
              <div
                key={index}
                className="cart-item justify-between w-full flex h-12"
              >
                <img src={item.image} alt="" className="w-12 h-12 rounded-md" />
                <div className="text-dark-grayish-blue text-[0.8rem] cart-product-info ml-3 flex flex-col justify-around ">
                  <p className="">{item.name}</p>
                  <div className="flex flex-row">
                    ${((item.originalPrice * item.sale) / 100).toFixed(2)} x{" "}
                    {item.quantity}{" "}
                    <div className="text-black font-semibold ml-3">
                      $
                      {(
                        ((item.originalPrice * item.sale) / 100) *
                        item.quantity
                      ).toFixed(2)}
                    </div>
                  </div>
                </div>
                <svg
                  width="22"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#69707D] hover:fill-black cursor-pointer justify-self-end self-center ml-4"
                  onClick={handleDeleteItem(item.id)}
                >
                  <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </div>
            );
          })}
        </div>
       
        <button
          className={`${
            cart.items.length > 0 ? "visible opacity-100" : "invisible opacity-0 absolute h-0 w-0"
          } hover:opacity-50 h-12 w-full transition-opacity bg-orange text-white font-medium rounded-lg`}
        >
          Checkout
        </button>
        <div
          className={`${
            cart.items.length === 0 ? "flex" : "hidden"
          } h-full w-full justify-center items-center`}
        >
          <p className="select-none pt-5">Your cart is empty</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
