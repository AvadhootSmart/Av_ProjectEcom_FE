import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FiPlusCircle } from "react-icons/fi";
import FeaturedCard from "./FeaturedCard";
const Featured = ({ featuredCards }) => {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="backTxt absolute top-[45%] overflow-hidden -translate-y-1/2 -translate-x-7 font-[Montserrat] text-[18rem] text-[#72748e] opacity-15 z-0 select-none font-extrabold uppercase tracking-wide">
          <h1>Featured</h1>
        </div>
        <div className="card w-full h-full flex flex-shrink justify-center text-white items-center relative z-10">
          {featuredCards.map((card) => (
            <FeaturedCard key={card._id} card = {card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
