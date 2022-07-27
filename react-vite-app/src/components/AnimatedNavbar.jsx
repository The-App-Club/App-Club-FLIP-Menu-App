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
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const lastActiveMenuIndex = usePrevious(activeMenuIndex);

  const mode = useMemo(() => {
    if (lastActiveMenuIndex === null && activeMenuIndex === null) {
      return `standby`;
    } else if (lastActiveMenuIndex === null && activeMenuIndex !== null) {
      return `fadeIn`;
    } else if (lastActiveMenuIndex !== null && activeMenuIndex === null) {
      return `fadeOut`;
    } else if (lastActiveMenuIndex === activeMenuIndex) {
      return `stay`;
    } else if (lastActiveMenuIndex < activeMenuIndex) {
      return `right`;
    } else if (lastActiveMenuIndex > activeMenuIndex) {
      return `left`;
    } else {
      // nothing handle mode
      return `stayout`;
    }
  }, [lastActiveMenuIndex, activeMenuIndex]);

  // console.log(mode, lastActiveMenuIndex, activeMenuIndex);

  const handleMouseEnter = useCallback((e, i) => {
    if (animatingOutTimeout.current) {
      clearTimeout(animatingOutTimeout.current);
    }
    setActiveMenuIndex(i);
    setAnimatingOut(false);
  }, []);

  const handleMouseLeave = useCallback((e) => {
    setAnimatingOut(true);
    animatingOutTimeout.current = setTimeout(() => {
      setActiveMenuIndex(null);
      setAnimatingOut(false);
    }, duration);
  }, []);

  const CurrentDropdown = useMemo(() => {
    if (activeMenuIndex !== null) {
      return navbarConfig[activeMenuIndex].dropdown;
    }
    return null;
  }, [activeMenuIndex]);

  return (
    <Flipper
      flipKey={activeMenuIndex}
      spring={duration === 300 ? 'noWobble' : {stiffness: 10, damping: 10}}
      className={css`
        @media (max-width: 768px) {
          display: none;
        }
      `}
    >
      <nav
        className={css`
          padding-top: 1rem;
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
                {activeMenuIndex === index && (
                  <DropdownContainer
                    mode={mode}
                    animatingOut={animatingOut}
                    duration={duration}
                  >
                    {CurrentDropdown && <CurrentDropdown title={item.title} />}
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
