import React from "react";
import "./info.css";
export default function Info({ info }) {
  return (
    <div id="container">
      <div id="header">
        <h1>{info.name}</h1>
      </div>
      <div id="content">
        <div id="leftC">
          <img src={info.url} alt="" className="img" />
        </div>
        <div id="rightC">
          <p>{info.description}</p>
          <div className="sub-share">
            <p id="pinkChu">{info.countSubscribers} Subscribes</p>
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
