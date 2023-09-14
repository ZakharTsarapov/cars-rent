import axios from 'axios';

axios.defaults.baseURL = 'https://649ade98bf7c145d0239a19c.mockapi.io';

export const getAllCars = async (page) => {
    const { data } = await axios.get('/Advert'); 
    return data;
  };