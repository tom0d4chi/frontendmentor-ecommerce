import React from "react";
import { useState } from "react";
import Images from "../assets/images/images";
import Thumbnail from "./Thumbnail";
import previous from "../assets/images/icon-previous.svg";
import next from "../assets/images/icon-next.svg";
import close from "../assets/images/icon-close.svg";

const Product = ({ product, cart, setCart }) => {
  const [displayedImage, setDisplayedImage] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [lightBox, setlightBox] = useState(false);

  const displayLightBox = () => {
    setlightBox(!lightBox);
  };

  const handlePreviousClick = () => {
    if (displayedImage === 0) {
      setDisplayedImage(3);
    } else {
      setDisplayedImage(displayedImage - 1);
    }
  };

  const handleNextClick = () => {
    if (displayedImage === 3) {
      setDisplayedImage(0);

    } else {
      setDisplayedImage(displayedImage + 1);

    }
  };

  const handleMinusClick = () => {
    return () => {
      if (itemQuantity > 0) {
        const newItemQuantity = itemQuantity - 1;
        setItemQuantity(newItemQuantity);
      }
    };
  };

  const handlePlusClick = () => {
    return () => {
      if (itemQuantity < 99) {
        const newItemQuantity = itemQuantity + 1;
        setItemQuantity(newItemQuantity);
      }
    };
  };

  const handleAddToCart = () => {
    if (itemQuantity > 0) {
      if (cart.items.filter((item) => item.id === product.id).length > 0) {
        setCart({
          ...cart,
          items: cart.items.map((item) => {
            if (item.id === product.id) {
              return { ...item, quantity: item.quantity + itemQuantity };
            }
          }),
        });
      } else {
        setCart({
          ...cart,
          items: cart.items.concat(
            Object.assign({}, product, { quantity: itemQuantity })
          ),
        });
      }

      setItemQuantity(0);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div
        id="product"
        className="flex flex-col md:flex-row md:items-center  md:w-1/3 dd:w-4/6 md:h-[24rem] dd:h-[30.5rem] md:justify-around"
      >
        <div
          id="product-images"
          className="flex md:flex-col md:flex-none md:justify-between md:w-72 dd:w-96 md:h-full"
        >
          <div
            id="lightbox"
            className={`fixed ${
              lightBox ? "visible opacity-100" : "invisible opacity-0"
            } hidden sm:flex w-screen h-screen z-50 inset-0 justify-center items-center tansition-all`}
          >
            <div
              id="lightbox-bg"
              className="h-full w-full bg-black opacity-70 absolute"
              onClick={displayLightBox}
            ></div>
            <div id="carousel-container" className="flex flex-col items-center w-[32rem]  relative">
              <img src={close} alt="" className="z-30 self-end h-5 w-5 mb-5"/>
              <div id="displayed-image-container" className="relative mb-5">
                <button
                  onClick={handlePreviousClick}
                  className="rounded-full z-30 bg-white shadow-md w-10 h-10 absolute flex justify-center items-center -left-5 top-1/2"
                >
                  <img src={previous} alt="" className="h-3 mr-0.5" />
                </button>
                <button
                  onClick={handleNextClick}
                  className="rounded-full z-30 bg-white shadow-md w-10 h-10 flex justify-center items-center absolute -right-5 top-1/2"
                >
                  <img src={next} alt="" className="h-3 ml-0.5" />
                </button>
                <img
                  id="displayed-image"
                  src={Images[displayedImage]}
                  alt=""
                  className="w-full md:rounded-xl"
                  onClick={displayLightBox}
                />
              </div>
              <div
                id="product-thumbnails"
                className="hidden md:flex justify-between w-3/4 z-30"
              >
                <Thumbnail
              thumbnailId={0}
              displayedImage={displayedImage}
              setDisplayedImage={setDisplayedImage}
            />
            <Thumbnail
              thumbnailId={1}
              displayedImage={displayedImage}
              setDisplayedImage={setDisplayedImage}
            />
            <Thumbnail
              thumbnailId={2}
              displayedImage={displayedImage}
              setDisplayedImage={setDisplayedImage}
            />
            <Thumbnail
              thumbnailId={3}
              displayedImage={displayedImage}
              setDisplayedImage={setDisplayedImage}
            />
              </div>
            </div>
          </div>
          <div id="displayed-image-container" className="relative">
            <button
              onClick={handlePreviousClick}
              className="rounded-full z-30 md:hidden bg-white shadow-md w-10 h-10 absolute flex justify-center items-center left-3 top-1/2 translate-y-3"
            >
              <img src={previous} alt="" className="h-3 mr-0.5" />
            </button>
            <button
              onClick={handleNextClick}
              className="rounded-full z-30 md:hidden bg-white shadow-md w-10 h-10 flex justify-center items-center absolute right-3 top-1/2 translate-y-3"
            >
              <img src={next} alt="" className="h-3 ml-0.5" />
            </button>
            <img
              id="displayed-image"
              src={Images[displayedImage]}
              alt=""
              className="md:h-72 md:w-72 dd:w-96 dd:h-96 sm:hover:opacity-50 transition-opacity  md:rounded-xl cursor-pointer"
              onClick={displayLightBox}
            />
          </div>
          <div
            id="product-thumbnails"
            className="hidden md:flex justify-between"
          >
            <Thumbnail
              thumbnailId={0}
              displayedImage={displayedImage}
              setDisplayedImage={setDisplayedImage}
            />
            <Thumbnail
              thumbnailId={1}
              displayedImage={displayedImage}
              setDisplayedImage={setDisplayedImage}
            />
            <Thumbnail
              thumbnailId={2}
              displayedImage={displayedImage}
              setDisplayedImage={setDisplayedImage}
            />
            <Thumbnail
              thumbnailId={3}
              displayedImage={displayedImage}
              setDisplayedImage={setDisplayedImage}
            />
          </div>
        </div>

        <div id="product-info" className="md:ml-20 dd:ml-28 px-5 pt-4 md:px-0 md:pt-0">
          <article>
            <p className="text-orange font-semibold tracking-widest text-xs md:text-md mb-3 md:mb-4">
              {product.company.toUpperCase()}
            </p>
            <h1 className="text-[1.8rem] md:text-[2rem] dd:text-[2.8rem] font-bold leading-none md:mb-4 dd:mb-8">
              {product.name}
            </h1>

            <p
              id="product-description"
              className="text-dark-grayish-blue text-md md:text-sm dd:text-base mt-4 md:mt-0 mb-4 break-normal w-full"
            >
              {product.description}
            </p>

            <div
              id="product-price-container"
              className="flex md:block flex-row items-center w-full justify-between mb-6 "
            >
              <div id="product-price" className="flex items-center">
                <p className="text-3xl font-bold mr-3">
                  ${((product.originalPrice * product.sale) / 100).toFixed(2)}
                </p>
                <p
                  id="product-sale"
                  className="font-bold text-orange bg-pale-orange rounded-md w-12 text-center"
                >
                  {product.sale} %
                </p>
              </div>
              <p className="line-through text-grayish-blue font-bold">
                ${product.originalPrice.toFixed(2)}
              </p>
            </div>

            <div id="product-buttons" className="flex md:flex-row flex-col">
              <div
                id="quantity-button"
                className="flex items-center justify-between rounded-lg px-6 mb-4 md:mb-0 md:px-0 h-14 md:w-36 font-bold bg-light-grayish-blue"
              >
                <button
                  id="minus-button"
                  onClick={handleMinusClick()}
                  className="text-orange text-2xl h-full hover:opacity-50 md:w-1/3 transition-all"
                >
                  -
                </button>
                <p>{itemQuantity}</p>
                <button
                  id="plus-button"
                  onClick={handlePlusClick()}
                  className="text-orange text-2xl h-full md:hover:opacity-50 md:w-1/3 transition-all"
                >
                  +
                </button>
              </div>
              <button
                id="add-button"
                onClick={handleAddToCart}
                className="flex items-center justify-center rounded-lg md:w-72 h-14 hover:opacity-50 md:ml-4 bg-orange text-white shadow-xl shadow-orange transition-all"
              >
                <svg
                  className="fill-white"
                  width="22"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
                </svg>
                <p className="ml-3 font-semibold">Add to cart</p>
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Product;
