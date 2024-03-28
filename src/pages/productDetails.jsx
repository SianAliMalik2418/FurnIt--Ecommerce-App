import { useContext, useEffect, useState } from "react";
import { storeContext } from "../components/Context";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userLogo from "../assests/images/avatar.png";
import { TbShoppingCartCopy } from "react-icons/tb";
import { Link } from "react-router-dom";

function ProductDetails() {
  let [isAddedToCart, setIsAddedToCart] = useState(false);

  const {
    cartProducts,
    setCartIcon,
    addToCart,
    handleRemoveFromCart,
    productDetails,
  } = useContext(storeContext);

  let { imgUrl, productName, price, id, description, reviews, avgRating } =
    productDetails;
  console.log(reviews);

  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    addToCart(productDetails);
    setIsAddedToCart(!isAddedToCart);
    toast.success("Added To Cart");
  };

  return (
    <>
      <div className="min-h-screen w-screen flex items-center justify-center flex-col mt-20  gap-6 px-5">
        <div className="flex items-center justify-center flex-col lg:flex-row gap-7 lg:gap-10 lg:px-4 ">
          <div>
            <img
              src={imgUrl}
              className="object-cover object-center h-[40vh] lg:h-[60vh] lg:w-[80vw]"
              alt=""
            />
          </div>

          <div className="w-full flex flex-col justify-center gap-2 lg:ml-5 ">
            <h1 className="font-bold text-2xl mt-3 lg:text-3xl">
              {productName} (${price})
            </h1>
            <div className="flex gap-2 items-center justify-center w-fit">
              <span className="text-black">{avgRating}</span>
              <FaStar color="yellow" />
            </div>
            <div>
              <p className="lg:w-[35rem] lg:mt-3">{description}</p>

              <div className="w-full mt-3">
                {isAddedToCart ? (
                  <Link to={"/cart"}>
                    <div className="mt-5 tooltip" data-tip="Item is in Cart">
                      <TbShoppingCartCopy size={35} color="green" />
                    </div>
                  </Link>
                ) : (
                  <button
                    className="py-3 px-7 bg-black text-white"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <h1 className="font-bold text-black text-3xl mt-24">Reviews</h1>

          {reviews?.map(function (review) {
            return (
              <>
                <div
                  key={review.text}
                  className="flex flex-col gap-2 mt-6 w-fit"
                >
                  <div className="flex  gap-1 items-center justify-center w-fit mt-3">
                    <div className="h-full">
                      <img
                        src={userLogo}
                        className="w-16  object-center object-cover  "
                        alt=""
                      />
                    </div>
                    <p className="text-lg">User1234</p>
                  </div>

                  <span>{review.text}</span>
                </div>
              </>
            );
          })}
        </div>

        <hr className="my-28 bg-[#FFF8EC] w-[15rem] h-1 md:w-[23rem]" />
      </div>
    </>
  );
}
export default ProductDetails;
