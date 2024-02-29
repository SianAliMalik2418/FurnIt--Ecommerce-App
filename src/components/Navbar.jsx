import React, { useContext, useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { storeContext } from './Context';

function Navbar() {


    const [menuOpen, setMenuOpen] = useState(false);
    let { cartProducts } = useContext(storeContext);


    return (
        <div className=' w-full py-10 h-full px-6 relative   flex items-center justify-between lg:py-7 lg:px-16 '>
            <Link to={"/"} className='text-[#265E55] font-bold text-3xl'>FurnIt.</Link>

            <div className=' items-center justify-center text-lg font-semibold gap-7 hidden min-[660px]:flex'>
                <Link to={"/"} className='menuItems relative'>Home</Link>
                <Link to={"/products"} className='menuItems relative'>Products</Link>
                <a href="#about" className='menuItems relative'>About</a>
                <a href="#service" className='menuItems relative'>Services</a>
            </div>

            <div className='flex items-center gap-7'>
                <Link to="/cart">
                    <div className=" relative  ">
                        <div className="  bg-red-600 absolute left-[20px] z-10 bottom-4 rounded-full text-white w-6 h-6 flex items-center justify-center text-sm ">
                            <span>{cartProducts.length}</span>
                        </div>

                        <FiShoppingCart size={25} />

                    </div>
                </Link>


                <div className=' min-[660px]:hidden  ' >

                    <label className="btn btn-circle swap swap-rotate">

                        <input type="checkbox" onClick={() => setMenuOpen(!menuOpen)} />

                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                    </label>


                </div>


            </div>

            {
                menuOpen ? (
                    <div className='bg-[#FEE3CA] px-10   w-full top-32 transition-all left-0 z-[76] absolute'>
                        <div className='flex flex-col text-2xl py-10 text-black font-semibold gap-4'>
                            <Link to={"/"} className='menuItems relative w-fit' >Home</Link>
                            <Link to={"/products"} className='menuItems relative w-fit' >Products</Link>
                            <a href="" className='menuItems relative w-fit' >About</a>
                            <a href="" className='menuItems relative w-fit' >Services</a>
                        </div>
                    </div>
                ) : (
                    <div className='bg-[#FEE3CA] px-10  opacity-0   w-full top-32 transition-all left-0 z-[5] absolute'>
                        <div className='flex flex-col text-2xl py-10 text-black font-semibold gap-4'>
                            <h1>Home</h1>
                            <h1>Products</h1>
                            <h1>About</h1>
                            <h1>Services</h1>
                        </div>
                    </div>
                )
            }



        </div>
    )
}

export default Navbar