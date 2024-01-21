import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const FeaturedCard = ({image,company,name,price}) => {
  return (
    <>
      <div className="prodcard flex flex-col items-center ">
        <img src={image} className="h-[25vh] w-[25vw] object-contain drop-shadow-xl" />
        <h1 className="font-[Montserrat]">{name}</h1>
        <h2 className="text-[#72748e] ">{company}</h2>
        <h1 className="text-3xl text-[#676eff] font-[Montserrat]">${price}</h1>
        <div className="browse my-2">
          <a href="/">
            <div className="flex items-center gap-2 font-[Montserrat]">
              <FiPlusCircle className="text-[#676eff] text-2xl" />
              <h1 className="uppercase text-white text-l font-bold">
                Add to Cart
              </h1>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
