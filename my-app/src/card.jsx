import React from "react";
import styles from "./tailwind";


export default function Card({ items }) {
  return (
    <div className={styles.card.gridContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.card.card}>
          <img src={item.url} alt={item.name} className={styles.card.image} />
          <div className={styles.card.content}>
            <span className={styles.card.title}>{item.name}</span>
            <div className={styles.card.timeContainer}>
              <span className={styles.card.time}>{item.time || "N/A"}</span>
              <div className={styles.card.bookmark} style={{ backgroundImage: "url('bookmark.png')" }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}