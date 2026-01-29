import React from "react";
import Header from "./components/Header";
import Footer from './components/Footer'
import heroImage from "./assets/hero.png";
import tshirt1 from "./assets/tiger.png";
import tshirt2 from "./assets/adventure.png";
import tshirt3 from "./assets/remote.png";
import tshirt4 from "./assets/van.png";
import tshirt5 from "./assets/yellow.png";
import profile1 from "./assets/user1.jpg";
import profile2 from "./assets/user2.jpg";
import profile3 from "./assets/user3.jpg";
import { FaStar } from "react-icons/fa";

const App = () => {
  const tshirts = [
    {
      image: tshirt2,
      name: "Mountain Adventure Tee",
      reviews: 5,
      price: "$18.99",
    },
    {
      image: tshirt3,
      name: "Gamer Retro Tee",
      reviews: 4,
      price: "$18.99",
    },
    {
      image: tshirt4,
      name: "Sunflower Smile Tee",
      reviews: 5,
      price: "$21.99",
    },
    {
      image: tshirt5,
      name: "Green Van Tee",
      reviews: 5,
      price: "$24.99",
    },
  ];

  const testimonials = [
    {
      name: "Sarah L",
      picture: profile1,
      ratings: 5,
      feedback: "Amazing t-shirts! Great quality and the fit is perfect.",
    },
    {
      name: "Jason T",
      picture: profile2,
      ratings: 5,
      feedback: "Love the designs and fast shipping. Will order again!",
    },
    {
      name: "Katie M",
      picture: profile3,
      ratings: 5,
      feedback: "Excellent quality and designs. Highly Recommend!",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col gap-10 md:mt-0 mt-20">
        {/* HERO SECTION */}
        <div className="p-4 w-full flex flex-row justify-around gap-10 items-center bg-[#fff6ea] flex-wrap">
          <div className="flex flex-col gap-10 w-100">
            <h2 className="text-[48px]">Shop Awesome T-Shirts</h2>
            <span className="text-[18px] font-medium">High-quality, unique designs at affordable prices</span>
            <button className="p-2 rounded shadow-sm bg-[#ffead0] w-50 self-center hover:shadow-lg duration-200 hover:scale-103 transition-all cursor-pointer">
              View Our Collection
            </button>
          </div>
          <img src={heroImage} className="lg:h-118.75 sm:h-90 md:h-110" />
        </div>
        {/* PRODUCTS SECTION */}
        <div className="flex flex-col items-center gap-10 p-6">
          <h2 className="text-[36px]">Featured Products</h2>
          <div className="flex flex-row gap-10 items-center justify-center flex-wrap">
            {tshirts.map((tshirt, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 border-gray-200 items-center border-2 rounded-lg shadow-md"
              >
                <div className="bg-[#fff6ea] border-gray-200 border-b-2">
                  <img src={tshirt.image} className="h-80 w-80" />
                </div>
                <div className="flex flex-col p-4 w-auto">
                  <span className="text-[20px] mb-3">{tshirt.name}</span>
                  <span className="text-start">{tshirt.price}</span>
                </div>
                <div className="flex flex-col items-center gap-3 w-full pb-4">
                  <span className="flex flex-row gap-1">
                    {[...Array(tshirt.reviews)].map((review, index) => (
                      <FaStar key={index} color="orange" size={20} />
                    ))}
                  </span>
                  <button className="p-2 rounded bg-[#ffead0] shadow-sm w-50 self-center hover:scale-102 hover:shadow-lg duration-200 cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* TESTIMONIALS SECTION */}
        <div className="flex flex-col items-center gap-10 bg-[#fff6ea] p-6">
          <h2 className="text-[36px] text-center">What our customers say</h2>
          <div className="flex flex-row gap-5 items-center justify-center w-full p-6 flex-wrap">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col gap-3  items-center bg-white rounded-lg shadow-md p-4 w-100"
              >
                <div className="flex flex-row justify-center items-center gap-6">
                  <img
                    src={testimonial.picture}
                    className="h-30 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="text-[20px] mb-3">{testimonial.name}</span>
                    <span className="flex flex-row gap-1">
                      {[...Array(testimonial.ratings)].map((review, index) => (
                        <FaStar key={index} color="orange" size={20} />
                      ))}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 w-full pb-4">
                  <span>{testimonial.feedback}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
         {/* SUBSCRIBE SECTION */}
         <div className="p-2 pflex flex-col items-center gap-10">
          <h2 className="text-[36px] text-center">Subscribe for Updates</h2>
          <div className="flex flex-col gap-5 items-center justify-center w-full p-6 flex-wrap">
            <span className="text-center">Subcribe for receiving latest collection news, promotions and special offers.</span>
            <div className="flex flex-row gap-3 flex-wrap justify-center">
              <input
                className="p-2 w-[300px] border-gray-300 border-2 rounded-lg focus:outline-0 focus:border-gray-500"
                type="text"
                placeholder="Your Name"
              />
              <input
              className="p-2 w-[300px] border-gray-300 border-2 rounded-lg focus:outline-0 focus:border-gray-500"
                type="email"
                placeholder="Your Email"
              />
              <button type="button" className="bg-[#ffead0] p-2 shadow-sm rounded-lg transition-all hover:scale-102 hover:shadow-lg duration-200 cursor-pointer">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default App;
