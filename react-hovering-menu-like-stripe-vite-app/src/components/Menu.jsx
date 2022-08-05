import {css, cx} from '@emotion/css';
import {motion, useAnimationControls} from 'framer-motion';
import {useMemo, useState, useEffect, useRef, createRef} from 'react';
import {RiHome2Line} from 'react-icons/ri';
import {FaHatCowboySide} from 'react-icons/fa';
import {MdContactMail} from 'react-icons/md';
import {MdFace} from 'react-icons/md';

import {convertRemToPixels} from '../plugins/utils';
import {Button} from '@mui/material';

const Menu = () => {
  const contentDomRef = useRef(null);
  const [contentDomWidth, setContentDomWidth] = useState(0);
  const [menuDomWidth, setMenuDomWidth] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [left, setLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentMenuName, setCurrentMenuName] = useState('');
  const controls = useAnimationControls();
  const bgControls = useAnimationControls();

  const menuInfoList = useMemo(() => {
    return [
      {
        menuName: `home`,
        imageURL: new URL(`../assets/Multimedia-55.png`, import.meta.url).href,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.`,
        icon: () => {
          return <RiHome2Line size={24} />;
        },
      },
      {
        menuName: `about`,
        imageURL: new URL(`../assets/Holidays-28.png`, import.meta.url).href,
        description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
        icon: () => {
          return <MdFace size={24} />;
        },
      },
      {
        menuName: `work`,
        imageURL: new URL(`../assets/Holidays-29.png`, import.meta.url).href,
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`,
        icon: () => {
          return <FaHatCowboySide size={24} />;
        },
      },
      {
        menuName: `contact`,
        imageURL: new URL(`../assets/Weather-03.png`, import.meta.url).href,
        description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested..`,
        icon: () => {
          return <MdContactMail size={24} />;
        },
      },
    ];
  }, []);

  const menusDomRef = useMemo(() => {
    return [...Array(menuInfoList.length).keys()].map((n) => {
      return createRef();
    });
  }, [menuInfoList]);

  useEffect(() => {
    setContentDomWidth(contentDomRef.current.offsetWidth);
    if (currentMenuName) {
      controls.start({opacity: 1, x: left});
      bgControls.start({
        opacity: 1,
        x: left,
      });
    } else {
      if (!hovering) {
        controls.start({opacity: 0, x: left});
        bgControls.start({
          opacity: 0,
          x: left,
        });
      }
    }
  }, [currentMenuName, left, hovering]);

  const handleDoMore = (e, {menuInfo}) => {
    console.log('do more', menuInfo);
  };

  return (
    <motion.ul
      className={css`
        position: relative;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        @media (max-width: 768px) {
          display: none;
        }

        li {
          /* border: 1px solid darkgray; */
          min-width: 8rem;
          height: 2rem;
          :hover {
            cursor: pointer;
          }
          h2 {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          &.active {
          }
        }
      `}
    >
      <motion.div
        ref={contentDomRef}
        animate={controls}
        className={css`
          margin-top: 2rem;
          position: absolute;
          top: 0px;
          left: ${-contentDomWidth / 2 +
          menusDomRef[activeIndex].current?.offsetWidth / 2}px;
          min-width: 12rem;
          min-height: 20rem;
          opacity: 0;
          border-radius: 10px;
          width: 100%;
        `}
        onHoverStart={(e) => {
          setHovering(true);
        }}
        onHoverEnd={(e) => {
          setHovering(false);
          setCurrentMenuName('');
        }}
      >
        <div
          className={css`
            width: 100%;
            /* border: 1px solid orange; */
            padding: 1rem;
            > div {
              border: 1px solid darkgray;
              padding: 1rem;
            }
          `}
        >
          <div
            className={css`
              width: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex-direction: column;
              gap: 1rem;
            `}
          >
            <p>{menuInfoList[activeIndex].description}</p>
            <div
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
              `}
            >
              <img
                src={menuInfoList[activeIndex].imageURL}
                alt={menuInfoList[activeIndex].menuName}
                width={80}
              />
              <p>{menuInfoList[activeIndex].description}</p>
            </div>
            <div
              className={css`
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
              `}
            >
              <Button
                variant="outlined"
                onClick={(e) => {
                  handleDoMore(e, {menuInfo: menuInfoList[activeIndex]});
                }}
              >
                Do More
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.li
        animate={bgControls}
        className={css`
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          z-index: -1;
          background: #f3f3f3;
        `}
      />
      {menuInfoList.map((menuInfo, index) => {
        return (
          <motion.li
            key={index}
            ref={menusDomRef[index]}
            onHoverStart={(e) => {
              setActiveIndex(index);
              setCurrentMenuName(menuInfo.menuName);
              setLeft(e.currentTarget.offsetLeft);
            }}
            onHoverEnd={(e) => {
              setCurrentMenuName('');
            }}
            className={cx(
              css`
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                padding: 0 0.5rem;
              `,
              menuInfo.menuName,
              `${currentMenuName === menuInfo.menuName ? 'active' : ''}`
            )}
          >
            <div
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              {menuInfo.icon()}
            </div>
            <h4>{menuInfo.menuName}</h4>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export {Menu};
