

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', 
});

export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const postResource = async (resourceData) => {
  try {
    const response = await api.post('/resources', resourceData);
    return response.data;
  } catch (error) {
    console.error('Error posting resource:', error);
    throw error;
  }
};

export const fetchResources = async () => {
  try {
    const response = await api.get('/resources'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching resource posts:', error);
    throw error;
  }
};