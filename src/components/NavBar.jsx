import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm p-2 px-10 sticky top-0 z-10"> 
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='font-semibold text-[16px]'><a href="">Products</a></li>
        <li className='font-semibold text-[16px]'><a href="">Features</a></li>
        <li className='font-semibold text-[16px]'><a href="">Pricing</a></li>
        <li className='font-semibold text-[16px]'><a href="">Testimonials</a></li>
        <li className='font-semibold text-[16px]'><a href="">FAQ</a></li>
      </ul>
    </div>
    <a className="text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li className='text-[16px] font-semibold'><a href="">Products</a></li>
        <li className='text-[16px] font-semibold'><a href="">Features</a></li>
        <li className='text-[16px] font-semibold'><a href="">Pricing</a></li>
        <li className='text-[16px] font-semibold'><a href="">Testimonials</a></li>
        <li className='text-[16px] font-semibold'><a href="">FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className='btn bg-white border-none font-semibold text-[16px]'><IoCartOutline></IoCartOutline></a>
    <a className="btn bg-white border-none font-semibold text-[16px]">Login</a>
    <a className="font-semibold text-[16px] btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">Get Started</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;