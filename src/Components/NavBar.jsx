import React, { useState } from 'react';
import logo from '../assets/NavBar/Logo1.png';
import Name from '../assets/NavBar/QQS Text 1.png';
import menu from '../assets/NavBar/menu.png'
import search from '../assets/NavBar/search.png'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-16 bg-[#124559] flex items-center justify-between px-4 md:px-8">
      {/* Logo */}
      <a href="/" className="h-full w-fit flex items-center">
        <img src={logo} className="h-full w-auto mx-2 " alt="Logo" />
        <img src={Name} className="hidden h-full w-auto mx-2 xl:block" alt="Name" />
      </a>

      <div className='border rounded-full px-5 py-1 mx-2 md:mx-5 w-full md:w-1/3 text-zinc-900 
                      flex bg-slate-50 align-middle'>
        <input type="text" placeholder="Search..." className="w-full bg-transparent outline-none"/>
        <img src={search} alt="" className='h-5 w-auto'/>
      </div>

      <ul className="hidden md:flex gap-5 md:gap-10 items-center cursor-pointer mx-2 md:mx-10">
        <li className=' hover:border hover:text-[#EABE7C] px-4 py-2 rounded-md hover:shadow-xl'>Home</li>
        <li className=' hover:border hover:text-[#EABE7C] px-4 py-2 rounded-md hover:shadow-xl'>Categories</li>
        <li className=' hover:border hover:text-[#EABE7C] px-4 py-2 rounded-md hover:shadow-xl'>Account</li>
        <li className=' hover:border hover:text-[#EABE7C] px-4 py-2 rounded-md hover:shadow-xl'>Login</li>
      </ul>

      <div className="block md:hidden">
        <button className="align-middle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={menu} className='h-7 w-auto ' />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#124559] flex flex-col items-center">
          <a href="/" className="w-full py-2 hover:text-[#EABE7C] hover:border hover:bg-[#113b4c] text-center">Home</a>
          <a href="/" className="w-full py-2 hover:text-[#EABE7C] hover:border hover:bg-[#113b4c] text-center">Categories</a>
          <a href="/" className="w-full py-2 hover:text-[#EABE7C] hover:border hover:bg-[#113b4c] text-center">Account</a>
          <a href="/" className="w-full py-2 hover:text-[#EABE7C] hover:border hover:bg-[#113b4c] text-center">Login</a>
        </div>
      )}
    </div>
  );
}

export default NavBar;
