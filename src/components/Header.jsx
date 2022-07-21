import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
import close from "../assets/images/icon-close.svg";
import imageAvatar from "../assets/images/image-avatar.png";
import Cart from "./Cart.jsx";

const Header = ({ cart, setCart }) => {
  const [navbarVisible, setnavbarVisible] = useState(false);

  const handleDropdownClick = () => {
    setnavbarVisible(!navbarVisible);
  };

  const handleCartClick = () => {
    setCart({
      ...cart,
      isActive: !cart.isActive,
    });
  };

  return (
    <header className="fixed sm:relative flex flex-none items-center justify-between w-full  bg-white sm:bg-red px-5 sm:px-20 lg:px-40 h-16 sm:h-28 z-50 transition-all text-grayish-blue">
      <div id="dark-bg-mobile-navbar" onClick={handleDropdownClick} className={`w-screen h-screen fixed inset-0 bg-black z-30 dd:invisible transition-all ${navbarVisible  ? "visible opacity-50" : "invisible opacity-0"}`}></div>
     <div id="header-left" className="flex items-center h-full">
        <svg
          id="dropdown-button"
          width="16"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-5 flex-none dd:invisible lg:opacity-0 opacity-100 transition-all fill-[#69707D] hover:fill-black sm:absolute  cursor-pointer"
          onClick={handleDropdownClick}
        >
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fillRule="evenodd"
          />
        </svg>

        <img src={logo} alt="logo" className="mb-[4px] sm:translate-x-10 dd:translate-x-0 transition-all"/>
        <nav
          className={`
            dd:pl-12 
            p-4
            dd:p-0
            dd:h-full 
            w-64 
            dd:w-auto 
            dd:overflow-visible 
            dd:text-sm 
            dd:visible
            dd:-translate-x-0
            -translate-x-full
            flex 
            dd:flex-row
            dd:static
            dd:font-normal
            dd:z-auto
            dd:opacity-100
            z-30
            flex-col
            font-bold
            dd:text-grayish-blue
            text-black
            text-md
            fixed 
            top-0
            left-0
            h-screen
            dd:bg-transparent 
            dd:transition-none
            transition-transform
            will-change-transform
            bg-white 
            ${navbarVisible ? "visible translate-x-0" : "invisible opacity-0"}`}
        >
          <img src={close} alt="" className={`h-4 w-4 mb-14 dd:invisible cursor-pointer ${navbarVisible ? "visible" : "invisible"}`} onClick={handleDropdownClick} />
          <ul className="dd:flex dd:h-full transition-all sm:transition-none">
            <li className="dd:mr-8 dd:mb-0 mb-4 dd:h-full dd:flex dd:items-center cursor-pointer box-border border-b-orange border-t-transparent hover:border-solid hover:border-t-4 hover:border-b-4 dd:hover:text-dark-grayish-blue transition-[border]">
              Collections
            </li>
            <li className="dd:mr-8 dd:mb-0 mb-4 dd:h-full dd:flex dd:items-center cursor-pointer box-border border-b-orange border-t-transparent hover:border-solid hover:border-t-4 hover:border-b-4 dd:hover:text-dark-grayish-blue transition-[border]">
              Men
            </li>
            <li className="dd:mr-8 dd:mb-0 mb-4 dd:h-full dd:flex dd:items-center cursor-pointer box-border border-b-orange border-t-transparent hover:border-solid hover:border-t-4 hover:border-b-4 dd:hover:text-dark-grayish-blue transition-[border]">
              Women
            </li>
            <li className="dd:mr-8 dd:mb-0 mb-4 dd:h-full dd:flex dd:items-center cursor-pointer box-border border-b-orange border-t-transparent hover:border-solid hover:border-t-4 hover:border-b-4 dd:hover:text-dark-grayish-blue transition-[border]">
              About
            </li>
            <li className="dd:mr-8 dd:mb-0 mb-4 dd:h-full dd:flex dd:items-center cursor-pointer box-border border-b-orange border-t-transparent hover:border-solid hover:border-t-4 hover:border-b-4 dd:hover:text-dark-grayish-blue transition-[border]">
              Contact
            </li>
          </ul>
        </nav>
      </div>

      <div id="header-right" className="flex flex-none items-center">
        <div
          id="cart-container"
          className="sm:mr-8 mr-4 w-[22px] h-[20px] relative"
        >
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#69707D] hover:fill-black cursor-pointer transition-all"
            onClick={handleCartClick}
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            ></path>
          </svg>
          <div 
          id="cart-items-number-container"
          className="flex items-center justify-center w-[1.15rem] h-3 -top-1.5 -right-2.5 absolute">
            <div
              id="cart-items-number"
              className={`${
                cart.items.length === 0 ? "invisible h-0 w-0" : "visible h-full w-full"
              } transition-all text-white bg-orange rounded-xl flex text-[10px] items-center justify-center z-20 `}
            >
              <b className={`${cart.items.length === 0 ? "invisible" : "visible"}`}>
                {cart.items.reduce(
                  (previousValue, currentValue) =>
                    previousValue + currentValue.quantity,
                  0
                )}
              </b>
            </div>
          </div>
          <Cart cart={cart} setCart={setCart} />
        </div>
        <img
          src={imageAvatar}
          alt=""
          className="w-6 h-6 sm:w-11 sm:h-11 border-orange rounded-full box-border flex-none sm:hover:border-2 hover:cursor-pointer transition-all duration-75"
        />
      </div>
    </header>
  );
};

export default Header;
