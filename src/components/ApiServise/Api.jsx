import axios from 'axios';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1/';

const getTokenFetch = async () => {
  try {
    const { data } = await axios.get('token');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUsersFetch = async (page = 1) => {
  try {
    const { data } = await axios.get(`users?page=${page}&count=5`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPositionFetch = async () => {
  try {
    const { data } = await axios.get(`positions`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const postUser = async (formData, token) => {
  try {
    const response = await fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users',
      {
        method: 'POST',
        body: formData,
        headers: {
          Token: token,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getTokenFetch, getUsersFetch, getPositionFetch, postUser };
