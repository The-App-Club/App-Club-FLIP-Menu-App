import {css, keyframes} from '@emotion/css';

const createKeyframe = ({animatingOut, mode}) => {
  if (mode === `fadeIn`) {
    return keyframes`
      from {
        transform: rotateX(-15deg);
        opacity: 0;
      }
      to {
        transform: rotateX(0);
        opacity: 1;
      }
    `;
  } else if (mode === `fadeOut` || mode === `stay`) {
    return keyframes`
      from {
        transform: rotateX(0);
        opacity: 1;
      }
      to {
        transform: rotateX(-15deg);
        opacity: 0;
      }
    `;
  } else {
    return null;
  }
};

const DropdownRoot = ({animatingOut, duration, mode, children}) => {
  return (
    <div
      className={css`
        width: 100%;
        transform-origin: top left;
        will-change: transform;
        animation-name: ${createKeyframe({animatingOut, mode})};
        animation-duration: ${duration}ms;
        animation-fill-mode: both;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
      `}
    >
      {children}
    </div>
  );
};

export {DropdownRoot};
