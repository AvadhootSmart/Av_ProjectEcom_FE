import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function CartPage() {
  const user = useSelector((state) => state.auth.user);
  // const UserId = user.user._id;
  const Cart = user.user.cart;

  return (
    <>
      <div className="h-screen w-full bg-[#23232f]">
       
      </div>
    </>
  );
}


 {/* {user.user.cart.items.map((product) => (
          <div key={product._id}>
            {console.log(product)}
            <h1>{product.quantity}</h1>
          </div>
        ))}
        {user ? (
          <h1>Total Price = {Cart.totalPrice}</h1>
        ) : (
          <h1>Not Logged IN</h1>
        )} */}

export default CartPage;
