import React, { useState } from "react";

import "./header.css"; 
export default function Header({ labels }) {
  const [searchQuery, setSearchQuery] = useState("");
  var a = 'flex items-center justify-between bg-white h-10 relative  '
  return (
    <>
      <div className=" flex items-center justify-between bg-white h-10 relative px-2 py-2 shadow-md rounded-tl-2xl rounded-tr-2xl">
        
        <div className="flex items-center">
          <img src="download.png" alt="Logo" className="w-8 h-8 mr-2" />
          <h2 className="text-pink-500  text-2xl pr-10 font-bold m-0">Chefity</h2>
        </div>

        
        <div className="search-container flex items-center bg-gray-200 text-black px-5 py-1 rounded-2xl">
          <img src="kinhlup.png" alt="Search Icon" className="w-5 h-5 mr-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What would you like to cook?"
            className="outline-none  border-none bg-transparent text-sm w-40"
          />
        </div>

        
        <div>
          <ul className=" flex m-0 p-0 whitespace-nowrap">
            {labels.map((item, index) => (
              <li key={index} className="nav-item no-underline text-sm cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        
        <div className="gap-4 flex items-center">
          <button className="bg-pink-500 text-white text-xs cursor-pointer h-8 inline-flex items-center justify-center border-none rounded-2xl px-5 py-15 min-w-20">Your Recipe Box</button>
          <img src="people.png" alt="User Avatar" className="avatar w-8 h-8 rounded-full" />
        </div>
      </div>
      <br />
    </>
  );
}