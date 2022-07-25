import {css} from '@emotion/css';

const ProductsDropdown = () => {
  return (
    <div
      className={css`
        width: 25rem;
        height: 100%;
      `}
    >
      <div
        className={css`
          width: 100%;
          min-height: 10rem;
          padding: 1rem;
          background: #fff;
        `}
      >
        <p>ProductsDropdown</p>
        <p>This is something...</p>
        <p>This is something...</p>
        <p>This is something...</p>
      </div>
    </div>
  );
};

export {ProductsDropdown};
