export function filterData(searchText, restaurants) {
  console.log(searchText);
  console.log(restaurants);
  // json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  console.log(filterData);
  return filterData;
}
