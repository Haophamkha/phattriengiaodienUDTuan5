import React, {useState} from "react";
import styles from "./tailwind";
export default function MenuItem({ menuList }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.menuItem.tabsContainer}>
      <ul className={styles.menuItem.nav}>
        {menuList.map((item, index) => (
          <li
            key={index}
            className={`${styles.menuItem.navItem} ${
              index === activeIndex ? styles.menuItem.activeNavItem : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}