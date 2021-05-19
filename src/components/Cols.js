import React, { useState, useRef, useEffect } from 'react';
import './Cols.scss';

const table = [...Array(10)];

/**
 * item
 */
const ItemList = React.memo((props: Object) => {
  const { content } = props || {};
  return <li className="cpt__item">{content}</li>;
});

/**
 *
 */
function Tabs() {
  const [start, setStart] = useState(0);
  const [itemNumber, setItemNumber] = useState(3);
  const startRef = useRef(null);
  const itemRef = useRef(null);
  const cptRef = useRef(null);

  /**
   * update cpt
   */
  const updateCpt = () => {
    if (startRef.current.value) {
      setStart(startRef.current.value);
    }

    if (itemRef.current.value) {
      setItemNumber(itemRef.current.value);
    }
  };
  /**
   * do stuff
   */
  const initCpt = () => {
    const items = Array.from(cptRef.current.querySelectorAll('.cpt__item'));
    const currentItems = items.slice(start, parseFloat(start) + parseFloat(itemNumber));

    items.forEach(item => {
      if (currentItems.includes(item)) {
        item.classList.add('cpt__item--current');
      } else {
        item.classList.remove('cpt__item--current');
      }
    });
  };

  useEffect(() => {
    initCpt();
  });
  return (
    <div className="cols">
      <ul className="cpt__list" ref={cptRef}>
        {table.map((x, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ItemList key={i} content={i} />
        ))}
      </ul>
      <p>
        <span>start: </span>
        <input
          type="number"
          id="start"
          min="0"
          max="15"
          ref={startRef}
          defaultValue={start}
          onChange={() => updateCpt()}
        />
      </p>
      <p>
        <span>item number: </span>
        <input
          type="number"
          id="item"
          min="1"
          max="10"
          ref={itemRef}
          defaultValue={itemNumber}
          onChange={() => updateCpt()}
        />
      </p>
    </div>
  );
}

export default Tabs;
