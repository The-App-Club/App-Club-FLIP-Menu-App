import {css} from '@emotion/css';
import {useEffect, useRef} from 'react';
import {Flipped} from 'react-flip-toolkit';
import {DropdownRoot} from './DropdownRoot';
import {FadeContents} from './FadeContents';

const DropdownContainer = ({children, animatingOut, duration}) => {
  return (
    <DropdownRoot animatingOut={animatingOut} duration={duration}>
      <Flipped flipId="dropdown">
        <div
          className={css`
            overflow: hidden;
            position: relative;
          `}
        >
          <Flipped inverseFlipId="dropdown">
            <FadeContents animatingOut={animatingOut} duration={duration}>
              {children}
            </FadeContents>
          </Flipped>
        </div>
      </Flipped>
    </DropdownRoot>
  );
};

export {DropdownContainer};
