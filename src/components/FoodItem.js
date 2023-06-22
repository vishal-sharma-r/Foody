import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
const FoodItem = (x) => {
  const dispatch = useDispatch();

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="flex flex-col overflow-hidden m-3 p-3 w-72  rounded-sm hover:shadow-xl duration-300 font-poppins bg-white shadow-sm">
      <img
        className="w-full border rounded-sm"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
          x?.card?.info?.imageId
        }
        alt={x?.card?.info?.name}
      ></img>
      <span className="block font-bold text-lg mt-3 ">
        {x?.card?.info?.name}
      </span>
      <span className="mt-3 text-gray-600">
        {x?.card?.info?.cuisines?.join(", ")}
      </span>
      <span
        className="w-12 text-center mt-3 border rounded-md text-white"
        style={
          x?.card?.info?.ratings?.aggregatedRating?.rating >= 4
            ? { backgroundColor: "#48c479" }
            : x?.card?.info?.ratings?.aggregatedRating?.rating >= 3
            ? { backgroundColor: "#DB7C38" }
            : x?.card?.info?.ratings?.aggregatedRating?.rating === "--"
            ? { backgroundColor: "#48c479" }
            : { backgroundColor: "#E31837" }
        }
      >
        {x?.card?.info?.ratings?.aggregatedRating?.rating} &#9733;
      </span>
      <div className="flex gap-20  mt-5 ">
        <span className="font-medium">
          ₹ {x?.card?.info?.price / 10 >= 0 ? x?.card?.info?.price / 100 :x?.card?.info?.defaultPrice/100
}
        </span>
        <button
          className="p-2  bg-green-100 "
          onClick={() => removeFoodItem(x)}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
