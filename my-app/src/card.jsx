import React from "react";

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", 
  gap: "1rem", 
  padding: "1rem",
};

const cardStyle = {
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "10px",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginTop: "0.5rem",
};

const titleStyle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#333",
};

const timeContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "0.5rem",
};

const timeStyle = {
  color: "#ff69b4",
  fontSize: "0.9rem",
};

const bookmarkStyle = {
  width: "24px",
  height: "24px",
  backgroundImage: "url('bookmark.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  
};

export default function Card({ items }) {
  return (
    <div style={gridContainerStyle}>
      {items.map((item, index) => (
        <div key={index} style={cardStyle}>
          <img src={item.url} alt={item.name} style={imageStyle} />
          <div style={contentStyle}>
            <span style={titleStyle}>{item.name}</span>
            <div style={timeContainerStyle}>
              <span style={timeStyle}>{item.time || "N/A"}</span>
              <div style={bookmarkStyle}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
