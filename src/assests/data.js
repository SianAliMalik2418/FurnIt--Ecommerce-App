import productImg01 from "./images/double-sofa-01.png";
import productImg02 from "./images/double-sofa-02.png";
import productImg03 from "./images/double-sofa-03.png";

import productImg04 from "./images/single-sofa-01.webp";
import productImg05 from "./images/single-sofa-02.jpg";
import productImg06 from "./images/single-sofa-03.jpg";
import productImg007 from "./images/single-sofa-04.png";

import productImg07 from "./images/arm-chair-01.jpg";
import productImg08 from "./images/arm-chair-02.jpg";
import productImg09 from "./images/arm-chair-03.jpg";
import productImg010 from "./images/chair.webp";

import bedImg01 from "./images/bed01.webp"

import doorImg01 from "./images/door01.webp"
import doorImg02 from "./images/door02.webp"
import doorImg03 from "./images/door03.webp"

import kitchenImg01 from "./images/kitchen01.webp"
import kitchenImg02 from "./images/kitchen02.webp"
import kitchenImg03 from "./images/kitchen03.webp"

import diningImg01 from "./images/dining01.webp"
import diningImg02 from "./images/dining02.webp"
import diningImg03 from "./images/dining03.webp"



export const newProducts = [
  {
    id: "0",
    productName: "Modern Glass Front Door",
    imgUrl: doorImg02,
    category: "door",
    price: 599,
    shortDesc: "Add a modern touch to your home with our Glass Front Door.",
    description: "Create an inviting atmosphere with the Modern Glass Front Door. The sleek design and glass panels bring natural light into your entryway while maintaining privacy. Upgrade your home's exterior with this contemporary and functional door.",
    reviews: [
      {
        rating: 4.7,
        text: "I love the Modern Glass Front Door. It's stylish and allows plenty of light into the foyer."
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.75,
  },
  {
    id: "01",
    productName: "Elegant Upholstered Bed",
    imgUrl: bedImg01,
    category: "bed",
    price: 899,
    shortDesc: "Experience luxury with our Elegant Upholstered Bed.",
    description: "Transform your bedroom into a haven of comfort and style with the Elegant Upholstered Bed. The plush upholstery and sophisticated design create a cozy retreat for rest and relaxation. Elevate your sleep space with this elegant centerpiece.",
    reviews: [
      {
        rating: 4.8,
        text: "The Elegant Upholstered Bed exceeded my expectations. It's comfortable and adds a touch of luxury to my bedroom."
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.85,
  },
  {
    id: "02",
    productName: "Solid Oak Entry Door",
    imgUrl: doorImg01,
    category: "door",
    price: 499,
    shortDesc: "Welcome guests with our Solid Oak Entry Door.",
    description: "Make a lasting impression with the Solid Oak Entry Door. Crafted from high-quality oak, this door not only enhances your home's curb appeal but also provides durability and security. Elevate the entrance of your home with this timeless piece.",
    reviews: [
      {
        rating: 4.5,
        text: "The Solid Oak Entry Door exceeded my expectations. It's sturdy and looks elegant."
      }
    ],
    avgRating: 4.5,
  },
  {
    id: "03",
    productName: "Contemporary Kitchen Cabinet",
    imgUrl: kitchenImg01,
    category: "kitchen",
    price: 799,
    shortDesc: "Upgrade your kitchen with our Contemporary Kitchen Cabinet.",
    description: "Revitalize your kitchen space with the Contemporary Kitchen Cabinet. Its sleek design and ample storage make it a practical and stylish addition to modern kitchens. Elevate your culinary experience with this contemporary cabinet.",
    reviews: [
      {
        rating: 4.7,
        text: "The Contemporary Kitchen Cabinet is a game-changer. It provides ample storage and looks great in my kitchen."
      },
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.65,
  },
  {
    id: "04",
    productName: "Classic Wooden Door",
    imgUrl: doorImg03,
    category: "door",
    price: 449,
    shortDesc: "Enhance your home's charm with our Classic Wooden Door.",
    description: "Experience timeless elegance with the Classic Wooden Door. Crafted from durable wood, this door features a traditional design that complements any architectural style. Elevate the aesthetic appeal of your home with this classic piece.",
    reviews: [
      {
        rating: 4.6,
        text: "The Classic Wooden Door is well-crafted and adds a touch of warmth to my home."
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.75,
  },
  {
    id: "05",
    productName: "Rustic Dining Table Set",
    imgUrl: diningImg01,
    category: "dining",
    price: 599,
    shortDesc: "Gather around our Rustic Dining Table Set for memorable meals.",
    description: "Create a cozy and inviting dining space with the Rustic Dining Table Set. The warm wood tones and rustic design make every meal a special occasion. Upgrade your dining area with this charming and durable table set.",
    reviews: [
      {
        rating: 4.8,
        text: "The Rustic Dining Table Set exceeded my expectations. It's sturdy and looks elegant."
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.85,
  },
  {
    id: "06",
    productName: "Modern Kitchen Island",
    imgUrl: kitchenImg02,
    category: "kitchen",
    price: 899,
    shortDesc: "Enhance functionality with our Modern Kitchen Island.",
    description: "Upgrade your kitchen with the Modern Kitchen Island, offering additional storage, workspace, and a stylish focal point. The sleek design and quality craftsmanship make it a valuable addition to contemporary kitchens.",
    reviews: [
      {
        rating: 4.7,
        text: "The Modern Kitchen Island is a game-changer. It provides extra storage and looks great in my kitchen."
      },
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.65,
  },
  {
    id: "07",
    productName: "Luxury Dining Chairs (Set of 4)",
    imgUrl: diningImg02,
    category: "dining",
    price: 249,
    shortDesc: "Upgrade your dining experience with our Luxury Dining Chairs.",
    description: "Transform your dining space with the Luxury Dining Chairs. The set of four chairs combines comfort and style, making every meal a delightful experience. Elevate your dining area with these elegant and ergonomic chairs.",
    reviews: [
      {
        rating: 4.6,
        text: "The Luxury Dining Chairs exceeded my expectations. They're comfortable and add a touch of luxury to my dining area."
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.75,
  },
  {
    id: "08",
    productName: "Taylor Kitchen Design",
    imgUrl: kitchenImg03,
    category: "kitchen",
    price: 179,
    shortDesc: "Upgrade your kitchen with our Stainless Steel Kitchen Sink.",
    description: "Enhance your kitchen's functionality and style with the Stainless Steel Kitchen Sink. The durable stainless steel construction and modern design make it a practical and visually appealing addition to any kitchen space.",
    reviews: [
      {
        rating: 4.8,
        text: "The Stainless Steel Kitchen Sink exceeded my expectations. It's durable and looks great in my kitchen."
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.85,
  },
  {
    id: "09",
    productName: "Farmhouse Dining Table",
    imgUrl: diningImg03,
    category: "dining",
    price: 699,
    shortDesc: "Gather around our Farmhouse Dining Table for timeless meals.",
    description: "Create a welcoming and timeless dining space with the Farmhouse Dining Table. The rustic charm and sturdy construction make it a perfect centerpiece for family gatherings and celebrations.",
    reviews: [
      {
        rating: 4.7,
        text: "The Farmhouse Dining Table is exactly what I was looking for. It's sturdy and adds a touch of rustic charm to my dining room."
      },
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.65,
  },
];


export const trendingProducts = [
  {
    id: "10",
    productName: "Stone and Beam Westview Sofa",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    shortDesc: "Experience ultimate comfort with our Stone and Beam Westview Sofa.",
    description: "Indulge in luxury and style with the Stone and Beam Westview Sofa. Crafted for maximum comfort, this sofa combines modern design with a cozy feel. Elevate your living space and create a haven for relaxation.",
    reviews: [
      {
        rating: 4.7,
        text: "I love my new sofa! It's not only stylish but also incredibly comfortable."
      }
    ],
    avgRating: 4.5,
  },
  {
    id: "11",
    productName: "Rivet Bigelow Modern Sofa",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc: "Add a touch of modern elegance with our Rivet Bigelow Modern Sofa.",
    description: "Transform your living room with the Rivet Bigelow Modern Sofa. Its sleek design and premium upholstery make it a standout piece. Enjoy both style and comfort as you relax in this contemporary sofa.",
    reviews: [
      {
        rating: 4.8,
        text: "This sofa exceeded my expectations. It's both stylish and comfortable."
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: productImg03,
    category: "sofa",
    price: 173,
    shortDesc: "Discover affordable luxury with our Amazon Brand Modern Sofa.",
    description: "Upgrade your living space with the Amazon Brand Modern Sofa. With a focus on affordability and quality, this sofa provides a stylish seating solution. Enjoy the perfect blend of comfort and design.",
    reviews: [
      {
        rating: 4.6,
        text: "A great sofa at an affordable price. Comfortable and stylish."
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "13",
    productName: "2 Seater Sofa in Beige Velvet",
    imgUrl: productImg04,
    category: "sofa",
    price: 163,
    shortDesc: "Experience cloud-like comfort with  2 Seater in Beige Velvet.",
    description: "Immerse yourself in pure comfort with the 2 Seater Sofa. Its plush cushions and charming design create a cozy atmosphere. Unwind in style and enjoy a touch of luxury in your home.",
    reviews: [
      {
        rating: 4.6,
        text: "This sofa feels like sitting on a cloud. Absolutely love it!"
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "14",
    productName: "Faux Velvet Sofa",
    imgUrl: productImg05,
    category: "sofa",
    price: 163,
    shortDesc: "Indulge in opulence with our Faux Velvet Sofa.",
    description: "Elevate your living space with the Faux Velvet Sofa. Its luxurious velvet upholstery and elegant design create a sophisticated ambiance. Immerse yourself in comfort and style with this exquisite sofa.",
    reviews: [
      {
        rating: 4.6,
        text: "Luxurious and comfortable. A perfect addition to my living room."
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "15",
    productName: "Fluffy Sheep Sofa",
    imgUrl: productImg06,
    category: "sofa",
    price: 163,
    shortDesc: "Experience cloud-like comfort with our Fluffy Sheep Sofa.",
    description: "Immerse yourself in pure comfort with the Fluffy Sheep Sofa. Its plush cushions and charming design create a cozy atmosphere. Unwind in style and enjoy a touch of luxury in your home.",
    reviews: [
      {
        rating: 4.6,
        text: "This sofa feels like sitting on a cloud. Absolutely love it!"
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "16",
    productName: "Sakarias Armchair",
    imgUrl: productImg07,
    category: "chair",
    price: 99,
    shortDesc: "Add a stylish accent to your space with our Sakarias Armchair.",
    description: "Enhance your decor with the Sakarias Armchair. Its modern design and comfortable seating make it a versatile addition to any room. Elevate your style and create a chic and inviting atmosphere.",
    reviews: [
      {
        rating: 4.6,
        text: "The Sakarias Armchair is not only stylish but also surprisingly comfortable."
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "17",
    productName: "Modern Arm Sofa",
    imgUrl: productImg007,
    category: "sofa",
    price: 173,
    shortDesc: "Upgrade your space with our Modern Arm Sofa.",
    description: "Revitalize your living room with the Modern Arm Sofa. Its contemporary design and premium construction offer both style and comfort. Make a statement with this sophisticated sofa.",
    reviews: [
      {
        rating: 4.6,
        text: "The Modern Arm Sofa is a perfect blend of style and comfort."
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "18",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    shortDesc: "Discover comfort and style with our Baltsar Chair.",
    description: "Unwind in the Baltsar Chair, a perfect combination of comfort and style. Its ergonomic design and modern aesthetics make it a great addition to any space. Elevate your relaxation experience with this chic chair.",
    reviews: [
      {
        rating: 4.6,
        text: "The Baltsar Chair is both comfortable and aesthetically pleasing."
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "19",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    shortDesc: "Experience luxury seating with our Helmar Chair.",
    description: "Immerse yourself in the luxurious comfort of the Helmar Chair. Its stylish design and premium materials create a sophisticated look. Upgrade your space with this elegant and comfortable chair.",
    reviews: [
      {
        rating: 4.6,
        text: "The Helmar Chair is a perfect blend of comfort and sophistication."
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.7,
  },
];

export const allProducts = [
  {
    id: "20",
    productName: "Modern Glass Front Door",
    imgUrl: doorImg02,
    category: "Door",
    price: 599,
    shortDesc: "Add a modern touch to your home with our Glass Front Door.",
    description: "Create an inviting atmosphere with the Modern Glass Front Door. The sleek design and glass panels bring natural light into your entryway while maintaining privacy. Upgrade your home's exterior with this contemporary and functional door.",
    reviews: [
      {
        rating: 4.7,
        text: "I love the Modern Glass Front Door. It's stylish and allows plenty of light into the foyer."
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.75,
  },
  {
    id: "21",
    productName: "Elegant Upholstered Bed",
    imgUrl: bedImg01,
    category: "Bed",
    price: 899,
    shortDesc: "Experience luxury with our Elegant Upholstered Bed.",
    description: "Transform your bedroom into a haven of comfort and style with the Elegant Upholstered Bed. The plush upholstery and sophisticated design create a cozy retreat for rest and relaxation. Elevate your sleep space with this elegant centerpiece.",
    reviews: [
      {
        rating: 4.8,
        text: "The Elegant Upholstered Bed exceeded my expectations. It's comfortable and adds a touch of luxury to my bedroom."
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.85,
  },
  {
    id: "22",
    productName: "Solid Oak Entry Door",
    imgUrl: doorImg01,
    category: "Door",
    price: 499,
    shortDesc: "Welcome guests with our Solid Oak Entry Door.",
    description: "Make a lasting impression with the Solid Oak Entry Door. Crafted from high-quality oak, this door not only enhances your home's curb appeal but also provides durability and security. Elevate the entrance of your home with this timeless piece.",
    reviews: [
      {
        rating: 4.5,
        text: "The Solid Oak Entry Door exceeded my expectations. It's sturdy and looks elegant."
      }
    ],
    avgRating: 4.5,
  },
  {
    id: "23",
    productName: "Contemporary Kitchen Cabinet",
    imgUrl: kitchenImg01,
    category: "Kitchen",
    price: 799,
    shortDesc: "Upgrade your kitchen with our Contemporary Kitchen Cabinet.",
    description: "Revitalize your kitchen space with the Contemporary Kitchen Cabinet. Its sleek design and ample storage make it a practical and stylish addition to modern kitchens. Elevate your culinary experience with this contemporary cabinet.",
    reviews: [
      {
        rating: 4.7,
        text: "The Contemporary Kitchen Cabinet is a game-changer. It provides ample storage and looks great in my kitchen."
      },
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ],
    avgRating: 4.65,
  },
  // ... (previous products with capitalized categories)

{
  id: "24",
  productName: "Classic Wooden Door",
  imgUrl: doorImg03,
  category: "Door",
  price: 449,
  shortDesc: "Enhance your home's charm with our Classic Wooden Door.",
  description: "Experience timeless elegance with the Classic Wooden Door. Crafted from durable wood, this door features a traditional design that complements any architectural style. Elevate the aesthetic appeal of your home with this classic piece.",
  reviews: [
    {
      rating: 4.6,
      text: "The Classic Wooden Door is well-crafted and adds a touch of warmth to my home."
    },
    {
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.75,
},
{
  id: "25",
  productName: "Rustic Dining Table Set",
  imgUrl: diningImg01,
  category: "Dining",
  price: 599,
  shortDesc: "Gather around our Rustic Dining Table Set for memorable meals.",
  description: "Create a cozy and inviting dining space with the Rustic Dining Table Set. The warm wood tones and rustic design make every meal a special occasion. Upgrade your dining area with this charming and durable table set.",
  reviews: [
    {
      rating: 4.8,
      text: "The Rustic Dining Table Set exceeded my expectations. It's sturdy and looks elegant."
    },
    {
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.85,
},
{
  id: "26",
  productName: "Modern Kitchen Island",
  imgUrl: kitchenImg02,
  category: "Kitchen",
  price: 899,
  shortDesc: "Enhance functionality with our Modern Kitchen Island.",
  description: "Upgrade your kitchen with the Modern Kitchen Island, offering additional storage, workspace, and a stylish focal point. The sleek design and quality craftsmanship make it a valuable addition to contemporary kitchens.",
  reviews: [
    {
      rating: 4.7,
      text: "The Modern Kitchen Island is a game-changer. It provides extra storage and looks great in my kitchen."
    },
    {
      rating: 4.6,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.65,
},
// ... (previous products with capitalized categories)

{
  id: "27",
  productName: "Luxury Dining Chairs (Set of 4)",
  imgUrl: diningImg02,
  category: "Dining",
  price: 249,
  shortDesc: "Upgrade your dining experience with our Luxury Dining Chairs.",
  description: "Transform your dining space with the Luxury Dining Chairs. The set of four chairs combines comfort and style, making every meal a delightful experience. Elevate your dining area with these elegant and ergonomic chairs.",
  reviews: [
    {
      rating: 4.6,
      text: "The Luxury Dining Chairs exceeded my expectations. They're comfortable and add a touch of luxury to my dining area."
    },
    {
      rating: 4.9,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.75,
},
{
  id: "28",
  productName: "Taylor Kitchen Design",
  imgUrl: kitchenImg03,
  category: "Kitchen",
  price: 179,
  shortDesc: "Upgrade your kitchen with our Stainless Steel Kitchen Sink.",
  description: "Enhance your kitchen's functionality and style with the Stainless Steel Kitchen Sink. The durable stainless steel construction and modern design make it a practical and visually appealing addition to any kitchen space.",
  reviews: [
    {
      rating: 4.8,
      text: "The Stainless Steel Kitchen Sink exceeded my expectations. It's durable and looks great in my kitchen."
    },
    {
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.85,
},
{
  id: "29",
  productName: "Farmhouse Dining Table",
  imgUrl: diningImg03,
  category: "Dining",
  price: 699,
  shortDesc: "Gather around our Farmhouse Dining Table for timeless meals.",
  description: "Create a welcoming and timeless dining space with the Farmhouse Dining Table. The rustic charm and sturdy construction make it a perfect centerpiece for family gatherings and celebrations.",
  reviews: [
    {
      rating: 4.7,
      text: "The Farmhouse Dining Table is exactly what I was looking for. It's sturdy and adds a touch of rustic charm to my dining room."
    },
    {
      rating: 4.6,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.65,
},
{
  id: "30",
  productName: "Stone and Beam Westview Sofa",
  imgUrl: productImg01,
  category: "Sofa",
  price: 193,
  shortDesc: "Experience ultimate comfort with our Stone and Beam Westview Sofa.",
  description: "Indulge in luxury and style with the Stone and Beam Westview Sofa. Crafted for maximum comfort, this sofa combines modern design with a cozy feel. Elevate your living space and create a haven for relaxation.",
  reviews: [
    {
      rating: 4.7,
      text: "I love my new sofa! It's not only stylish but also incredibly comfortable."
    }
  ],
  avgRating: 4.5,
},
// ... (remaining products with capitalized categories)
// ... (previous products with capitalized categories)

{
  id: "31",
  productName: "Rivet Bigelow Modern Sofa",
  imgUrl: productImg02,
  category: "Sofa",
  price: 253,
  shortDesc: "Add a touch of modern elegance with our Rivet Bigelow Modern Sofa.",
  description: "Transform your living room with the Rivet Bigelow Modern Sofa. Its sleek design and premium upholstery make it a standout piece. Enjoy both style and comfort as you relax in this contemporary sofa.",
  reviews: [
    {
      rating: 4.8,
      text: "This sofa exceeded my expectations. It's both stylish and comfortable."
    },
    {
      rating: 4.8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.7,
},
{
  id: "32",
  productName: "Amazon Brand Modern Sofa",
  imgUrl: productImg03,
  category: "Sofa",
  price: 173,
  shortDesc: "Discover affordable luxury with our Amazon Brand Modern Sofa.",
  description: "Upgrade your living space with the Amazon Brand Modern Sofa. With a focus on affordability and quality, this sofa provides a stylish seating solution. Enjoy the perfect blend of comfort and design.",
  reviews: [
    {
      rating: 4.6,
      text: "A great sofa at an affordable price. Comfortable and stylish."
    },
    {
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.7,
},
{
  id: "33",
  productName: "2 Seater Sofa in Beige Velvet",
  imgUrl: productImg04,
  category: "Sofa",
  price: 163,
  shortDesc: "Experience cloud-like comfort with 2 Seater in Beige Velvet.",
  description: "Immerse yourself in pure comfort with the 2 Seater Sofa. Its plush cushions and charming design create a cozy atmosphere. Unwind in style and enjoy a touch of luxury in your home.",
  reviews: [
    {
      rating: 4.6,
      text: "This sofa feels like sitting on a cloud. Absolutely love it!"
    },
    {
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.7,
},
{
  id: "34",
  productName: "Faux Velvet Sofa",
  imgUrl: productImg05,
  category: "Sofa",
  price: 163,
  shortDesc: "Indulge in opulence with our Faux Velvet Sofa.",
  description: "Elevate your living space with the Faux Velvet Sofa. Its luxurious velvet upholstery and elegant design create a sophisticated ambiance. Immerse yourself in comfort and style with this exquisite sofa.",
  reviews: [
    {
      rating: 4.6,
      text: "Luxurious and comfortable. A perfect addition to my living room."
    },
    {
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.7,
},
{
  id: "35",
  productName: "Fluffy Sheep Sofa",
  imgUrl: productImg06,
  category: "Sofa",
  price: 163,
  shortDesc: "Experience cloud-like comfort with our Fluffy Sheep Sofa.",
  description: "Immerse yourself in pure comfort with the Fluffy Sheep Sofa. Its plush cushions and charming design create a cozy atmosphere. Unwind in style and enjoy a touch of luxury in your home.",
  reviews: [
    {
      rating: 4.6,
      text: "This sofa feels like sitting on a cloud. Absolutely love it!"
    },
    {
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.7,
},
{
  id: "36",
  productName: "Sakarias Armchair",
  imgUrl: productImg07,
  category: "Chair",
  price: 99,
  shortDesc: "Add a stylish accent to your space with our Sakarias Armchair.",
  description: "Enhance your decor with the Sakarias Armchair. Its modern design and comfortable seating make it a versatile addition to any room. Elevate your style and create a chic and inviting atmosphere.",
  reviews: [
    {
      rating: 4.6,
      text: "The Sakarias Armchair is not only stylish but also surprisingly comfortable."
    },
    {
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.7,
},
{
  id: "37",
  productName: "Modern Arm Sofa",
  imgUrl: productImg007,
  category: "Sofa",
  price: 173,
  shortDesc: "Upgrade your space with our Modern Arm Sofa.",
  description: "Revitalize your living room with the Modern Arm Sofa. Its contemporary design and premium construction offer both style and comfort. Make a statement with this sophisticated sofa.",
  reviews: [
    {
      rating: 4.6,
      text: "The Modern Arm Sofa is a perfect blend of style and comfort."
    },
    {
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.7,
},
{
  id: "38",
  productName: "Baltsar Chair",
  imgUrl: productImg08,
  category: "Chair",
  price: 89,
  shortDesc: "Discover comfort and style with our Baltsar Chair.",
  description: "Unwind in the Baltsar Chair, a perfect combination of comfort and style. Its ergonomic design and modern aesthetics make it a great addition to any space. Elevate your relaxation experience with this chic chair.",
  reviews: [
    {
      rating: 4.6,
      text: "The Baltsar Chair is both comfortable and aesthetically pleasing."
    },
    {
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.7,
},
{
  id: "39",
  productName: "Helmar Chair",
  imgUrl: productImg09,
  category: "Chair",
  price: 112,
  shortDesc: "Experience luxury seating with our Helmar Chair.",
  description: "Immerse yourself in the luxurious comfort of the Helmar Chair. Its stylish design and premium materials create a sophisticated look. Upgrade your space with this elegant and comfortable chair.",
  reviews: [
    {
      rating: 4.6,
      text: "The Helmar Chair is a perfect blend of comfort and sophistication."
    },
    {
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  avgRating: 4.7,
},
// ... (remaining products with capitalized categories)



];




