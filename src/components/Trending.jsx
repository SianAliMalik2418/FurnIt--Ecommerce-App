import Card from "./Card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./NewArrivals";
import { trendingProducts } from "../assests/data";
import { useContext } from "react";
import { storeContext } from "./Context";

function Trending() {
  let { cartProducts, addToCart } = useContext(storeContext);

  return (
    <div
      className=" mt-48 w-full  flex flex-col items-center justify-center gap-10 px-3 py-5 pb-10 lg:mt-20"
      data-aos="fade-down"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="font-semibold text-4xl text-black">Trending Products</h1>
        <span className="text-[#8F8F8F] text-center">
          Products That Our Buyers Are Loving ❤️
        </span>
      </div>

      <div className=" w-full lg:p-2 lg:px-5 ">
        <Slider {...settings} className="pl-1 pt-5">
          {trendingProducts.map(function (product, index) {
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
                    addToCart={() => addToCart(trendingProducts[index])}
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

export default Trending;
