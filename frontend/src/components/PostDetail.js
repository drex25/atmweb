import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import wordpressService from '../services/wordpress';

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await wordpressService.getPost(slug);
        setPost(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar el post');
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="text-center py-10">
      <div className="text-red-500 mb-4">{error}</div>
      <Link to="/" className="text-blue-500 hover:text-blue-600">
        Volver al inicio
      </Link>
    </div>
  );

  if (!post) return (
    <div className="text-center py-10">
      <div className="text-gray-500 mb-4">Post no encontrado</div>
      <Link to="/" className="text-blue-500 hover:text-blue-600">
        Volver al inicio
      </Link>
    </div>
  );

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
        <div className="mb-8">
          <img
            src={post._embedded['wp:featuredmedia'][0].source_url}
            alt={post.title.rendered}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      <header className="mb-8">
        <h1
          className="text-4xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center">
            {post._embedded?.author?.[0]?.avatar_urls?.['48'] && (
              <img
                src={post._embedded.author[0].avatar_urls['48']}
                alt={post._embedded.author[0].name}
                className="w-10 h-10 rounded-full mr-3"
              />
            )}
            <div>
              <div className="font-medium">
                {post._embedded?.author?.[0]?.name || 'Autor'}
              </div>
              <time dateTime={post.date} className="text-sm">
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>
          {post._embedded?.['wp:term']?.[0]?.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </header>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      <div className="mt-12 pt-8 border-t">
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver al inicio
        </Link>
      </div>
    </article>
  );
};

export default PostDetail; 