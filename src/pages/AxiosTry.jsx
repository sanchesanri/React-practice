import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AxiosGet } from '../servicesApi/api';
import axios from 'axios';

const AxiosTry = () => {
  const [resData, setResData] = useState();
  const [queryStr, setQueryStr] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(queryStr);
    try {
      const resQuery = AxiosGet(queryStr)
        .then(res => {
          setResData(res.data.hits);
        })
        .finally(console.log('FINALLY'));
    } catch (error) {
      // throw new Error(console.log(error));
      if (axios.isAxiosError(error)) {
        console.error(error, 'error');
        console.error(error.response?.data, 'data');
      } else if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }, [queryStr]);

  const handleSubmit = e => {
    e.preventDefault();

    const value = searchParams.get('sQuery') ?? '';
    setQueryStr(value);
  };

  const handleInput = e => {
    const nextSearchParam =
      e.target.value !== '' ? { sQuery: e.target.value } : {};

    setSearchParams(nextSearchParam);
  };

  return (
    <div>
      I'm axios
      <form onSubmit={handleSubmit}>
        <label>
          <input name="search" type="text" onChange={handleInput} />
          <button
            style={{
              marginLeft: 3,
              padding: 3,
              borderRadius: 3,
              border: '1px solid red',
            }}
          >
            Find ME))
          </button>
        </label>
      </form>
    </div>
  );
};

export default AxiosTry;
