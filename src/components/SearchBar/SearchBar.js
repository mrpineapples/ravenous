import React, { useState } from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

const SearchBar = props => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return <li
                className={getSortByClass(sortByOptionValue)}
                key={sortByOptionValue}
                onClick={() => handleSortByChange(sortByOptionValue)}>
                {sortByOption}
            </li>
    });
  };

  const getSortByClass = sortByOption => {
    if (sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  };

  const handleSortByChange = sortByOption => {
    setSortBy(sortByOption);
  };

  const handleTermChange = event => {
    setTerm(event.target.value);
  };

  const handleLocationChange = event => {
    setLocation(event.target.value);
  };

  const handleSearch = event => {
    props.searchYelp(term, location, sortBy);
    event.preventDefault();
  };

  const handleKeyPress = event => {
    if(event.key === 'Enter') {
      document.getElementById("enter").click();
    }
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input
              onKeyPress={handleKeyPress}
              onChange={handleTermChange}
              placeholder="Search Businesses" />
        <input
              onKeyPress={handleKeyPress}
              onChange={handleLocationChange}
              placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <span id="enter" onClick={handleSearch}>{props.buttonState}</span>
      </div>
  </div>
  );
};

export default SearchBar;

