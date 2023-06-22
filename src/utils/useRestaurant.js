import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurant = (resId) => {
  // call useState to store the api data in res
  const [restaurant, setRestaurant] = useState(null);

  // Api call
  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in res state variable
  }, []);
  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.936136&lng=77.6152166&page_type=DESKTOP_WEB_LISTING

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);

    const json = await data?.json();
    setRestaurant(json?.data);
  }

  //return restaurant data
  return restaurant;
};
export default useRestaurant;
