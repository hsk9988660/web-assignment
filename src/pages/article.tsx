// src/pages/ArticlePage.tsx

import React, { useState, useEffect } from 'react';
import { articleService } from '../services/articleService';
import ArticleCard from '../components/Articles/ArticleCard';
import ArticleFilter from '../components/Articles/ArticleFilter';
import SearchBar from '../components/Layout/SearchBar';
import Header from '../components/Layout/Header';

const Article: React.FC = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    date: '',
    category: '',
    source: '',
    author: '',
  });
  const [page, setPage] = useState(1);

  const fetchArticles = async () => {
    const response = await articleService.getArticles({ ...filters, page });
    setArticles(response.data);
  };

  useEffect(() => {
    fetchArticles();
  }, [filters, page]);

  return (
    <div>
    <Header/>
    <div className="p-6">
      {/* Search and Filters */}
      <div className="mb-6">
        <SearchBar value={filters.search} onChange={(e) => setFilters({ ...filters, search: e.target.value })} />
        <ArticleFilter
          filters={filters}
          onFilterChange={(newFilters) => setFilters({ ...filters, ...newFilters })}
        />
      </div>

      {/* Article List */}
      <div className="space-y-4">
        {articles.map((article: any) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="mx-4 text-lg">{page}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default Article;
