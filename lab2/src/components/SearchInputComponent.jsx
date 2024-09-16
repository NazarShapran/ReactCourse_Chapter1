import React from "react";

const SearchInputComponent = ({ search, onSearchChange }) => {
  return (
    <input
      style={{
        borderRadius: "5px",
      }}
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search"
    />
  );
};

export default SearchInputComponent;
