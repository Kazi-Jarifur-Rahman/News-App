import React from "react";
import "./Header.css";

function Header({ onToggleTheme, isDarkMode }) {
  return (
    <header className={`header ${isDarkMode ? "header-dark" : "header-light"}`}>
      <div className="header-left">
        <h2 className="logo">FeeApp News</h2>
      </div>

      <nav className="header-center">
        <a href="#">Home</a>
        <a href="#">Join Us</a>
        <a href="#">Reach Out</a>
        <a href="#">Customer Care</a>
        <a href="#">About Us</a>
      </nav>

      <div className="header-right">
        <button className="subscribe-btn">Subscribe</button>
        <button className="theme-toggle" onClick={onToggleTheme}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}

export default Header;
/*{isDarkMode ? "☀️" : "🌙"}*/