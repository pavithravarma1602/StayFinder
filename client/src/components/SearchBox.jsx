import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (onSearch) {
      onSearch({
        location,
        budget,
      });
    }
  };

  return (
    <form className="search-box" onSubmit={handleSearch}>
      <div className="search-field">
        <label>Location</label>
        <input
          type="text"
          placeholder="Enter city or area"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="search-field">
        <label>Budget</label>
        <input
          type="number"
          placeholder="Monthly budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-primary">
        Search
      </button>
    </form>
  );
}

export default SearchBox;