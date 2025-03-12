import React, {useState} from "react";
import "./menuItem.css";
export default function MenuItem({ menuList}) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="tabs-container">
      <ul className="nav">
        {menuList.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    );
}