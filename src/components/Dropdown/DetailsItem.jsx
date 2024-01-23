import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsItem = () => {
  const params = useParams();
  console.log(params);
  return <div>Details </div>;
};

export default DetailsItem;
