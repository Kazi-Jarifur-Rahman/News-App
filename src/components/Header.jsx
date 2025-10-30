import React from "react";
import "./Header.css";

function Header({ onToggleTheme, isDarkMode }) {
  return (
    <header className={`header ${isDarkMode ? "header-dark" : "header-light"}`}>
      <div className="header-left">
        <h2 className="logo">FeeApp News</h2>
      </div>

      <nav className="header-center">
        <a href="#" onClick={(e) => e.preventDefault()}>Home</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Join Us</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Reach Out</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Customer Care</a>
        <a href="#" onClick={(e) => e.preventDefault()}>About Us</a>
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