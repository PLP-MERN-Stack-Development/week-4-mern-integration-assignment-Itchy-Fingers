import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';
import BlogsPage from './pages/blogs';
import CategoriesPage from './pages/categories';
import DashboardPage from './pages/Dashboard';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import PostDetails from './pages/post'; // Single post page
import Navbar from './components/navBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/post/:postId" element={<PostDetails />} />
          </Routes>
        </main>
    <Footer />
      </div>
    </Router>
  );
}

export default App;
