import {css} from '@emotion/css';

const Caret = ({color = `#fff`}) => {
  return (
    <div
      className={css`
        width: 0;
        height: 0;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent ${color};
        z-index: 1;
        position: relative;
        top: 1px;
      `}
    />
  );
};

export {Caret};
