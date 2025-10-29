import React from "react";
import "./NewsCard.css";

function NewsCard({ title, description, link, image }) {
  // Shorten description to ~100 chars
  const shortDesc =
    description && description.length > 100
      ? description.slice(0, 100) + "..."
      : description;

  return (
    <div className="news-card">
      {/* Show image if exists */}
      {image && <img src={image} alt={title} className="news-image" />}

      <div className="news-content">
        <h3 className="news-title">{title}</h3>
        <p className="news-description">{shortDesc}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            Read more →
          </a>
        )}
      </div>
    </div>
  );
}

export default NewsCard;
