// Card.js

import React, { useContext, useEffect } from 'react';
import { BiCartAdd } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import ImgLazyLoading from './LazyLoading';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storeContext } from './Context';

function Card({ imgUrl, productName, price }) {
  const { cartProducts, setCartIcon, addToCart, handleRemoveFromCart } = useContext(storeContext);
  const isItemInCart = cartProducts.some(product => product.productName === productName);

  useEffect(() => {
    // Check if the item is in the cart when the component mounts
    const isItemInCart = cartProducts.some(product => product.productName === productName);
    if (isItemInCart) {
      setCartIcon(true);
    }
  }, [cartProducts, productName, setCartIcon]);

  const handleAddToCart = () => {
    const product = { imgUrl, productName, price, id: Date.now() }; // Using timestamp as a unique id
    addToCart(product);
    toast.success("Added To Cart");
  };

  return (
    <>
      <div className='card w-[20rem] h-[30rem] mt-5 bg-[#e9e5e5] lg:w-[22rem] pb-8' data-aos="fade-up">
        <ImgLazyLoading src={imgUrl} className='w-full h-[22rem] object-cover object-center' alt="" />

        <div className='mt-4 text-xl h-[30%] font-semibold flex flex-col gap-6 px-6'>
          <h1 className='text-left'>{productName}</h1>

          <div className='flex items-center justify-between'>
            <span>${price}</span>
            {isItemInCart ? (
              <div className="tooltip hover:scale-[1.1] cursor-pointer transition-all" data-tip="Added To Cart">
                <FaCheck size={30} className='hover:text-[green]' onClick={() => toast.error("Item is already in the Cart")} />
              </div>
            ) : (
              <div className="tooltip hover:scale-[1.1] cursor-pointer transition-all" data-tip="Add To Cart">
                <BiCartAdd size={30} className='hover:text-[red]' onClick={handleAddToCart} />
              </div>
            )}
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Card;
