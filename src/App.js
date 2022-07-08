import "./index.css";
import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Images from "./assets/images/images";

const sneakers = {
  id:1,
  company: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are our perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  originalPrice: 250,
  sale: 50,
  image:Images[0]
};


const App = () => {

  const [cart, setCart] = useState({
    isActive:false,
    items:[]
  })

  return (
    <div className="App flex flex-col">
      <Header cart={cart} setCart = {setCart}/>
      <hr className="md:w-5/6 md:self-center" />
      <Product product={sneakers} cart={cart} setCart={setCart}/>
    </div>
  );
};

export default App;
