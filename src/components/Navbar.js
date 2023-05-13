import React from 'react'
import { Link,useLocation } from 'react-router-dom'


const Navbar = () => {
    let location = useLocation();
  return (
    <div>
      <nav className="bg-white  px-2 sm:px-4  dark:bg-gray-900 fixed w-full z-20 top-0 left-0  border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div className="flex flex-row ">
                <img src="./assets/logo 2.png" className="h-5 mr-3 " alt="TinyNotes Logo"/>
                <span className="self-center text-base text-stone-700 font-poppins font-semibold whitespace-nowrap dark:text-white">TinyNotes</span>
            </div>
            <div className="flex md:order-2">
                
                <Link to="/login" class="text-black bg-[#a8d672] hover:bg-lime-300 rounded-sm font-medium  text-xs px-2 py-1 mr-2 mb-2 mt-2 focus:outline-none ">Login</Link>
                <Link to="/signup" class="text-black bg-[#a8d672] hover:bg-lime-300 rounded-sm font-medium text-xs  px-2 py-1 mr-2 mb-2 mt-2 focus:outline-none ">SignUp</Link>

                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    
                    <li>
                        <Link to="/" className={`block  text-base  pl-3 pr-4 ${location.pathname==="/"? "text-[#eb7a53]": "text-black"}   rounded md:bg-transparent md:hover:text-[#eb7a53] md:p-0 dark:text-white`} aria-current="page">Home</Link>
                    </li>

                    <li>
                        <Link to="/about" className={`block text-base  pl-3 pr-4 ${location.pathname==="/about"? "text-[#eb7a53]": "text-black"}  rounded  md:hover:bg-transparent md:hover:text-[#eb7a53] md:p-0 `}>About</Link>
                    </li>
                   
                   
                </ul>
            </div>
            
        </div>
    </nav>
    </div>
  )
}

export default Navbar
