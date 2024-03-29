import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { AddToCart } from "../features/auth/authSlice";

const HeroCard = ({
  category,
  productImg,
  price,
  discountPrice,
  name,
  _id,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state)=> state.auth.cart);

  //If cart mein product already exists then instead of adding it again, just increaseQuantity of it, har baar add karke dont mess up the state management, then later after adding up using timeout or interval, post it to the database as the typical post request
  if (user) {
    var Uid = user.user._id;
  }
  async function addToCart(productid, Uid) {
    if (user) {
      const response = await axios.post(`http://localhost:5000/add-to-cart`, {
        productId: productid,
        userId: Uid,
      });
      const productDets = response.data;
      dispatch(AddToCart(productDets.data.items));
    } else {
      console.log("Not Logged in, Please log in to add items to cart");
    }
  }
  return (
    <>
      <div className="relative h-[85vh] w-full">
        <div className="backText absolute top-[45%] z-0 -translate-x-7 -translate-y-1/2 select-none overflow-hidden font-[Montserrat] text-[18rem] font-extrabold uppercase tracking-wide text-[#72748e] opacity-15">
          <h1>{category}</h1>
        </div>
        <div className="front relative  z-10 flex h-[100%] w-full items-center justify-around font-[Poppins]">
          <div className="Section-L flex h-full max-w-[30%] flex-col justify-evenly">
            <div className="prodName px-20 text-left text-7xl font-bold tracking-wider text-white">
              <h2>
                {category}-{name}
              </h2>
            </div>
            <div className="price flex gap-8 px-20 text-5xl">
              <p className="font-bold text-[#72748e] line-through">${price}</p>
              <p className="font-bold text-[#676eff]">${discountPrice}</p>
            </div>
            <div className="w-fit px-20">
              <button
                onClick={() => addToCart(_id, Uid)}
                className="flex items-center gap-4"
              >
                <div className="text-6xl text-[#676eff]">
                  <CiCirclePlus />
                </div>
                <div className="font-[Montserrat] text-lg uppercase text-white">
                  Add to Cart
                </div>
              </button>
            </div>
          </div>
          <div className="Image h-[90%] w-[45%]">
            <img
              src={productImg}
              alt="ProductImage"
              className="object-cover drop-shadow-[0_40px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
