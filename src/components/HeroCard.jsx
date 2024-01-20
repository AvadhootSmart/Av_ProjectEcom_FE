import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
/*Props to be received:
  BackText, HeroProductName, Price, Discount Price, Image
*/
const HeroCard = ({category, image, price, disPrice, prodName}) => {
  return (
    <>
      <div className="w-full h-[85vh] relative ">
        <div className="backText absolute top-[45%] overflow-hidden -translate-y-1/2 -translate-x-7 font-[Montserrat] text-[18rem] text-[#72748e] opacity-15 z-0 select-none font-extrabold uppercase tracking-wide">
          <h1>{category}</h1>
        </div>
        <div className="front font-[Poppins]  z-10 w-full h-[100%] flex justify-around items-center relative">
          <div className="Section-L h-full max-w-[30%] flex flex-col justify-evenly">
            <div className="prodName text-8xl font-bold text-left text-white">
              <h2>{category}-{prodName}</h2>
            </div>
            <div className="price flex gap-8 text-5xl">
              <p className="font-bold line-through text-[#72748e]">${price}</p>
              <p className="font-bold text-[#676eff]">${disPrice}</p>
            </div>
            <div className="ATC w-[50%] h-10 flex justify-center items-center text-2xl rounded-xl bg-[#676eff]">
              <IoIosAddCircleOutline/>
              <a href="/" className="mx-4">Add to cart</a>
            </div>
          </div>
          <div className="Image w-[45%] h-[90%]">
            <img
              src={image}
              alt=""
              className="object-cover scale-110 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
