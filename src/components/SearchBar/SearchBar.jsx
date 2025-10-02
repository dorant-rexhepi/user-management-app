import React from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search by name or email"   /* Input placeholder */
      value={searchTerm}                       /* Controlled input value */
      onChange={(e) => setSearchTerm(e.target.value)} /* Update state on change */
    />
  );
}

export default SearchBar;