

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
 
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../constants";
// import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem, decreamentItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=" + resId);
      const json = await response.json();

      // Set restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  const disptach = useDispatch();

  const handleAddFoodItem = (item) => {
    disptach(addItem(item));
  };
  const handleDecFoodItem = (item) => {
    disptach(decreamentItem(item));
  };
 console.log(restaurant)

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="bg-slate-50 w-full">
      <div className="font-poppins flex gap-10 flex-wrap justify-center bg-[#171a29] text-white my-8 p-4 ">
        {/* {console.log(restaurant?.data?.cards[0]?.card?.card?.info?.name)} */}
        <img
          className="w-80 h-52 rounded-lg"
          src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <h2>
          {" "}
          <span className="block font-semibold text-3xl max-sm:mt-5 max-sm:ml-4 max-sm:text-sm font-poppins">
            {restaurant?.name}
          </span>
          <p className=" max-sm:ml-4 opacity-75 max-sm:text-sm font-thin">
            {restaurant?.cuisines?.join(", ")}
          </p>
        </h2>

        <div className="flex  justify-between gap-12 pt-5 font-semibold text-base mt-16">
          <div className="pr-9 border-r-[1px] border-white">
            <h3>{restaurant?.avgRating} stars</h3>
            <br />
            <div className="text-sm font-extralight">
              {restaurant?.totalRatingsString}
            </div>
          </div>
          <div className=" pr-9 border-r-[1px] border-white">
            <div>{restaurant?.sla.slaString}</div>
            <br />
            <div className="text-sm font-extralight"> Delivery Time </div>
          </div>
          <div>
            <div>&#8377; {restaurant?.costForTwo / 100}</div>
            <br />
            <div className="text-sm font-extralight"> Cost for Two </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="bg-white w-2/3 m-auto font-poppins flex p-3 justify-center">
          <h1 >
            <span className="text-2xl pt-4 font-bold">Recommended </span>
            <p className="text-xs font-thin ">{menuItems.length} ITEMS</p>
            <ul>
              {menuItems.map((item) => (
                <div
                  className="flex justify-between m-5 p-5 border-b"
                  key={item?.id}
                >
                  <div className="flex gap-2 flex-col max-w-md pr-5">
                    <li className="font-poppins font-bold max-sm:text-sm">
                      {item.name}
                    </li>
                    <div className="text-sm">
                      {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                        : " "}{" "}
                    </div>
                    <div className="text-[#666666] max-sm:mb-2 text-sm max-sm:text-sm">
                      {item.description}
                    </div>
                  </div>
                  <div className=" w-28 flex flex-col justify-between items-center gap-3">
                    <img
                      className="w-40 h-auto max-sm:max-w-[100px]  max-sm:aspect-auto"
                      src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + item?.imageId}
                      alt={item?.name}
                    />
                    <div className="flex justify-between font-poppins w-20 border bg-slate-50 text-black py-[2px] px-2 cursor-pointer ">
                      <button onClick={() => handleDecFoodItem(item)}>
                        {" "}
                        -{" "}
                      </button>
                      <button onClick={() => handleAddFoodItem(item)}>
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;