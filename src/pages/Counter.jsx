import { useEffect, useState } from 'react';
import {
  ControlButton,
  ControlsWrapper,
  CounterWrapper,
  SpanCounter,
} from '../components/Counter/Counter.styled';
import { useLocation, useSearchParams } from 'react-router-dom';
import { requestPost } from '../components/serviceApi';
import Pictures from '../components/Counter/Pictures';

const Counter = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const [searchValue, setSearchValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('sQuery');

  useEffect(() => {
    if (query === null) return;
    setIsLoading(true);
    const responseQuery = async () => {
      try {
        const { hits } = await requestPost(query);
        setSearchValue(hits);
      } catch (error) {
        throw new Error(console.log(error));
      } finally {
        setIsLoading(false);
      }
    };

    responseQuery();
  }, [query]);

  const location = useLocation();
  console.log(location);

  const handleSubmit = e => {
    e.preventDefault();

    const nextSearchParam =
      e.target.elements.searchInput.value !== ''
        ? { sQuery: e.target.elements.searchInput.value }
        : {};
    // setSearchValue(e.target.elements.searchInput.value);
    setSearchParams(nextSearchParam);
  };

  const handleClick = e => {
    switch (e.target.name) {
      case 'increment':
        setValue(prevState => prevState - 1);
        break;
      case 'decrement':
        setValue(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <CounterWrapper>
        <SpanCounter>{value}</SpanCounter>

        <ControlsWrapper>
          <ControlButton type="button" name="increment" onClick={handleClick}>
            Change on -1
          </ControlButton>
          <ControlButton type="button" name="decrement" onClick={handleClick}>
            Change on +1
          </ControlButton>
        </ControlsWrapper>
      </CounterWrapper>
      <div>
        <form onSubmit={handleSubmit}>
          <p>search photo</p>
          <input type="text" name="searchInput" defaultValue={query} />
          <button type="submit">Button</button>
        </form>
      </div>
      {isLoading && <p>Loading...</p>}
      {searchValue.length > 0 && <Pictures pictures={searchValue} />}
    </>
  );
};

export default Counter;
