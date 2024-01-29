import axios from 'axios';

const FIRST_API_URL = 'https://pixabay.com/api';
// const SECOND_APIURL = '';
const KEY_FROM_PIXABAY = '33320710-0e89af02cb8a4d27c83fdc5a5';

export const requestAxios = async (page, query, per_page) => {
  const params = {
    q: query,
    per_page,
    page,
  };

  const { data } = await axios.get(
    `https://pixabay.com/api/?key=33320710-0e89af02cb8a4d27c83fdc5a5&image_type=photo&orientation=horizontal`,
    { params }
  );

  return data;
};

const firstPixabayApiAxios = axios.create({
  baseURL: FIRST_API_URL,
  responseType: 'json',
  // timeout: 2000,
  params: {
    key: KEY_FROM_PIXABAY,
    q: '',
    orientation: 'horizontal',
    per_page: '30',
  },
});

export async function AxiosGet(query) {
  const params = {
    q: query,
  };

  const response = await firstPixabayApiAxios.get('', { params });

  return response;
}
