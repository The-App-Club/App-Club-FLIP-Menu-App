import {css} from '@emotion/css';

const Caret = ({color = `#fff`}) => {
  return (
    <div
      className={css`
        width: 30px;
        height: 30px;
        background-color: ${color};
        clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
        z-index: 1;
        position: relative;
        top: 1px;
      `}
    />
  );
};

export {Caret};
