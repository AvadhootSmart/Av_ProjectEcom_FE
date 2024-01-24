import React from "react";
import { MdExpandMore } from "react-icons/md";

function ProductCard({ productData }) {
  const { _id, name, company, price, discountPrice, productImg } = productData;
  return (
    <>
      <div className="w-full h-[85vh] relative">
        <div className="backText absolute top-[45%] overflow-hidden -translate-y-1/2 -translate-x-7 font-[Montserrat] text-[18rem] text-[#72748e] opacity-15 z-0 select-none font-extrabold uppercase tracking-wide">
          <h1>{company}</h1>
        </div>
        <div className="front font-[Poppins]  z-10 w-full h-[100%] flex justify-around items-center relative">
          <div className="Section-L h-full max-w-[30%] flex flex-col justify-evenly">
            <div className="prodName text-7xl font-bold text-left text-white">
              <h2>{name}</h2>
            </div>
            <div className="price flex gap-8 text-5xl">
              <p className="font-bold line-through text-[#72748e]">${price}</p>
              <p className="font-bold text-[#676eff]">${discountPrice}</p>
            </div>
            <div className="BUY w-[50%] h-10 flex justify-center items-center text-2xl rounded-xl bg-[#676eff]">
              <a href="/" className="mx-4">
                Buy Now
              </a>
            </div>
            <div>
              <a
                href="#Details"
                className="text-8xl text-[#676eff] absolute bottom-1 left-1/2 -translate-x-1/2 "
              >
                <MdExpandMore className="hover:scale-125 transition-all ease-in-out" />
              </a>
            </div>
          </div>

          <div className="Image w-[45%] h-[90%]">
            <img
              src={productImg}
              alt=""
              className="object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
