import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Article from './pages/article';
import ArticleDetail from './pages/articleDetail';
// import Preferences from './pages/Preferences';
// import Search from './pages/Search';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>

        {/* Register Page */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<ArticleDetail/>} /> {/* New Route for Article Detail */}


      </Routes>
    </Router>
  );
};

export default AppRouter;
