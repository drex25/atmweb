const config = {
  apiUrl: process.env.REACT_APP_WORDPRESS_API_URL || 'http://localhost:8000/wp-json',
  env: process.env.REACT_APP_ENV || 'development'
};

export default config;
