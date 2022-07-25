import {css} from '@emotion/css';

const CompanyDropdown = () => {
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
          min-height: 20rem;
          padding: 1rem;
          background: #fff;
        `}
      >
        <p>CompanyDropdown</p>
        <p>This is something...</p>
        <p>This is something...</p>
        <p>This is something...</p>
      </div>
    </div>
  );
};

export {CompanyDropdown};
