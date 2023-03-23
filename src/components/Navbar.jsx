import React, { useState } from "react";
import { close, logo, menu } from "@/assets";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="sm:flex hidden gap-10 list-none justify-end items-center">
        {navLinks.map((nav) => (
          <NavLink nav={nav} key={nav.id} />
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="cursor-pointer w-7 object-contain"
          src={toggle ? close : menu}
          onClick={(e) => setToggle((prev) => !prev)}
          alt="menu"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } mx-4 my-2 p-6 bg-black-gradient min-w-[140px] rounded-xl absolute top-20 right-0 sidebar`}
        >
          <ul className="flex flex-col grow gap-4 list-none justify-center items-center">
            {navLinks.map((nav) => (
              <NavLink nav={nav} key={nav.id} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NavLink = ({ nav }) => (
  <li className="font-poppins font-normal text-white cursor-pointer text-base">
    <a href={`#${nav.id}`}>{nav.title}</a>
  </li>
);
