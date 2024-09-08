import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo.png";
// import Button from "../Button";
import NavLinks, { links } from "./NavLinks";
import { Button } from "../ui/button";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="flex items-center font-medium justify-around">
        <div className=" px-5 py-3 md:w-auto w-full flex justify-between">
          <div className="flex items-center md:cursor-pointer">
          <img src={Logo} alt="logo" className=" h-12 mr-4  " />
          <div className=" font-bold text-xl">PMSSS</div>
          </div>
          
          <div
            className="flex items-center md:hidden"
            onClick={() => setOpen(!open)}
          >
            <FaBars name={`${open ? "close" : "menu"}`}></FaBars>
          </div>
        </div>
        <ul className="md:flex hidden  items-center gap-8 ">
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Link to="/signin">
          <Button className=" text-customAccent bg-transparent hover:bg-transparent rounded-none border-customAccent px-6 border-r">
            {" "}
            Sign In{" "}
          </Button>
          </Link>
         
          <Link to='/signup'>
          <Button className="bg-customAccent hover:bg-customAccent rounded-xl px-6 ml-5">
            {" "}
            Sign Up{" "}
          </Button>
          </Link>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white flex flex-col fixed gap-y-5 w-[300px] top-0 shadow-xl overflow-y-auto bottom-0 py-24 px-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          {links.map((link) => {
            return (
              <Link
                className="md:nav-animation text-gray-700  md:gap-y-0 w-full md:w-auto"
                key={link.value}
                to={link.to}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="">
            <Link to="/signin">
              <Button className="border-customAccent border text-customAccent bg-transparent hover:bg-transparent rounded-xl px-6 w-full mb-5">
                {" "}
                Sign In{" "}
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-customAccent rounded-xl px-6 w-full hover:bg-customAccent">
                {" "}
                Sign Up{" "}
              </Button>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
