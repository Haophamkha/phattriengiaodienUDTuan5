import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Bên trái*/}
        <div className="footer-left">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className="subscribe">
              <input type="email" placeholder="Enter your email" />
              <button className="btn">Send</button>
            </div>
          </div>

          
          <div className="footer-bottom">
            <div className="footer-logo">
                <img src="download.png" alt="Logo" className="logo" />
              <span className="logo-text">Chefify</span>
            </div>
            <p>2023 Chefify Company</p>
            <div className="footer-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Bên phải */}
        <div className="footer-right">
          <div className="footer-section">
            <h3>Learn More</h3>
            <ul>
              <li>Our Cooks</li>
              <li>See Our Features</li>
              <li>FAQ</li>
            </ul>
            <h3>Shop</h3>
            <ul>
              <li>Gift Subscription</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Recipes</h3>
            <ul>
              <li>What to Cook This Week</li>
              <li>Pasta</li>
              <li>Dinner</li>
              <li>Healthy</li>
              <li>Vegetarian</li>
              <li>Vegan</li>
              <li>Christmas</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
