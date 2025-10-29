import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import "./NewsGrid.css";

function NewsGrid({ category, searchTerm }) {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/top-headlines",
          {
            params: {
              token: "62182979c82cc77072a8d506252ee13c",
              lang: "en",
              min:10,
              topic: category !== "All" ? category.toLowerCase() : undefined,
              q: searchTerm || undefined,
            },
          }
        );
        setNewsData(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, searchTerm]); 

  if (loading) return <p style={{ textAlign: "center" }}>Loading news...</p>;

  return (
    <div className="news-grid">
      {newsData.length > 0 ? (
        newsData.map((news, index) => (
          <NewsCard
            key={index}
            image={news.image || "https://via.placeholder.com/300x180"}
            title={news.title}
            description={news.description || "No description available."}
            link={news.url}
          />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>No news found.</p>
      )}
    </div>
  );
}

export default NewsGrid;
