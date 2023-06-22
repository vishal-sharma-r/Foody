import About from "./About";
import Help from "./Help";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [show, setShow] = useState(false);
  return (
    <footer className=" bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto container md:p-6 p-2 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
            Created By ❤️  <span className="font-bold hover:bg-purple-200 rounded-md">Vishal! </span>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 hover:bg-gray-300 rounded-sm">
              Home
            </a>
          </li>
          <li>
            <a href="About" className="mr-4 hover:underline md:mr-6  hover:bg-gray-300 rounded-sm">
              About
            </a>
          </li>
          <li>
            <a href="Help" className="mr-4 hover:underline md:mr-6 hover:bg-gray-300 rounded-sm">
              FAQ
            </a>
          </li>
          
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
