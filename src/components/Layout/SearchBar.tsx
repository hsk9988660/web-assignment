// src/components/Articles/SearchBar.tsx

import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4 mt-4 w-full sm:w-1/2 lg:w-1/3">
      <input
        type="text"
        placeholder="Search for articles..."
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default SearchBar;
