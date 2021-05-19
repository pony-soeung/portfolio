import useInView from 'react-cool-inview';
import './Header.scss';

/**
 *
 */
function Header() {
  const {
    ref,
    inView,
    scrollDirection: { vertical },
  } = useInView({
    // threshold: [0.25, 0.5, 0.75, 1],
    onChange: ({ scrollDirection }) => {
      // We can also access the scroll direction from the event object
      console.log('Scroll direction: ', scrollDirection.vertical);
    },
    onEnter: () => {
      // Triggered when the target is visible and enters the viewport
    },
    onLeave: () => {
      // Triggered when the target is visible and leaves the viewport
    },
  });

  return (
    <>
      <header className="Header" ref={ref}>
        <div className="Header__content">
          <h1 className="Header__title">
            Pony Soeung Web Developer <small>Front ⨯ AEM ⨯ React</small>
          </h1>
          <a href="https://www.linkedin.com/in/pony-soeung-931956/" className="Header__button">
            🖂 <span className="Header__buttonText">Contactez moi</span>
          </a>
          <h1>{`You're scrolling ${vertical === 'up' ? '⬆️' : '⬇️'}`}</h1>
        </div>
      </header>

      <header className={`Header_sticky ${inView ? '' : 'is-show'}`}>
        <div className="Header__logo">Pony Soeung Web Developer</div>
        <button
          onClick={() => {
            window.location = 'https://www.linkedin.com/in/pony-soeung-931956/';
          }}
          className="Header__button"
        >
          🖂 <span className="Header__buttonText">Contactez moi</span>
        </button>
      </header>
    </>
  );
}

export default Header;
