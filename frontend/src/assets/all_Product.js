// Shop Category

import m1 from "../assets/men1.webp";
import m2 from "../assets/men2.avif";
import m3 from "../assets/men3.avif";
import m4 from "../assets/men4.avif";
import m5 from "../assets/men5.avif";
import m6 from "../assets/men6.avif";
import m7 from "../assets/men7.avif";
import m8 from "../assets/men8.avif";

import w1 from "../assets/women1.jpg";
import w2 from "../assets/women2.avif";
import w3 from "../assets/women3.webp";
import w4 from "../assets/women4.avif";
import w5 from "../assets/women5.jpg";
import w6 from "../assets/women6.avif";
import w7 from "../assets/women7.avif";
import w8 from "../assets/women8.avif";

import k1 from "../assets/kids1.avif";
import k2 from "../assets/kids2.avif";
import k3 from "../assets/kids3.avif";
import k4 from "../assets/kids4.avif";
import k5 from "../assets/kids5.avif";
import k6 from "../assets/kids6.avif";
import k7 from "../assets/kids7.avif";
import k8 from "../assets/kids8.avif";

// Popular
import shirt from "../assets/shirt.webp";
import jeans from "../assets/jeans.avif";
import tshirt from "../assets/tshirt.webp";
import jacket from "../assets/jacket.avif";

// New Collections
import men1 from "../assets/m1.webp";
import men2 from "../assets/m2.avif";
import men3 from "../assets/m3.avif";

import women1 from "../assets/w1.webp";
import women2 from "../assets/w2.webp";
import women3 from "../assets/w3.webp";

import kid1 from "../assets/k1.avif";
import kid2 from "../assets/k2.avif";

let all_product = [
  {
    id: 1,
    name: "Kurti",
    category: "women",
    image: w1,
    new_price: 30.0,
    old_price: 50.5,
    description: "Floral Embroidered Mandarin Collar Tunic",
  },

  {
    id: 2,
    name: "Jeans",
    category: "men",
    image: m1,
    new_price: 60.0,
    old_price: 90.5,
    description: "Men Smart Relaxed Fit Clean Look Pure Cotton Jeans",
  },
  {
    id: 3,
    name: "Saree",
    category: "women",
    image: w2,
    new_price: 70.0,
    old_price: 120.0,
    description: "Ethnic Motifs Printed Saree",
  },
  {
    id: 4,
    name: "Jacket",
    category: "men",
    image: m2,
    new_price: 90.0,
    old_price: 140.0,
    description: "Men Fit Varsity Jacket",
  },
  {
    id: 5,
    name: "T-Shirt",
    category: "men",
    image: m3,
    new_price: 40.0,
    old_price: 70.0,
    description: "Men Soft Pure Cotton Round Neck Half Sleeve Tshirt",
  },
  {
    id: 6,
    name: "Lehenga",
    category: "women",
    image: w3,
    new_price: 85.0,
    old_price: 130.0,
    description: "Women Embroidered Sequinned Lehenga & Blouse",
  },
  {
    id: 7,
    name: "Hoodie",
    category: "men",
    image: m4,
    new_price: 90.0,
    old_price: 150.0,
    description: "Men  Regular Fit Hooded Sweatshirt",
  },
  {
    id: 8,
    name: "Leggings",
    category: "women",
    image: w4,
    new_price: 45.0,
    old_price: 100.0,
    description: "Women  Solid Ankle-Length Leggings",
  },
  {
    id: 9,
    name: "Shirt",
    category: "men",
    image: m5,
    new_price: 45.0,
    old_price: 85.0,
    description: "Pure Cotton Casual Shirt",
  },
  {
    id: 10,
    name: "Jumpsuit",
    category: "women",
    image: w5,
    new_price: 80.0,
    old_price: 135.0,
    description: "Women Waist Tie-Ups Jumpsuit with Belt",
  },
  {
    id: 11,
    name: "Sweater",
    category: "men",
    image: m6,
    new_price: 90.0,
    old_price: 145.0,
    description: "Men Neck Pullover Sweaters",
  },
  {
    id: 12,
    name: "Gown",
    category: "women",
    image: w6,
    new_price: 85.0,
    old_price: 150.0,
    description: "Women Solid Mandarin A-Line Maxi Dress",
  },
  {
    id: 13,
    name: "Shorts",
    category: "men",
    image: m7,
    new_price: 30.0,
    old_price: 45.0,
    description: "Men Ultra-Light Casual Lounge Short",
  },
  {
    id: 14,
    name: "Top",
    category: "women",
    image: w7,
    new_price: 30.0,
    old_price: 60.0,
    description: "Print Puff Sleeve Cinched Waist Top",
  },
  {
    id: 15,
    name: "Kurta",
    category: "men",
    image: m8,
    new_price: 50.0,
    old_price: 75.0,
    description: " Printed Band Collar Sequinned Straight Kurta",
  },
  {
    id: 16,
    name: "Skirt",
    category: "women",
    image: w8,
    new_price: 45.0,
    old_price: 85.0,
    description: "Women Straight Skirt",
  },

  {
    id: 17,
    name: "Denim Shirt",
    category: "kid",
    image: k1,
    new_price: 25.0,
    old_price: 60.0,
    description: "Self Design Slim Fit Pure Cotton Casual Shirt",
  },

  {
    id: 18,
    name: "Cargo Pants",
    category: "kid",
    image: k2,
    new_price: 60.0,
    old_price: 90.0,
    description: "Kid Pure Cotton Cargos Trousers",
  },

  {
    id: 19,
    name: "Trousers",
    category: "kid",
    image: k3,
    new_price: 70.5,
    old_price: 120.0,
    description: "Kid Black Trousers",
  },
  {
    id: 20,
    name: "Tank Top",
    category: "kid",
    image: k4,
    new_price: 40.0,
    old_price: 80.0,
    description: "Cotton Tank Top",
  },

  {
    id: 21,
    name: "Formal Pants",
    category: "kid",
    image: k5,
    new_price: 70.0,
    old_price: 140.0,
    description: "Boys Classic Regular Fit Mid-Rise Formal Pants",
  },

  {
    id: 22,
    name: "Leather Jacket",
    category: "kid",
    image: k6,
    new_price: 150.0,
    old_price: 250.0,
    description: "Kid Spread  Solid Leather Jacket",
  },

  {
    id: 23,
    name: "Casual Blazer",
    category: "kid",
    image: k7,
    new_price: 75.0,
    old_price: 90.0,
    description: "Infant Boys Checked Pure Cotton Casual Blazer",
  },

  {
    id: 24,
    name: "Shorts",
    category: "kid",
    image: k8,
    new_price: 25.0,
    old_price: 50.0,
    description: "Kid Cotton Lounge Shorts",
  },
  {
    id: 25,
    name: "Shirt",
    category: "men",
    image: shirt,
    new_price: 40.0,
    old_price: 80.5,
    description: "Men Cotton Regular Shorts",
  },

  {
    id: 26,
    name: "Jeans",
    category: "men",
    image: jeans,
    new_price: 60.0,
    old_price: 90.5,
    description: "Men Pure Cotton Relaxed Fit Jeans",
  },
  {
    id: 27,
    name: "Tshirt",
    category: "men",
    image: tshirt,
    new_price: 30.0,
    old_price: 60.0,
    description:
      "Men Typography Printed Round Neck Pure Cotton Oversized T-Shirt",
  },
  {
    id: 28,
    name: "Jacket",
    category: "men",
    image: jacket,
    new_price: 90.0,
    old_price: 140.0,
    description: "Men Spread Collar Denim Jacket",
  },
  {
    id: 29,
    name: "T-Shirt",
    category: "men",
    image: men1,
    new_price: 45.0,
    old_price: 70.0,
    description: "Men White Round Neck Pure Cotton Oversized T-Shirt",
  },
  {
    id: 30,
    name: "Jacket",
    category: "women",
    image: women2,
    new_price: 85.0,
    old_price: 130.0,
    description: "Women Regular Fit Jacket",
  },
  {
    id: 31,
    name: "Hoodie",
    category: "kid",
    image: kid1,
    new_price: 95.0,
    old_price: 150.0,
    description: "Kids Oversized Hoodie",
  },
  {
    id: 32,
    name: "Jeans",
    category: "men",
    image: men2,
    new_price: 60.0,
    old_price: 100.0,
    description: "Men Straight Fit Mid-Rise Light Fade Acid Wash Cotton Jeans",
  },
  {
    id: 33,
    name: "Shirt",
    category: "kid",
    image: kid2,
    new_price: 50.0,
    old_price: 80.0,
    description: "Premium Fit Vertical Vibe Denim Shirt",
  },
  {
    id: 34,
    name: "Jumpsuit",
    category: "women",
    image: women1,
    new_price: 90.0,
    old_price: 135.0,
    description: "Women Pure Cotton Basic Jumpsuit",
  },
  {
    id: 35,
    name: "Sweatshirt",
    category: "men",
    image: men3,
    new_price: 70.0,
    old_price: 145.0,
    description: "Men Crew-Neck Sweatshirt",
  },
  {
    id: 36,
    name: "Gown",
    category: "women",
    image: women3,
    new_price: 99.0,
    old_price: 160.0,
    description: "Drop Dead Gorgeous Cocktail Dress",
  },
];

export default all_product;
