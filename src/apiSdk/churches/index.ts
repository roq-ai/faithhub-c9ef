import axios from 'axios';
import queryString from 'query-string';
import { ChurchInterface, ChurchGetQueryInterface } from 'interfaces/church';
import { GetQueryInterface } from '../../interfaces';

export const getChurches = async (query?: ChurchGetQueryInterface) => {
  const response = await axios.get(`/api/churches${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createChurch = async (church: ChurchInterface) => {
  const response = await axios.post('/api/churches', church);
  return response.data;
};

export const updateChurchById = async (id: string, church: ChurchInterface) => {
  const response = await axios.put(`/api/churches/${id}`, church);
  return response.data;
};

export const getChurchById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/churches/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteChurchById = async (id: string) => {
  const response = await axios.delete(`/api/churches/${id}`);
  return response.data;
};
