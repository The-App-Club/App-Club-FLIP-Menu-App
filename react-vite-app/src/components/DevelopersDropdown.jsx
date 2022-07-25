import {css} from '@emotion/css';

const DevelopersDropdown = () => {
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
          min-height: 30rem;
          padding: 1rem;
          background: #fff;
        `}
      >
        <p>DevelopersDropdown</p>
        <p>This is something...</p>
        <p>This is something...</p>
        <p>This is something...</p>
      </div>
    </div>
  );
};

export {DevelopersDropdown};
