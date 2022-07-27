import {cx, css} from '@emotion/css';
import {RiShirtLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import {Spacer} from './Spacer';

const DevelopersDropdown = ({title}) => {
  return (
    <div
      className={css`
        max-width: 40rem;
        width: 100%;
        height: 100%;
        p {
          font-weight: bold;
        }
      `}
    >
      <div
        className={css`
          width: 100%;
          .menu {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 1rem;
          }
        `}
      >
        <h2
          className={css`
            width: 100%;
            padding: 1rem 1rem 0;
          `}
        >
          {title}
        </h2>
        <Spacer />
        <div
          className={css`
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 1.5rem;
            padding: 0 1rem 0;
          `}
        >
          <div
            className={cx(css`
              width: 50%;
            `)}
          >
            <div className={cx(css``, `menu`)}>
              <RiShirtLine size={30} />
              <p>something...</p>
            </div>
            <div className={cx(css``, `menu`)}>
              <RiShirtLine size={30} />
              <p>something...</p>
            </div>
            <div className={cx(css``, `menu`)}>
              <RiShirtLine size={30} />
              <p>something...</p>
            </div>
          </div>
          <div
            className={cx(css`
              width: 50%;
            `)}
          >
            <div className={cx(css``, `menu`)}>
              <RiShirtLine size={30} />
              <p>something...</p>
            </div>
            <div className={cx(css``, `menu`)}>
              <RiShirtLine size={30} />
              <p>something...</p>
            </div>
            <div className={cx(css``, `menu`)}>
              <RiShirtLine size={30} />
              <p>something...</p>
            </div>
          </div>
          <div
            className={cx(css`
              width: 50%;
            `)}
          >
            <div className={cx(css``, `menu`)}>
              <RiShirtLine size={30} />
              <p>something...</p>
            </div>
            <div className={cx(css``, `menu`)}>
              <RiShirtLine size={30} />
              <p>something...</p>
            </div>
            <div className={cx(css``, `menu`)}>
              <RiShirtLine size={30} />
              <p>something...</p>
            </div>
          </div>
        </div>
      </div>
      <Spacer />
      <hr
        className={css`
          width: 100%;
        `}
      />
      <div
        className={cx(css`
          width: 100%;
          min-height: 8rem;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 3rem;
        `)}
      >
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <img
            src={`https://picsum.photos/seed/${421}/200/300`}
            alt={``}
            width={120}
          />
          <p>More Read</p>
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <img
            src={`https://picsum.photos/seed/${521}/200/300`}
            alt={``}
            width={120}
          />
          <p>More Read</p>
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <img
            src={`https://picsum.photos/seed/${621}/200/300`}
            alt={``}
            width={120}
            className={css``}
          />
          <p>More Read</p>
        </div>
      </div>
    </div>
  );
};

export {DevelopersDropdown};
