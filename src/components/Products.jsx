import React, { useContext, useEffect, useState } from 'react';
import firePlaceImg from '../assests/images/firePlace.jpg';
import Card from './Card';
import { allProducts } from '../assests/data';
import { storeContext } from './Context';
import { IoMdArrowDropdown } from 'react-icons/io';

function Products() {
    const { addToCart, category, setCategory } = useContext(storeContext);
    const [displayedProducts, setDisplayedProducts] = useState(allProducts);
    const [showSortDropDown, setShowSortDropDown] = useState(false);
    const [showCategoryDropDown, setShowCategoryDropDown] = useState(false);
    const [sortOption,setSortOption] = useState("Sort By")

    function handleCategories(selectedCategory) {
        const filteredProducts = allProducts.filter((product) => {
            return selectedCategory === 'All Products' || product.category === selectedCategory;
        });

        setDisplayedProducts(filteredProducts);
        setCategory(selectedCategory);
        setShowCategoryDropDown(false); // Close category dropdown after selection
    }

    function handleSorting(sortOption) {
        const sortedProducts = [...displayedProducts];
        setSortOption(sortOption)

        if (sortOption === 'From Low To High') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'From High To Low') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }

        setDisplayedProducts(sortedProducts);
        setShowSortDropDown(false); // Close sort dropdown after selection
    }

    useEffect(() => {
        function handleClickOutside(e) {
            if (!e.target.closest('.dropdown')) {
                setShowSortDropDown(false);
                setShowCategoryDropDown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='min-h-screen w-screen py-5 px-3 md:px-10 lg:px-20'>
                <div className='relative productPageImg w-full h-[25rem] lg:h-[33rem]'>
                    <div className="overlay top-0 left-0 h-full w-full bg-black opacity-[0.5] absolute"></div>
                    <div className="text-overlay  h-full w-full flex flex-col items-start justify-center gap-5 px-3 py-2 md:px-6 lg:px-20">
                        <span className='z-20 text-[#FEE3CA] font-semibold md:text-xl'>Best Room Decor Items</span>
                        <h1 className='z-20 text-white text-[1.7rem] font-semibold md:text-[2rem] lg:w-[50%]'>Our goods have the best quality and materials in the world.</h1>
                        <button className='px-5 py-3 lg:px-20 lg:py-5 z-20 bg-[#FEE3CA] text-[#23292E] mt-5 rounded-sm  font-bold md:px-7 md:py-4'>Shop Now</button>
                    </div>
                </div>

                <div className=' w-full mt-10 flex items-center justify-between md:justify-center md:gap-5'>
                    {/* Sort dropdown */}
                    <div className='dropdown relative cursor-pointer' onClick={() => setShowSortDropDown(!showSortDropDown)}>
                        <div className='flex items-center gap-3 px-9 md:px-12  text-black font-semibold py-1 md:py-3 border-2 border-black rounded-md'>
                            <span className='md:text-xl'>{sortOption}</span>
                            <IoMdArrowDropdown className='md:text-2xl' />
                        </div>
                        {showSortDropDown && (
                            <div className='w-full z-10 border-[1px] border-[black] text-black font-medium transition-all text-sm px-2  py-2 gap-2  flex flex-col justify-start items-start rounded-md absolute top-9 left-0 md:top-14 bg-white'>
                                <span className='px-1 text-[#23292E] text-xs md:text-base'>Sort Price</span>
                                <span
                                    className='menuItems after:bg-[#bdad9d] cursor-pointer transition-all rounded-md px-1 font-semibold md:text-lg'
                                    onClick={() => handleSorting('From Low To High')}
                                >
                                    From Low To High
                                </span>
                                <span
                                    className='menuItems after:bg-[#bdad9d] cursor-pointer transition-all rounded-md px-1 font-semibold md:text-lg'
                                    onClick={() => handleSorting('From High To Low')}
                                >
                                    From High To Low
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Category dropdown */}
                    <div className='dropdown relative cursor-pointer' onClick={() => setShowCategoryDropDown(!showCategoryDropDown)}>
                        <div className='flex items-center gap-3 px-9 md:px-12  text-black font-semibold py-1 md:py-3 border-2 border-black rounded-md'>
                            <span className='md:text-xl'>{category}</span>
                            <IoMdArrowDropdown className='md:text-2xl' />
                        </div>
                        {showCategoryDropDown && (
                            <div className='w-full z-10 border-[1px] border-[black] text-black font-medium transition-all text-sm px-2  py-2 gap-2  flex flex-col justify-start items-start rounded-md absolute top-9 left-0 md:top-14 bg-white'>
                                <span className='px-1 text-[#23292E] text-xs md:text-base'>Select Category</span>
                                {['All Products', 'Sofa', 'Door', 'Bed', 'Kitchen', 'Dining'].map((dropDownItem, index) => (
                                    <span
                                        key={index}
                                        className='menuItems after:bg-[#bdad9d] cursor-pointer transition-all rounded-md px-1 font-semibold md:text-lg'
                                        onClick={() => handleCategories(dropDownItem)}
                                    >
                                        {dropDownItem}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className='hidden lg:flex mt-24 text-4xl font-bold text-black items-center justify-between px-8'>
                    <h1>{category}</h1>
                    <span className='text-xl font-medium text-gray-500'>{displayedProducts.length} results</span>
                </div>

                <div className='mt-5 md:mt-10 gap-6 md:gap-12 w-full flex flex-wrap items-center justify-center '>
                    {displayedProducts.map((product, index) => (
                        <div key={product.id}>
                            <Card
                                key={product.id}
                                imgUrl={product.imgUrl}
                                productName={product.productName}
                                price={product.price}
                                description={product.description}
                                reviews={product.reviews}
                                id={product.id}
                                avgRating = {product.avgRating}
                                addToCart={() => addToCart(product)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Products;
