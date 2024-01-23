import { useEffect, useState } from 'react';
import {
  ControlButton,
  ControlsWrapper,
  CounterWrapper,
  SpanCounter,
} from '../components/Counter/Counter.styled';

export const Counter = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // console.log('useEffect' + Date.now());
    // return () => {
    //     second;
    // };
  });

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
  );
};
