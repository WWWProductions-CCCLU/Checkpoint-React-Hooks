// src/components/Filter.js
import React from "react";

const Filter = ({ setTitleFilter, setRatingFilter }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="5"
        placeholder="Filter by rating..."
        onChange={(e) => setRatingFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
