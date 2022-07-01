import React from "react";
import logo from "../assets/images/logo.svg";
import imageAvatar from "../assets/images/image-avatar.png";
import Cart from "./Cart.js";
import { useState, useEffect } from "react";




const Header = ({ cart, setCart }) => {

  const [cartDisplay, setCartDisplay] = useState(false);
  const handleCartClick = () => {
    if (cartDisplay === false) {
      setCartDisplay(true);
    } else setCartDisplay(false)
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <header className="flex items-center justify-between width-full bg-white md:px-40 md:h-28 z-50 md:text-grayish-blue md:flex-none">
      <div id="header-left" className="flex items-center md:h-full">
        <img src={logo} alt="logo" />
        <nav className="pl-12 md:h-full md:overflow-visible text-sm">
          <ul className="md:flex md:h-full">
            <li className="md:mr-8 md:h-full md:flex md:items-center cursor-pointer box-border border-orange border-t-transparent border-solid md:hover:border-t-4 md:hover:border-b-4 md:hover:text-dark-grayish-blue">
              Collections
            </li>
            <li className="md:mr-8 md:h-full md:flex md:items-center cursor-pointer box-border border-orange border-t-transparent border-solid md:hover:border-t-4 md:hover:border-b-4 md:hover:text-dark-grayish-blue">
              Men
            </li>
            <li className="md:mr-8 md:h-full md:flex md:items-center cursor-pointer box-border border-orange border-t-transparent border-solid md:hover:border-t-4 md:hover:border-b-4 md:hover:text-dark-grayish-blue">
              Women
            </li>
            <li className="md:mr-8 md:h-full md:flex md:items-center cursor-pointer box-border border-orange border-t-transparent border-solid md:hover:border-t-4 md:hover:border-b-4 md:hover:text-dark-grayish-blue">
              About
            </li>
            <li className="md:mr-8 md:h-full md:flex md:items-center cursor-pointer box-border border-orange border-t-transparent border-solid md:hover:border-t-4 md:hover:border-b-4 md:hover:text-dark-grayish-blue">
              Contact
            </li>
          </ul>
        </nav>
      </div>

      <div id="header-right" className="flex flex-none items-center">
        <div id="cart-container" className="mr-8 w-[22px] h-[20px] relative">
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#69707D] hover:fill-black cursor-pointer"
            onClick={handleCartClick}
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            ></path>
          </svg>
          <div
            id="cart-items-number"
            className="text-white bg-orange rounded-xl w-[1.15rem] h-3 text-[10px] flex items-center justify-center z-40 -top-1.5 -right-2.5 absolute"
          >
            <b>3</b>
          </div>
          <Cart
            cart={cart}
            setCart={setCart}
            cartState={cartDisplay}
            setCartState={setCartDisplay}
          />
        </div>
        <img
          src={imageAvatar}
          alt=""
          className="w-6 h-6 md:w-11 md:h-11 border-orange rounded-full box-border flex-none md:hover:border-2 md:hover:cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
