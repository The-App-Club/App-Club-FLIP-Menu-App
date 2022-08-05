import {css, cx} from '@emotion/css';
import {motion, useAnimationControls} from 'framer-motion';
import {useMemo, useState, useEffect} from 'react';
import {RiHome2Line} from 'react-icons/ri';
import {FaHatCowboySide} from 'react-icons/fa';
import {MdContactMail} from 'react-icons/md';
import {MdFace} from 'react-icons/md';

const Menu = () => {
  const [top, setTop] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentMenuName, setCurrentMenuName] = useState('');
  const controls = useAnimationControls();

  const menuInfoList = useMemo(() => {
    return [
      {
        menuName: `home`,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.`,
        icon: () => {
          return <RiHome2Line size={40} />;
        },
      },
      {
        menuName: `about`,
        description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
        icon: () => {
          return <MdFace size={40} />;
        },
      },
      {
        menuName: `work`,
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`,
        icon: () => {
          return <FaHatCowboySide size={40} />;
        },
      },
      {
        menuName: `contact`,
        description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested..`,
        icon: () => {
          return <MdContactMail size={40} />;
        },
      },
    ];
  }, []);

  useEffect(() => {
    if (currentMenuName) {
      controls.start({opacity: 1, zIndex: -1, y: top});
    } else {
      controls.start({opacity: 0, zIndex: -1, y: top});
    }
  }, [currentMenuName, top]);

  const handleClick = (e, {menuInfo}) => {
    console.log(`menuInfo`, menuInfo);
  };

  return (
    <div
      className={css`
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        border: 1px solid darkgray;
        border-radius: 10px;
        padding: 1rem;
        max-width: 26rem;
        width: 100%;
      `}
    >
      <div
        className={css`
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
        `}
      >
        <motion.h2>{menuInfoList[activeIndex].menuName}</motion.h2>
        <motion.div>{menuInfoList[activeIndex].icon()}</motion.div>
        <motion.p>{menuInfoList[activeIndex].description}</motion.p>
      </div>
      <ul
        className={css`
          position: relative;
          list-style: none;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          /* border: 1px solid; */
          border-radius: 10px;
          padding: 0 0.5rem;
          > li {
            transition: color 250ms ease;
            font-size: 2rem;
            min-height: 4rem;
            font-weight: 400;
            display: flex;
            justify-content: center;
            align-items: center;
            &.active {
              color: rgb(255, 255, 255);
            }
          }
        `}
      >
        <motion.li
          animate={controls}
          className={css`
            position: absolute;
            top: 0;
            opacity: 0;
            z-index: -1;
            border-radius: 10px;
            width: 90%;
            background-color: rgb(79, 101, 241);
            background-image: linear-gradient(
              90deg,
              rgb(111, 137, 251) 0%,
              rgb(97, 109, 245) 33%,
              rgb(92, 82, 235) 100%
            );
          `}
        />
        {menuInfoList.map((menuInfo, index) => {
          return (
            <motion.li
              key={index}
              onHoverStart={(e) => {
                setActiveIndex(index);
                setCurrentMenuName(menuInfo.menuName);
                setTop(e.target.offsetTop);
              }}
              onHoverEnd={(e) => {
                setCurrentMenuName('');
              }}
              onClick={(e) => {
                handleClick(e, {menuInfo});
              }}
              className={cx(
                menuInfo.menuName,
                css`
                  cursor: pointer;
                  padding: 0 0.5rem;
                `,
                `${currentMenuName === menuInfo.menuName ? 'active' : ''}`
              )}
            >
              {menuInfo.menuName}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export {Menu};
