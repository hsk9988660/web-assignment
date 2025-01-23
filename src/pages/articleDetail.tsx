// src/pages/ArticleDetail.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { articleService } from '../services/articleService';

const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);

  const fetchArticleDetail = async () => {
    const response = await articleService.getArticleDetail(id as string);
    setArticle(response.data);
  };

  useEffect(() => {
    fetchArticleDetail();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-blue-600">{article.title}</h1>
      <p className="mt-4 text-lg text-gray-700">{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
