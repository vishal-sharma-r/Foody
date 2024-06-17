import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";
import Cart from "./Cart";
import { IMG_CDN_URL } from "../constants";



const CartPage = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const handleClearCart = () => {
        dispatch(clearCart());
};

return (
    <div className="flex h-screen justify-center  bg-slate-50">
      {!cartItems.length ? (
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            className="w-96"
            src={
              IMG_CDN_URL+"/2xempty_cart_yfxml0"
            }
            alt="empty cart"
          />
          
          <span className="font-fira-code">Your Cart Is Empty!!</span>

          <div className="">
            <Link to="/">
              <button className="font-fira-code rounded-sm bg-slate-900 p-2 text-white mt-2">
                See Restaurants Near You
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <Cart />
      )}
    </div>
  );
};

export default CartPage;