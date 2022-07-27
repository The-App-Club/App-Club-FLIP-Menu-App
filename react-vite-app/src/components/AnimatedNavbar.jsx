import {css} from '@emotion/css';
import {useCallback, useMemo, useRef, useState} from 'react';
import {Flipper} from 'react-flip-toolkit';
import {DropdownContainer} from './DropdownContainer';
import NavItem from './NavItem';
import {ProductsDropdown} from './ProductsDropdown';
import {DevelopersDropdown} from './DevelopersDropdown';
import {CompanyDropdown} from './CompanyDropdown';
import {usePrevious} from '../hooks/usePrevious';

const navbarConfig = [
  {title: 'Products', dropdown: ProductsDropdown},
  {title: 'Developers', dropdown: DevelopersDropdown},
  {title: 'Company', dropdown: CompanyDropdown},
];

const AnimatedNavbar = ({duration = 300}) => {
  const animatingOutTimeout = useRef(null);
  const [animatingOut, setAnimatingOut] = useState(true);
  const [activeIndices, setActiveIndices] = useState([]);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  const lastActiveMenuIndex = usePrevious(activeMenuIndex);

  const resetDropdownState = (i) => {
    setAnimatingOut(false);
    setActiveIndices(typeof i === 'number' ? [i] : []);
    if (animatingOutTimeout.current) {
      clearTimeout(animatingOutTimeout.current);
    }
  };

  console.log(lastActiveMenuIndex, activeMenuIndex);

  const handleMouseEnter = useCallback((e, i) => {
    setActiveMenuIndex(i);
    if (animatingOutTimeout.current) {
      clearTimeout(animatingOutTimeout.current);
      resetDropdownState(i);
      return;
    }
    if (activeIndices[activeIndices.length - 1] === i) {
      return;
    }
    setActiveIndices((prevActiveIndices) => {
      return prevActiveIndices.concat(i);
    });
    setAnimatingOut(false);
  }, []);

  const handleMouseLeave = useCallback((e) => {
    setAnimatingOut(true);
    animatingOutTimeout.current = setTimeout(() => {
      resetDropdownState();
    }, duration);
  }, []);

  const currentIndex = useMemo(() => {
    return activeIndices[activeIndices.length - 1];
  }, [activeIndices]);

  const CurrentDropdown = useMemo(() => {
    if (typeof currentIndex === 'number') {
      return navbarConfig[currentIndex].dropdown;
    }
    return null;
  }, [currentIndex]);

  return (
    <Flipper
      flipKey={currentIndex}
      spring={duration === 300 ? 'noWobble' : {stiffness: 10, damping: 10}}
    >
      <nav
        className={css`
          padding-top: 3rem;
          margin: auto;
        `}
        onMouseLeave={handleMouseLeave}
      >
        <ul
          className={css`
            display: flex;
            justify-content: center;
            list-style: none;
            margin: 0;
            gap: 1rem;
          `}
        >
          {navbarConfig.map((item, index) => {
            return (
              <NavItem
                key={index}
                title={item.title}
                index={index}
                handleMouseEnter={handleMouseEnter}
                handleFocus={handleMouseEnter}
              >
                {currentIndex === index && (
                  <DropdownContainer
                    animatingOut={animatingOut}
                    duration={duration}
                  >
                    {CurrentDropdown && <CurrentDropdown />}
                  </DropdownContainer>
                )}
              </NavItem>
            );
          })}
        </ul>
      </nav>
    </Flipper>
  );
};

export {AnimatedNavbar};
