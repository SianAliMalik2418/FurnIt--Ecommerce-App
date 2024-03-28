import React, { useContext, useEffect, useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { storeContext } from './Context';

function FloatingCartIcon() {

    const [backToTopButton, setBackToTopButton] = useState(false);
    let { cartProducts } = useContext(storeContext);


    useEffect(function () {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 700) {
                setBackToTopButton(true)
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, [])

    function handleScroll() {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }


    return (
        <>
            {
                backToTopButton ? (
                    <button className='h-10 w-10  transition-all duration-300 opacity-1 font-bold text-xl text-black fixed bottom-[20px] right-[20px]  hover:scale-[1.1]  z-10' onClick={handleScroll}>
                        <Link to="/cart">
                    <div className=" relative  ">
                        <div className="  bg-red-600 absolute left-[20px] z-10 bottom-4 rounded-full text-white w-6 h-6 flex items-center justify-center text-sm ">
                            <span>{cartProducts.length}</span>
                        </div>

                        <FiShoppingCart size={25} />

                    </div>
                </Link>
                    </button>
                ) : (
                    <button className='h-10 w-10 bg-white transition-all duration-300 opacity-0 text-black fixed bottom-[50px] right-[50px]' onClick={handleScroll}>^</button>

                )
            }
        </>
    )
}

export default FloatingCartIcon