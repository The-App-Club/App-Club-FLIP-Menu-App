import {css} from '@emotion/css';
import {useEffect, useRef} from 'react';
import {Flipped} from 'react-flip-toolkit';
import {Caret} from './Caret';
import {DropdownRoot} from './DropdownRoot';
import {FadeContents} from './FadeContents';

const DropdownContainer = ({children, animatingOut, duration}) => {
  return (
    <DropdownRoot animatingOut={animatingOut} duration={duration}>
      <Flipped flipId="dropdown-caret">
        <div
          className={css`
            transform-origin: top left;
            overflow: hidden;
            position: relative;
            will-change: transform;
          `}
        >
          <Caret />
        </div>
      </Flipped>
      <Flipped flipId="dropdown">
        <div
          className={css`
            transform-origin: top left;
            background-color: #fff; // seamless transition background color must
            overflow: hidden;
            position: relative;
            will-change: transform;
            padding: 1rem;
          `}
        >
          <Flipped inverseFlipId="dropdown">
            <div
              // this is inverted div
              className={css`
                position: relative;
                top: 0;
                left: 0;
                &:first-of-type {
                  z-index: 1;
                }
                &:not(:first-of-type) {
                  z-index: -1;
                }
              `}
            >
              <FadeContents animatingOut={animatingOut} duration={duration}>
                {children}
              </FadeContents>
            </div>
          </Flipped>
        </div>
      </Flipped>
    </DropdownRoot>
  );
};

export {DropdownContainer};
