import React, { useContext, useEffect, useState } from 'react'

import CartCard from './CartCard';
import { storeContext } from './Context';
import { Link } from 'react-router-dom'



function Cart() {

  let { cartProducts, totalPriceAfterIncrement, productId } = useContext(storeContext);
  let [filteredCartProducts, setFilteredCartProducts] = useState([]);

  function checkRepeatingProducts() {
    const uniqueIds = new Set();

    const filteredArray = cartProducts.filter((cartProduct) => {
      if (uniqueIds.has(cartProduct.id)) {
        return false; // Product with this id is already in the set
      }

      uniqueIds.add(cartProduct.id);
      return true; // Product with this id is not in the set
    });



    setFilteredCartProducts(filteredArray);
  }


  useEffect(() => {
    checkRepeatingProducts();
  }, [cartProducts, productId]);





  return (
    <div className='w-screen min-h-screen bg-[#FEF9F4] pt-5 lg:pt-4 relative'>
      {
        cartProducts.length ? (<h1 className='text-4xl font-bold mt-16 text-center lg:mt-2'>Your Cart</h1>) : ("")
      }

      <div className='w-full h-full flex flex-col gap-10 items-center justify-center px-5 lg:flex-row lg:gap-0 lg:px-0 lg:justify-start lg:items-start'>

        <div className='flex flex-col z-10  min-h-[65vh] items-center justify-center     lg:w-[65%]'>
          {
            filteredCartProducts.length ? (
              filteredCartProducts.map(function (cartProduct, index) {
                return (
                  <div key={index}>
                    <CartCard id={cartProduct.id} imgUrl={cartProduct.imgUrl} productName={cartProduct.productName} price={cartProduct.price} />
                  </div>
                )
              })
            ) : (<div className='flex flex-col z-20 items-center justify-center gap-10' >
              <h1 className='text-3xl font-bold'>Your Cart is Empty ):</h1>
              <Link to={"/products"} className='px-10  cursor-pointer w-fit py-2 bg-black text-white font-semibold'>Start Shoping</Link>
            </div>)
          }


        </div>


        <div className="checkout  w-full lg:right-28  lg:z-[10] lg:top-[12rem]  bg-[#ecebeb] py-5 pb-20 mt-5 md:mt-8 md:w-[70%] lg:w-fit  overflow-hidden">
          <div className='flex flex-col items-start justify-start px-7'>
            <h1 className='text-black font-semibold  text-2xl'>Cart Total</h1>

            <div className='flex flex-col w-full justify-between items-center border-b-[1px] border-black pb-7   mt-5'>

              <div className='flex justify-between items-center w-full   py-3 '>
                <span className='text-xl'>Subtotal</span>
                <span className='text-black font-semibold text-xl'>${totalPriceAfterIncrement}</span>
              </div>

              <div className=' py-3 flex flex-col w-fit gap-3  md:w-full md:flex-row'>
                <input type="text" className='px-8 py-4  rounded-md bg-[#FFFFFF] md:w-full outline-none text-black font-semibold' placeholder='Apply Voucher Code...' />
                <button className='bg-black text-white rounded-md py-3 px-7'>Apply</button>
              </div>

            </div>

            <div className='mt-8 flex flex-col gap-5 w-full md:mt-12'>
              <div className='flex items-center justify-between'>
                <span className='text-xl'>Total</span>
                <span className='text-xl font-semibold text-black'>${totalPriceAfterIncrement}</span>
              </div>

              <button className='py-3 px-7 bg-black text-white'>Checkout Now</button>
            </div>

          </div>

        </div>



      </div>


    </div>
  )
}

export default Cart