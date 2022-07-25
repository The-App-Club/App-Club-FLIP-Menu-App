import {css, keyframes} from '@emotion/css';

const createKeyframe = ({animatingOut}) => {
  if (!animatingOut) {
    return null;
  }
  return keyframes`
    from {
      transform: ${animatingOut ? 'rotateX(0)' : 'rotateX(-15deg)'};
      opacity: ${animatingOut ? 1 : 0};
    }
    to {
      transform: ${animatingOut ? 'rotateX(-15deg)' : 'rotateX(0)'};
      opacity: ${animatingOut ? 0 : 1};
    }
  `;
};

const DropdownRoot = ({animatingOut = false, duration = 300, children}) => {
  return (
    <div
      className={css`
        width: 100%;
        transform-origin: top left;
        will-change: transform;
        animation-name: ${createKeyframe({animatingOut})};
        animation-duration: ${duration}ms;
        /* use 'forwards' to prevent flicker on leave animation */
        animation-fill-mode: forwards;
        /* flex styles will center the caret child component */
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: 20px;
      `}
    >
      {children}
    </div>
  );
};

export {DropdownRoot};
