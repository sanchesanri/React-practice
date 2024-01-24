import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '33320710-0e89af02cb8a4d27c83fdc5a5',
    image_type: 'photo',
  },
});

export async function requestPost(searchName) {
  const params = { q: searchName };

  const { data } = await instance.get('', { params });
  return data;
}

