import axios from 'axios';
import config from '../config';

const API_URL = config.apiUrl;

// Log para debug....
console.log('API URL:', API_URL);

const wordpressService = {
  // Obtener posts con paginación, categorías y búsqueda
  getPosts: async (page = 1, perPage = 10, category = null, search = '') => {
    try {
      const params = {
        page,
        per_page: perPage,
        _embed: true
      };

      if (category) {
        params.categories = category;
      }

      if (search) {
        params.search = search;
      }

      const response = await axios.get(`${API_URL}/wp/v2/posts`, { params });
      
      return {
        posts: response.data,
        totalPages: parseInt(response.headers['x-wp-totalpages'] || 1)
      };
    } catch (error) {
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        url: error.config?.url
      });
      throw error;
    }
  },

  // Obtener un post específico
  getPost: async (slug) => {
    try {
      const response = await axios.get(`${API_URL}/wp/v2/posts`, {
        params: {
          slug,
          _embed: true
        }
      });
      return response.data[0];
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
  },

  // Obtener páginas
  getPages: async () => {
    try {
      const response = await axios.get(`${API_URL}/wp/v2/pages`, {
        params: {
          _embed: true
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching pages:', error);
      throw error;
    }
  },

  // Obtener menú
  getMenu: async (location = 'primary') => {
    try {
      const response = await axios.get(`${API_URL}/wp/v2/menus/v1/menus/${location}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching menu:', error);
      throw error;
    }
  },

  // Obtener categorías
  getCategories: async () => {
    try {
      const response = await axios.get(`${API_URL}/wp/v2/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }
};

export default wordpressService; 