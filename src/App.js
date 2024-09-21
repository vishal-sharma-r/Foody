import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
// import by name
import { Title } from "./components/Header";
//import by default
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";

import Navbar from "./components/practice";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartPage from "./components/CartPage";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Help from "./components/Help";
import Layout from "./Layout";
/******
* header
    Logo
    Nav bar(List Items)
    Cart
  Body
    search bar
    restro List
      Restro info (card)
        Image
        Name
        Rating
        Cusines(tags)
  Footer
    Links
    Coppyright

****/

// Building a restro card -- hard coded
const RestrauntCard1 = () => {
  return (
    <div className="card">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/s7jtqheebliqyclvxjpg"></img>
      <h2>Burger King</h2>
      <h3>Burgers,American</h3>
      <h4>4.2 stars</h4>
    </div>
  );
};

// on Demand Load
const Instamart = lazy(() => import("./components/InstaMart"));

// Putting body content

// const Body = () => {
//   return(
//   <div className="restaurant-list">
//       {
//         restrautList.map((restaurant )=>{
//           return <RestrauntCard  {...restaurant.data} key={restaurant.data.id}/>
//         })
//       }
//     {/* <RestrauntCard  {...restrautList[0].data}/>
//     <RestrauntCard  {...restrautList[1].data}/>
//     <RestrauntCard  {...restrautList[2].data}/>
//     <RestrauntCard  {...restrautList[3].data}/> */}
//   </div>
//   );
// };

// Having our Footer
// const Footer = () => {
//   return <h3>This is footer</h3>;
// };
// App where all things are wriiten structured
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Vishal Sharma",
    email: "vishal@gmail.com",
  });
  return (
    //  reactFragment Because we doesnot use the multiple parent
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          {/* <Header />
          <Outlet />
          <Footer /> */}
          <Layout/>
        </UserContext.Provider>
      </Provider>
    </>
  );
};

// Routing the path
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/success/:orderId",
        element: <Success />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "Help",
        element: <Help />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      // {
      //   path: "/practice",
      //   element: <Navbar />,
      // },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the container
root.render(<RouterProvider router={appRoute} />);
