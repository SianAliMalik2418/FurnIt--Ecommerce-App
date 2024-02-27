import React, { useContext, useState, useEffect } from 'react';
import { GrSubtractCircle } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { storeContext } from './Context';

function CartCard({ imgUrl, productName, price, id }) {
    const [localProductTotalPrice, setLocalProductTotalPrice] = useState(price);
    const [localProductQuantity, setLocalProductQuantity] = useState(1);

    const { handleDecrement, handleIncrement, handleRemoveFromCart } = useContext(storeContext);

    useEffect(() => {
        setLocalProductTotalPrice(price * localProductQuantity);
    }, [localProductQuantity, price]);

    const handleIncrementProductPrice = () => {
        setLocalProductQuantity((prev) => prev + 1);
    };

    const handleDecrementProductPrice = () => {
        if (localProductQuantity > 1) {
            setLocalProductQuantity((prev) => prev - 1);
        }
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center border-b-2 border-black lg:border-b-0 pb-10 mt-20 lg:w-screen lg:justify-between'>
                <div className='flex flex-col items-center justify-center gap-8 md:flex-row lg:w-fit lg:flex-col'>
                    <div className='flex items-center justify-center flex-col md:gap-3 lg:w-fit'>
                        <img src={imgUrl} className='w-[20rem] h-[16rem] object-cover object-center md:h-[20rem] md:w-[30rem] lg:w-full lg:h-[20rem]' alt="" />
                        <span className='text-xl text-center font-semibold lg:w-[80%] lg:mt-5'>{productName} (${price})</span>
                    </div>

                    <div className='w-full flex items-center justify-between md:w-fit px-6 mt-6 md:px-2 md:justify-end md:gap-16 lg:w-fit'>
                        <div className='flex items-center gap-3 lg:gap-4' style={{ userSelect: 'none' }}>
                            <div className='w-32 py-2 px-4 border-2 border-black flex justify-between items-center'>
                                <GrSubtractCircle size={25} color={localProductQuantity === 1 ? "gray" : "black"} cursor="pointer" onClick={() => { handleDecrement(price); handleDecrementProductPrice() }} />
                                <span className='text-xl'>{localProductQuantity}</span>
                                <IoMdAddCircleOutline size={25} color='black' cursor="pointer" onClick={() => { handleIncrement(price); handleIncrementProductPrice() }} />
                            </div>
                            <div className='tooltip' data-tip="Delete">
                                <MdDeleteOutline color='red' size={35} cursor="pointer" onClick={() => { handleRemoveFromCart(id)  }} />
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <span className='text-xl'>Total:</span>
                            <span className='text-2xl font-semibold'>${localProductTotalPrice}</span>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    );
}

export default CartCard;
