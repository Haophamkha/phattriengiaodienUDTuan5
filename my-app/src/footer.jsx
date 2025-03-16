import React from "react";
import styles from "./tailwind";

const Footer = () => {
  return (
    <footer className={styles.footer.container}>
      <div className={styles.footer.flexFooter}>
        {/* Bên trái*/}
        <div className={styles.footer.leftSection}>
          <div className={styles.footer.footerSection}>
            <h3>About Us</h3>
            <p>
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className={styles.footer.emailBlock}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.footer.emailInput}
              />
              <button className={styles.footer.sendButton}>Send</button>
            </div>
          </div>

          <div className={styles.footer.footerBottom}>
            <div className={styles.footer.logoContainer}>
              <img
                src="download.png"
                alt="Logo"
                className={styles.footer.logoImage}
              />
              <span className="">Chefify</span>
            </div>
            <p>2023 Chefify Company</p>
            <div className={styles.footer.footerLinks}>
              <a href="#" className={styles.footer.footerLink}>
                Terms of Service
              </a>
              <a href="#" className={styles.footer.footerLink}>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bên phải */}
        <div className={styles.footer.rightSection}>
          <div className={styles.footer.footerSection}>
            <h3 className={styles.footer.footerSectionh3}>Learn More</h3>
            <ul className={styles.footer.footerSectionUl}>
              <li className={styles.footer.footerSectionLi}>Our Cooks</li>
              <li className={styles.footer.footerSectionLi}>
                See Our Features
              </li>
              <li className={styles.footer.footerSectionLi}>FAQ</li>
            </ul>

            <h3 className={styles.footer.footerSectionh3}>Shop</h3>
            <ul className={styles.footer.footerSectionUl}>
              <li className={styles.footer.footerSectionLi}>
                Gift Subscription
              </li>
              <li className={styles.footer.footerSectionLi}>
                Send Us Feedback
              </li>
            </ul>
          </div>

          <div className={styles.footer.footerSection}>
            <h3 className={styles.footer.footerSectionh3}>Recipes</h3>
            <ul className={styles.footer.footerSectionUl}>
              <li className={styles.footer.footerSectionLi}>
                What to Cook This Week
              </li>
              <li className={styles.footer.footerSectionLi}>Pasta</li>
              <li className={styles.footer.footerSectionLi}>Dinner</li>
              <li className={styles.footer.footerSectionLi}>Healthy</li>
              <li className={styles.footer.footerSectionLi}>Vegetarian</li>
              <li className={styles.footer.footerSectionLi}>Vegan</li>
              <li className={styles.footer.footerSectionLi}>Christmas</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
