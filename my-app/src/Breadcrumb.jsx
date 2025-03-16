import React from "react";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center text-sm text-black">
      <a href="#" className="hover:underline">
        Home
      </a>
      <span className="mx-1">{">"}</span>
      <span className="text-pink-500 font-medium">Your Recipe Box</span>
    </nav>
  );
};

export default Breadcrumb;
