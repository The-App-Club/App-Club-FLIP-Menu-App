import {css, keyframes} from '@emotion/css';

const createKeyframe = ({animatingOut}) => {
  if (!animatingOut) {
    return null;
  }
  return keyframes`
    to {
      transform: translateX(0px);
      opacity: ${animatingOut ? 0 : 1};
    }
  `;
};

const FadeContents = ({children, duration, animatingOut}) => {
  return (
    <div
      className={css`
        transform-origin: top left;
        will-change: transform;
        animation-name: ${createKeyframe({animatingOut})};
        animation-duration: ${duration}ms;
        animation-fill-mode: forwards;
      `}
      // prevent screen readers from reading out hidden content
      aria-hidden={animatingOut}
    >
      {children}
    </div>
  );
};

export {FadeContents};
