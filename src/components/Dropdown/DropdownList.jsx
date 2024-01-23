import { useRef } from 'react';
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';

function DropDownList() {
  const arr = ['1', '2', '3', '4', '5'];

  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  //1. http://localhost:3000/dropdown
  //2. http://localhost:3000/dropdown/apple
  //3.  const backLocationLinkRef = useRef(locationList.state?.from ?? '/dropdown');
  //4. http://localhost:3000/dropdown/apple/details

  //5. backLocationLinkRef don't change, it still http://localhost:3000/dropdown/apple

  const locationList = useLocation();
  const backLocationLinkRef = useRef(locationList.state?.from ?? '/dropdown');

  const nameFruit = searchParams.get('fruit') ?? '';

  const updateQueryString = evt => {
    const nextParams =
      evt.target.value !== '' ? { fruit: evt.target.value } : {};
    setSearchParams(nextParams);
  };

  const visibleFruits = arr.filter(fruit => fruit.includes(nameFruit));

  return (
    <div>
      <Link to={backLocationLinkRef.current} style={{ border: 'solid' }}>
        Back to main
      </Link>
      <br />
      <b>Item DROPDOWN</b>
      <br />
      <input type="text" value={nameFruit} onChange={updateQueryString} />
      <button type="submit">Button</button>
      {visibleFruits.map(item => (
        <Link to="details" key={item}>
          <h2>
            {item}, {params.dropDownList}
          </h2>
          <div
            style={{ width: 120, height: 20, backgroundColor: 'teal' }}
          ></div>
        </Link>
      ))}
    </div>
  );
}

export default DropDownList;
