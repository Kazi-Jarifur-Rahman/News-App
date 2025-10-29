import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryList from "./components/CategoryList";
import NewsGrid from "./components/NewsGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // ✅ Add missing state variables
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "app dark-mode" : "app light-mode"}>
      <Header onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main style={{ padding: "20px" }}>
        <SearchBar onSearch={setSearchTerm} />
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <NewsGrid category={selectedCategory} searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
