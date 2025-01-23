// src/components/Articles/ArticleFilter.tsx

import React from 'react';

interface ArticleFilterProps {
  filters: {
    date: string;
    category: string;
    source: string;
    author: string;
  };
  onFilterChange: (newFilters: any) => void;
}

const ArticleFilter: React.FC<ArticleFilterProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="flex space-x-4">
      <select
        value={filters.date}
        onChange={(e) => onFilterChange({ date: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Date</option>
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
        <option value="year">This Year</option>
      </select>

      <select
        value={filters.category}
        onChange={(e) => onFilterChange({ category: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Category</option>
        <option value="tech">Technology</option>
        <option value="health">Health</option>
        <option value="sports">Sports</option>
        <option value="business">Business</option>
      </select>

      <select
        value={filters.source}
        onChange={(e) => onFilterChange({ source: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Source</option>
        <option value="cnn">CNN</option>
        <option value="bbc">BBC</option>
        <option value="nytimes">NY Times</option>
      </select>

      <select
        value={filters.author}
        onChange={(e) => onFilterChange({ author: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Author</option>
        <option value="john">John Doe</option>
        <option value="jane">Jane Smith</option>
      </select>
    </div>
  );
};

export default ArticleFilter;
