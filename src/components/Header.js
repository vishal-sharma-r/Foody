import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import store from "../utils/store";
import logo from "../Assets/Img/logo.png";
import { BsCart4 } from "react-icons/bs";

export const Title = () => {
  return (
    <a href="/">
      <img
        alt="foody-logo"
        data-testid="logo"
        className="w-24 p-2 rounded-full drop-shadow-md"
        src={logo}
      ></img>
    </a>
  );
};

const Header = () => {
  const [isLoginedIn, setIsLoginedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="shadow-lg flex justify-between items-center relative ">
      <div className="flex items-center">
        <Title />
      </div>
      <div>
        <ul className="flex list-none pr-14 font-poppins">
          <Link to="/">
            <li className="p-3 mr-10 hover:bg-yellow-500 rounded-3xl">Home</li>
          </Link>
          <Link to="/about">
            <li className="p-3 mr-10  hover:bg-yellow-500 rounded-3xl">About us</li>
          </Link>
          <Link to="/contact">
            <li className="p-3 mr-10  hover:bg-yellow-500 rounded-3xl">Help</li>
          </Link>

          {/* <Link to="/instamart">
            <li className="p-3 mr-10">Instamart</li>
          </Link> */}
          <li className="pt-3 px-3 mr-10  hover:bg-yellow-500 rounded-3xl">
            <Link to="/cart" className="flex gap-1 items-center">
              <BsCart4 className="inline text-2xl text-black opacity-75" />
              <span className=" text-black p-[1px]">
                {cartItems ? (
                  <div data-testid="cart">{cartItems.length}</div>
                ) : (
                  ""
                )}
              </span>
            </Link>
          </li>
          <li className="p-3 mr-10  hover:bg-yellow-500 rounded-3xl">
            {/* <span className="p-10 font-bold text-red-500">{user.name}</span> */}
            {isLoginedIn ? (
              <button className="px-2" onClick={() => setIsLoginedIn(false)}>
                Logout
              </button>
            ) : (
              <button className="px-2" onClick={() => setIsLoginedIn(true)}>
                Login
              </button>
            )}
          </li>
          {/* <h1 data-testid ="online-status">{isOnline ?"🟢":"🔴"}</h1> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
