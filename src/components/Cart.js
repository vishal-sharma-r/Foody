// import { useSelector,useDispatch } from "react-redux";
// import FoodItem from "./FoodItem";
// import { clearCart } from "../utils/cartSlice";
// const Cart = () => {
//   //useSelector to read the data from store i.e subscribing to cart items
//   const cartItems = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();
//   const handleClearCart = ()=>{
//     dispatch(clearCart());
//   }
//   return (
//     <div>
//       <h1 className="font-bold text-3xl"> Cart Items -{cartItems.length}</h1>
//       <button
//         className="bg-green-200 p-2 m-5"
//         onClick={() => handleClearCart()}
//       >
//         Delte Cart
//       </button>
//       <div className="flex flex-wrap">
//         {cartItems.map((item) => (
//           <FoodItem key={item.id} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Cart;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../constants";
import { addItem, clearCart, decreamentItem } from "../utils/cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();


  const handleAddFoodItem = (item) =>{
    dispatch(addItem(item));
  }

  const handleDecFoodItem = (item) => {
    dispatch(decreamentItem(item));
  }

  const handleClearCart = () =>{
    dispatch(clearCart());
  };

  const url = useLocation();

  const getItemCount = (item) => {
    const currentItem = cartItems.find((cartItem) => cartItem.id === item.id);
    return currentItem ? currentItem.quantity : 0;
  };

  const getTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item?.price * getItemCount(item);
    });
    return total;
  };

  return (
    <div
      className={` ${
        0 && !cartItems.length && "hidden"
      } w-fit h-fit m-8 p-8 bg-white shadow-md font-poppins text-sm flex flex-col`}
    >
      <div className="flex justify-between mb-5 border-b-2 ">
        <div className="flex w-full pb-2 justify-between items-center">
          <span className="font-bold text-2xl"> Cart Items: </span>
          <button className=" font-poppins bg-slate-900 px-2 py-1 text-white cursor-pointer"
          onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div className="border-b-2">
        {cartItems.map((item) => {
          return (
            <div
              key={item?.id}
              className="pl-2 pb-2 flex justify-between items-center gap-1 my-2 "
            >
              <img
                className="w-48"
                src={IMG_CDN_URL + item?.imageId}
                alt="Dish Image"
                onError={(event) => (event.target.style.display = "block")}
              />
              <div className="px-2 w-60 text-lg">{item?.name}</div>
              <div className="flex justify-between font-poppins w-20 h-7 border bg-slate-50 text-black py-[2px] px-2">
                <button onClick={() => handleDecFoodItem(item)}>
                  -
                </button>
                <span>{getItemCount(item)}</span>
                <button onClick={() => handleAddFoodItem(item)}>
                  +
                </button>
              </div>
              <div className="w-14 font-medium text-lg flex justify-center">
                <span>&#8377;{(item?.price + 0.0) / 100}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between pt-2 font-bold">
        <span className=" text-lg" >Total</span>
        <span className=" text-lg" >&#8377;{ getTotal() / 100 }</span>
      </div>
      {url.pathname !== "/checkout" && (
        <Link to={"/checkout"}>
          <button className="font-poppins bg-slate-900 mt-4 p-2 text-white w-full">
            Checkout
          </button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
