import React, { useState } from 'react';
import {
  DropdownButton,
  DropdownMenu,
  DropdownWrapper,
} from '../components/Dropdown/Dropdown.styled';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Dropdown = () => {
  const [fruits, setFruits] = useState([
    'apple',
    'orange',
    'strawberry',
    'cherry',
    'kiwi',
  ]);

  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameFruit = searchParams.get('fruit') ?? ''; ///!!!!!!!!!!!!!!!
  //Attention

  const updateQueryString = evt => {
    const nextParams =
      evt.target.value !== '' ? { fruit: evt.target.value } : {};
    setSearchParams(nextParams);
    // setSearchParams({ fruit: evt.target.value });
  };

  const handleClick = e => {
    setVisible(!visible);
  };

  const visibleFruits = fruits.filter(fruit => fruit.includes(nameFruit));

  return (
    <>
      <DropdownWrapper>
        <DropdownButton type="button" onClick={handleClick}>
          {visible ? 'To hidden' : 'To show'}
        </DropdownButton>

        {visible && (
          <DropdownMenu>
            Drop down menu
            <input type="text" value={nameFruit} onChange={updateQueryString} />
            <button type="submit">Button</button>
            {visibleFruits.map(item => (
              <Link to={`${item}`} state={{ from: location }} key={item}>
                <h2>{item}</h2>
              </Link>
            ))}
          </DropdownMenu>
        )}
      </DropdownWrapper>

      {/* <Routes>
          <Route path="/" element={<DropDownList />} />
        </Routes> */}
    </>
  );
};

export default Dropdown;
