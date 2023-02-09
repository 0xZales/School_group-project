import React from "react";
import { MdPersonPin } from "react-icons/md";
import {
  AiOutlineSearch,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { navLinks } from "../../constants/index.js";
const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="w-full  bg-red-700 h-16">
        <ul className="flex justify-between w-full  items-center px-10 h-full">
          <div className="flex gap-5 ">
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Customer</a>
            </li>
          </div>
          <li>
            <a href="">Shop on the go, download our app</a>
          </li>
          <li>
            <a href="" className="flex gap-2 items-center justify-center">
              <MdPersonPin className="w-10 h-10 text-white" />
              Log In
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-28 bg-red-400 flex items-center justify-between p-8">
        <h1 className="text-4xl font-bold">Clovers.</h1>
        <div className="w-[40%] h-10 rounded-xl relative bg-white flex">
          <input
            type="text"
            name="searchBar"
            id="search"
            className="w-[93%] h-full rounded-l-xl p-2 bg-red-400 border-2  focus:outline-none focus:border-white"
            placeholder="Rechercher un produit"
          />
          <AiOutlineSearch className="w-10 h-8  right-0  top-0 text-red-400 my-1 mr-2 " />
        </div>
        <div className="flex gap-3">
          <ImLocation className="w-6 h-6" />
          <AiFillHeart className="w-6 h-6" />
          <AiOutlineShoppingCart className="w-6 h-6" />
          <span className="w-6 h-6 bg-white rounded-full  text-center">
            <p className="text-black ">0</p>
          </span>
        </div>
      </div>
      <div className="w-full h-12 bg-white text-black ">
        <ul className="flex items-center justify-center gap-5 w-full h-full text-lg">
          {navLinks.map((lien) => (
            <li key={lien.id}>
              <a href="">{lien.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
