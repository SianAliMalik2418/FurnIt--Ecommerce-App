import React, { useContext, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";
import { newProducts } from "../assests/data";
import { storeContext } from "./Context";

// Slider Setting...
export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },

    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function NewArrivals() {
  let { addToCart } = useContext(storeContext);

  return (
    <div
      className="mt-10  w-full  flex flex-col items-center justify-center gap-10 px-3 py-5 lg:mt-20"
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="font-semibold text-4xl text-black lg:text-[2.7rem]">
          Our Newest Product
        </h1>
        <span className="text-[#8F8F8F] text-center lg:text-xl">
          Made of the best materials and with a design that follows the times ✨
        </span>
      </div>

      <div className=" w-full lg:p-2 lg:px-5 ">
        <Slider {...settings} className="pl-1 pt-5">
          {newProducts.map(function (product, index) {
            return (
              <div key={product.id}>
                <div className="flex items-center   justify-center px-5 py-2 ">
                  <Card
                    imgUrl={product.imgUrl}
                    productName={product.productName}
                    price={product.price}
                    description={product.description}
                    reviews={product.reviews}
                    id={product.id}
                    avgRating = {product.avgRating}
                    addToCart={() => addToCart(newProducts[index])}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default NewArrivals;
