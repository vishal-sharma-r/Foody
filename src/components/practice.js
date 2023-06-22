import React, { useState } from "react";

const Navbar = ()=> {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <nav className={isOpen ? "navbar open" : "navbar"}>
      <button onClick={toggleNavbar}>Toggle Navbar</button>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;