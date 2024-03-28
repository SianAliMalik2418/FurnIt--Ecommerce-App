import React, { useContext, useEffect } from "react";
import { BiCartAdd } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import ImgLazyLoading from "./LazyLoading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storeContext } from "./Context";
import { Link } from "react-router-dom";

function Card({ imgUrl, productName, price, id, description, reviews, avgRating }) {

  const product = { imgUrl, productName, price, id: Date.now() };
  const productsForDetailpage = { imgUrl, productName, price, id, description, reviews, avgRating };

  const { cartProducts, setCartIcon, addToCart, handleRemoveFromCart, productDetails, setProductDetails } = useContext(storeContext);
  const isItemInCart = cartProducts.some((product) => product.productName === productName);

  useEffect(() => {
    if (isItemInCart) {
      setCartIcon(true);
    }
  }, [cartProducts, productName, setCartIcon]);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Stop the click event from propagating to the parent Link component
    e.preventDefault(); // Prevent the default behavior of the Link component
    addToCart(product);
    toast.success("Added To Cart");
  };

  const handleProductsDetails = (e) => {
    setProductDetails(productsForDetailpage);
  };

  return (
    <>
      <div
        onClick={handleProductsDetails}
        className="card w-[20rem] h-[30rem] mt-5 bg-[#e9e5e5] lg:w-[22rem] pb-8"
        data-aos="fade-up"
      >
        <Link to={"/productDetails"}>
          <ImgLazyLoading
            src={imgUrl}
            className="w-full h-[22rem] object-cover object-center"
            alt=""
          />

          <div className="mt-4 text-xl h-[30%] font-semibold flex flex-col gap-6 px-6">
            <h1 className="text-left  h-10">{productName}</h1>

            <div className="flex items-center justify-between">
              <span>${price}</span>
              {isItemInCart ? (
                <div className="tooltip hover:scale-[1.1] cursor-pointer transition-all" data-tip="Added To Cart">
                  <FaCheck
                    size={30}
                    className="hover:text-[green]"
                    onClick={() => toast.error("Item is already in the Cart")}
                  />
                </div>
              ) : (
                <div className="tooltip hover:scale-[1.1] cursor-pointer transition-all" data-tip="Add To Cart">
                  <BiCartAdd
                    id="cartIcon"
                    size={30}
                    className="hover:text-[red]"
                    onClick={handleAddToCart}
                  />
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
