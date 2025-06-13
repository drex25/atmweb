import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import wordpressService from '../services/wordpress';
import Pagination from './Pagination';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await wordpressService.getCategories();
        setCategories(data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await wordpressService.getPosts(currentPage, 9, selectedCategory, searchTerm);
        setPosts(data.posts);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (err) {
        console.error('Error completo:', err);
        setError(`Error al cargar los posts: ${err.message}`);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, selectedCategory, searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="text-center py-10">
      <div className="text-red-500 mb-4">{error}</div>
      <div className="text-sm text-gray-600">
        Por favor, verifica que:
        <ul className="list-disc list-inside mt-2">
          <li>WordPress esté corriendo en XAMPP</li>
          <li>La URL de la API sea correcta</li>
          <li>Haya posts publicados en WordPress</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <Link to={`/post/${post.slug}`}>
                <img
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover"
                />
              </Link>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  to={`/post/${post.slug}`}
                  className="text-gray-900 hover:text-blue-600"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </h2>
              <div className="text-gray-600 text-sm mb-4">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                {' • '}
                {post._embedded?.author?.[0]?.name || 'Autor'}
              </div>
              <div
                className="text-gray-600 mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <Link
                to={`/post/${post.slug}`}
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Leer más →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PostList; 