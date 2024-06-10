// apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://192.168.43.70:3000';

export const addPassenger = (firstName, lastName, phone, email, password) => {
  return axios.post(`${API_BASE_URL}/addPassenger`, { firstName, lastName, phone, email, password });
};

export const getPassenger = (email) => {
  return axios.get(`${API_BASE_URL}/getPassenger`, { params: { email } });
};

export const deletePassenger = (email) => {
  return axios.delete(`${API_BASE_URL}/deletePassenger`, { data: { email } });
};

export const updatePassenger = (firstName, lastName, phone, email) => {
  return axios.put(`${API_BASE_URL}/updatePassenger`, { firstName, lastName, phone, email });
};

export const loginPassenger = (email, password) => {
  return axios.post(`${API_BASE_URL}/loginPassenger`, { email, password });
};

export const addDriver = (firstName, lastName, phone, car_id, email, password) => {
  return axios.post(`${API_BASE_URL}/addDriver`, { firstName, lastName, phone, car_id, email, password });
};

export const getDriver = (email) => {
  return axios.get(`${API_BASE_URL}/getDriver`, { params: { email } });
};

export const deleteDriver = (email) => {
  return axios.delete(`${API_BASE_URL}/deleteDriver`, { data: { email } });
};



export const updateDriver = async (firstName, lastName, phone, car_id, comment, picture, image, location, email) => {
  const formData = new FormData();
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('phone', phone);
  formData.append('car_id', car_id);
  formData.append('comment', comment);
  if (picture) {
    formData.append('picture', {
      uri: picture.uri,
      type: 'image/jpeg',
      name: 'picture.jpg',
    });
  }
  if (image) {
    formData.append('image', {
      uri: image.uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
  }
  formData.append('location', location);
  formData.append('email', email);

  return axios.put(`${API_BASE_URL}/updateDriver`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const loginDriver = (email, password) => {
  return axios.post(`${API_BASE_URL}/loginDriver`, { email, password });
};
//'http://192.168.43.70:3000'
// export const updateDriver = (firstName, lastName, phone, car_id, email) => {
//   return axios.put(`${API_BASE_URL}/updateDriver`, { firstName, lastName, phone, car_id, email });
// };