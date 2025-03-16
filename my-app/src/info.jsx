import React from "react";
import styles from "./tailwind";
export default function Info({ info }) {
  return (
    <div className={styles.profile.container}>
      <div className={styles.profile.header}>
        <h1 className={styles.profile.title}>{info.name}</h1>
      </div>
      <div className={styles.profile.content}>
        <div className={styles.profile.leftContent}>
          <img src={info.url} alt="" className={styles.profile.image} />
        </div>
        <div className={styles.profile.rightContent}>
          <p className={styles.profile.rightText}>{info.description}</p>
          <div className={styles.profile.subShare}>
            <p className={styles.profile.pinkText}>{info.countSubscribers} Subscribes</p>
            <button className={styles.profile.button}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
