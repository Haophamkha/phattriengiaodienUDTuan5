import React, { useState } from "react";
import styles from "./tailwind";

export default function Header({ labels }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className={styles.header.container}>
        {/* Logo */}
        <div className={styles.header.logoContainer}>
          <img src="download.png" alt="Logo" className={styles.header.logoImage} />
          <h2 className={styles.header.logoText}>Chefity</h2>
        </div>

        {/* Thanh tìm kiếm */}
        <div className={styles.header.searchContainer}>
          <img src="kinhlup.png" alt="Search Icon" className={styles.header.searchIcon} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What would you like to cook?"
            className={styles.header.searchInput}
          />
        </div>

        {/* Menu */}
        <div>
          <ul className={styles.header.navContainer}>
            {labels.map((item, index) => (
              <li key={index} className={styles.header.navItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Nút Avatar*/}
        <div className={styles.header.actionContainer}>
          <button className={styles.header.button}>Your Recipe Box</button>
          <img src="people.png" alt="User Avatar" className={styles.header.avatar} />
        </div>
      </div>
      <br />
    </>
  );
}
