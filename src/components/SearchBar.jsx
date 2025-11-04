import React from 'react';

export default function SearchBar({searchTerm, setSearchTerm}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter movie name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}