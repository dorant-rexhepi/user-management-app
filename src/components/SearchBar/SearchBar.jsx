import React from 'react';
import './SearchBar.css';
function SearchBar({ searchTerm, setSearchTerm }) 
{
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search by name or email"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
export default SearchBar;
