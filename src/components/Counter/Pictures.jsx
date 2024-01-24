import React from 'react';
import { StyledUl } from './Counter.styled';

const Pictures = ({ pictures }) => {
  return (
    <StyledUl>
      {pictures.map(picture => (
        <li key={picture.id}>
          <img
            style={{ width: 150 }}
            src={picture.previewURL}
            alt={picture.tags}
          />
        </li>
      ))}
    </StyledUl>
  );
};

export default Pictures;
