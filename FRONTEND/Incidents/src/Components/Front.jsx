import React, { useState } from "react";
import { Link } from "react-router-dom";
import incidentLogo from "../assets/lo.webp";
import search from "../assets/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import home from "../assets/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import trending from "../assets/trending_up_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import create from "../assets/add_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import notification from "../assets/notifications_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import account from "../assets/account_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import explore from "../assets/explore_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import arrow from "../assets/chevron_right_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import ar from "../assets/keyboard_arrow_up_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import Box from "./Box";


const Front = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-b from-gray-800 to-black flex items-center justify-between p-4">
        <img src={incidentLogo} alt="Incident Logo" className="h-16 w-16" />
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-[500px] h-[35px] rounded-xl bg-amber-50 flex items-center">
            <input
              type="text"
              className="w-full outline-none px-4"
              placeholder="Search INCIDENTS"
            />
            <img src={search} alt="Search" className="h-10 w-10 mr-4" />
          </div>
        </div>
        <div className="flex">
        <Link to="/post">
          <img src={create} alt="Create" className="h-8 w-8 mr-10" />
          </Link>
          <img src={notification} alt="Notifications" className="h-8 w-8 mr-10" />
          <img src={account} alt="Account" className="h-8 w-8 mr-10" />
        </div>
      </nav>

      {/* Main Section */}
      <main className="bg-gradient-to-b from-gray-800 to-black h-screen flex">
        {/* Sidebar */}
        <aside className="bg-gray-900 text-white w-64 h-screen p-4 flex flex-col">
          <nav className="flex flex-col space-y-4">
            <Link to="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <img src={home} alt="Home" className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <img src={explore} alt="Explore" className="h-5 w-5" />
              <span>Explore</span>
            </Link>
            <Link to="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <img src={trending} alt="Trending" className="h-5 w-5" />
              <span>Trending</span>
            </Link>
          </nav>

          <div className="border-t border-gray-600 mt-7"></div>

          {/* Dropdown for Rooms */}
          <div 
            className="mt-9 pl-4 relative hover:border rounded-lg shadow-lg flex items-center cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img src={dropdownOpen ? ar : arrow} className="h-8 w-8" />
            <div className="text-white ml-2">Rooms</div>

            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-1 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                <Link to="/rooms/horror" className="block px-4 py-2 hover:bg-gray-700">Horror</Link>
                <Link to="/rooms/embarrassing" className="block px-4 py-2 hover:bg-gray-700">Embarrassing</Link>
                <Link to="/rooms/comedy" className="block px-4 py-2 hover:bg-gray-700">Comedy</Link>
                <Link to="/rooms/shock" className="block px-4 py-2 hover:bg-gray-700">Shock</Link>
              </div>
            )}
          </div>

          <div className="mt-auto pt-6 border-t border-gray-700">
            <Link to="#" className="text-gray-400 text-sm hover:text-white">
              About
            </Link>
          </div>
        </aside>
         <div className={`w-full ${props.className}`}>
    <h1>{props.Name}</h1>
    {props.children}
  </div>

        
      </main>
    </>
  );
};

export default Front;
