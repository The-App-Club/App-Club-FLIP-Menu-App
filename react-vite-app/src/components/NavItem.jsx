import {css} from '@emotion/css';
import {memo} from 'react';

const NavItem = ({title, index, handleMouseEnter, handleFocus, children}) => {
  return (
    <li
      className={css`
        position: relative;
      `}
      onMouseEnter={(e) => {
        handleMouseEnter(e, index);
      }}
      onFocus={(e) => {
        handleFocus(e, index);
      }}
    >
      <h3
        className={css`
          &:hover {
            cursor: pointer;
          }
        `}
      >
        {title}
      </h3>
      <div
        className={css`
          z-index: 1;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          perspective: 1500px;
        `}
      >
        {children}
      </div>
    </li>
  );
};

export default memo(NavItem);
