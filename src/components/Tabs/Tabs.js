import React, { useState, useLayoutEffect, useRef, MouseEvent } from 'react';

import './Tabs.scss';

const data = [
  {
    tab: 'hello',
    content:
      'Hello Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque rerum maxime tempore asperiores vero officiis nam voluptates neque quod aliquam quo vel porro quasi, explicabo laborum harum nemo velit aperiam!Lorem ipsum dolor sit amet, consectetur adipisicing elit.Itaque rerum maxime tempore asperiores vero officiis nam voluptates neque quod aliquam quo vel porro quasi, explicabo laborum harum nemo velit aperiam!',
  },
  {
    tab: 'world',
    content:
      'world officiis nam voluptates neque quod aliquam quo vel porro quasi, explicabo laborum harum nemo velit aperiam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque rerum maxime tempore asperiores vero officiis nam voluptates neque quod aliquam quo vel porro quasi, explicabo laborum harum nemo velit aperiam!',
  },
  {
    tab: 'foo',
    content:
      'foo vero officiis nam voluptates neque quod aliquam quo vel porro quasi, explicabo laborum harum nemo velit aperiam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque rerum maxime tempore asperiores vero officiis nam voluptates neque quod aliquam quo vel porro quasi, explicabo laborum harum nemo velit aperiam!',
  },
  {
    tab: 'bar',
    content:
      'bar harum nemo velit aperiam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque rerum maxime tempore asperiores vero officiis nam voluptates neque quod aliquam quo vel porro quasi, explicabo laborum harum nemo velit aperiam!',
  },
];
/**
 * Tabs
 */
function Tabs() {
  const contentsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(activeTab * 100);
  /**
   *
   */
  const updateScrollPosition = () => {
    const contents = contentsRef.current;
    setScrollPosition(
      (contents.scrollLeft / contents.querySelector('.Tabs__contentItem').offsetWidth) * 100,
    );
    // find current content according to the scroll position
    setActiveTab(Math.round(scrollPosition / 100));
  };
  /**
   *
   */
  const showContent = index => (event: MouseEvent) => {
    event.preventDefault();

    const contents = contentsRef.current;

    setActiveTab(index);
    contents.scrollLeft = contents.offsetWidth * index;
  };

  useLayoutEffect(() => {
    const container = contentsRef.current;
    container.addEventListener('scroll', updateScrollPosition);
    return () => container.removeEventListener('scroll', updateScrollPosition);
  });

  return (
    <>
      <nav className="Tabs">
        <ul>
          {data.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className={`Tabs__item ${activeTab === i ? 'Tabs__item_current' : ''}`} key={i}>
              {i === 0 && (
                <span
                  className="Tabs__line"
                  style={{ transform: `translateX(${scrollPosition}%)` }}
                />
              )}
              <a href={`#tab-${i}`} className="Tabs__link" onClick={showContent(i)}>
                {item.tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="Tabs__content" ref={contentsRef}>
        {data.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="Tabs__contentItem" key={i} id={`tab-${i}`}>
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
}

export default Tabs;
