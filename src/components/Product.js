import React from "react";
import { useState } from "react";
import Images from "../assets/images/images";
import Thumbnails from "../assets/images/thumbnails";

const Product = ({ product, cart, setCart }) => {
  const [displayedImage, setDisplayedImage] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);


  const handleThumbnailClick = (thumbnail) => {
    return () => {
      const oldThumbnail = document.getElementById(
        "thumbnail-" + displayedImage
      );
      oldThumbnail.style.borderStyle = "none";
      oldThumbnail.style.opacity = 1;

      const newThumbnail = document.getElementById("thumbnail-" + thumbnail);
      newThumbnail.style.border = "solid 2px orange";
      newThumbnail.style.opacity = 0.5;

      setDisplayedImage(thumbnail);
    };
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
    if (itemQuantity > 0){
      const newCart = cart
      const newProduct = product
      newProduct.quantity = itemQuantity
      newCart.items.push(newProduct)
      setItemQuantity(0)
      setCart(newCart)
    }
    
  };

  return (
    <div className="flex justify-center items-center md:h-full">
      <div
        id="product"
        className="flex md:items-center md:w-4/6 md:h-[30.5rem] md:justify-around"
      >
        <div
          id="product-images"
          className="flex md:flex-col md:flex-none md:justify-between md:w-96 md:h-full"
        >
          <img
            src={Images[displayedImage]}
            alt=""
            className="md:w-96 md:h-96 rounded-xl"
          />
          <div id="product-thumbnails" className="flex justify-between">
            <img
              id="thumbnail-0"
              src={Thumbnails[0]}
              alt=""
              className="cursor-pointer rounded-xl md:hover:opacity-50 md:w-20 md:h-20 border-2  border-orange opacity-50"
              onClick={handleThumbnailClick(0)}
            />
            <img
              id="thumbnail-1"
              src={Thumbnails[1]}
              alt=""
              className="cursor-pointer rounded-xl md:hover:opacity-50 md:w-20 md:h-20"
              onClick={handleThumbnailClick(1)}
            />
            <img
              id="thumbnail-2"
              src={Thumbnails[2]}
              alt=""
              className="cursor-pointer rounded-xl md:hover:opacity-50 md:w-20 md:h-20"
              onClick={handleThumbnailClick(2)}
            />
            <img
              id="thumbnail-3"
              src={Thumbnails[3]}
              alt=""
              className="cursor-pointer rounded-xl md:hover:opacity-50 md:w-20 md:h-20"
              onClick={handleThumbnailClick(3)}
            />
          </div>
        </div>

        <div id="product-info" className="md:ml-28">
          <article>
            <p className="text-orange font-semibold tracking-widest md:text-sm md:mb-4">
              {product.company.toUpperCase()}
            </p>
            <h1 className="text-[2.8rem] font-semibold leading-none md:mb-8">
              {product.name}
            </h1>

            <p id="product-description" className="text-grayish-blue md:mb-4">
              {product.description}
            </p>
            <div id="product-price" className="flex items-center">
              <p className="text-3xl font-bold mr-3">
                ${((product.originalPrice * product.sale) / 100).toFixed(2)}
              </p>
              <p
                id="product-sale"
                className="font-bold text-orange bg-pale-orange rounded-md md:w-12 text-center"
              >
                {product.sale} %
              </p>
            </div>
            <p className="line-through text-grayish-blue text-bold md:mb-6">
              ${product.originalPrice.toFixed(2)}
            </p>
            <div id="cart-buttons" className="flex">
              <div
                id="quantity-button"
                className="flex items-center justify-between rounded-lg md:h-14 md:w-36 font-bold bg-light-grayish-blue"
              >
                <button
                  id="minus-button"
                  onClick={handleMinusClick()}
                  className="text-orange text-2xl h-full md:hover:opacity-50 md:w-1/3"
                >
                  -
                </button>
                <p>{itemQuantity}</p>
                <button
                  id="plus-button"
                  onClick={handlePlusClick()}
                  className="text-orange text-2xl h-full md:hover:opacity-50 md:w-1/3"
                >
                  +
                </button>
              </div>
              <button
                id="add-button"
                onClick={handleAddToCart}
                className="flex items-center justify-center rounded-lg ml-4 md:w-72 md:h-14 md:hover:opacity-50 bg-orange text-white shadow-xl shadow-orange"
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
