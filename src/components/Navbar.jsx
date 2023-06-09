import React, { useEffect, useState } from "react";
import { close, logo, menu, me } from "@/assets";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollTop, setScrollTop] = useState(true);

  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? setScrollTop(true) : setScrollTop(false);
  }, []);

  return (
    <nav
      className={`fixed left-0 sm:px-16 px-6 ${
        scrollTop ? "bg-transparent" : "bg-primary"
      } transition z-[10] w-full py-6 flex justify-between items-center navbar`}
    >
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="sm:flex hidden gap-10 list-none justify-end items-center">
        {navLinks.map((nav) => (
          <NavLink nav={nav} key={nav.id} />
        ))}
        <a href="https://github.com/sinatajikjs">
          <img
            className="w-10 h-10 rounded-full object-cover"
            target="_blank"
            src={me}
            alt="my github"
          />
        </a>
      </ul>
      <div className="sm:hidden flex flex-1 gap-5 justify-end items-center">
        <a href="https://github.com/sinatajikjs">
          <img
            className="w-10 h-10 rounded-full object-cover"
            target="_blank"
            src={me}
            alt="my github"
          />
        </a>
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
  <li className=" font-normal text-white cursor-pointer text-base">
    <a href={`#${nav.id}`}>{nav.title}</a>
  </li>
);
