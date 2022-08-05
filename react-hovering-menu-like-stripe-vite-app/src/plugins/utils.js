const convertRemToPixels = ({rem}) => {
  //stackoverflow.com/a/42769683/15972569
  https: return (
    rem * parseFloat(window.getComputedStyle(document.documentElement).fontSize)
  );
};

export {convertRemToPixels};
