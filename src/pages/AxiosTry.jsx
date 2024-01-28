import React from 'react';
import { useSearchParams } from 'react-router-dom';

const FIRST_API_URL = '';
const SECOND_APIURL = '';
const KEY_FROM_PIXABAY = '33320710-0e89af02cb8a4d27c83fdc5a5';

const AxiosTry = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    const value = searchParams.get('sQuery') ?? '';
    console.log(value);
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
