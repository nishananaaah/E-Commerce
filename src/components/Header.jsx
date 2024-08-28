import React, { useContext } from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import { contexts } from '../App';

function Header() {
  const {setSearch}=useContext(contexts)
  const navigate=useNavigate()
  return (
    <header className="header sticky top-0 w-full bg-red-300 shadow-md flex items-center justify-between px-8 py-2 ">
      {/* Logo */}
      <h1 className="w-3/12">
        
      </h1>

      <div className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer active font-mono ">
            <NavLink to="home">Home </NavLink>
          </li>
          {/* <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer font-mono">
            <NavLink to="shop">Shop</NavLink>
          </li> */}
         
          <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer font-mono">
            <NavLink to="girl">Girl</NavLink>
          </li>
          <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer font-mono">
            <NavLink to="boy">Boy</NavLink>
          </li>
          <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer font-mono">
            <NavLink to="collections">Collections</NavLink>
          </li>
          <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer font-mono">
            <NavLink to="aboutus">About</NavLink>
          </li>
          <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer font-mono">
            <NavLink to="contact">Contact</NavLink>
          </li>
        
          
        </ul>
      </div>

      {/* Search Bar */}
      <div className="relative w-6/12">
        <input
          type="text"
          placeholder="Search products"
          className="px-4 py-2 w-[35vh] rounded border border-gray-300 focus:outline-none focus:border-pink-500 focus:ring-pink-500 focus:ring-1"
          onChange={(e)=>setSearch(e.target.value)}
          onClick={()=>navigate("/collections")}
        />
        <svg
          className="absolute top-2 right-52 w-5 h-5 text-gray-500"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 2a9 9 0 105.67 16.03l3.66 3.65 1.41-1.41-3.66-3.65A9 9 0 0011 2zm0 2a7 7 0 100 14 7 7 0 000-14z"
          />
        </svg>
      </div>

      {/* Profile */}
      <div className="flex justify-end w-3/12 gap-4">

      <NavLink>
          <img
            className="rounded-full border w-10 hover:border-pink-500 duration-200"
            src="https://www.shutterstock.com/image-vector/shopping-cart-icon-flat-design-600nw-570153007.jpg"
            alt="profile"
          /></NavLink>
       <NavLink to="/register" className="inline-block">
          <img
            className="rounded-full border w-10 hover:border-pink-500 duration-200"
            src="data:image/png;base64,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"
            alt="profile"
          /></NavLink>
          
      </div>
      {/* <div className="flex justify-end w-3/12">
        <a href="" className="inline-block">
          <img
            className="rounded-full border w-10 hover:border-pink-500 duration-200"
            src="https://www.shutterstock.com/image-vector/shopping-cart-icon-flat-design-600nw-570153007.jpg"
            alt="profile"
          /></a>
      </div> */}
    </header>
  );
}

export default Header;
