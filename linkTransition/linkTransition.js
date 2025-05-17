const transitionPh = document.getElementById('transitionPh');

// Duration in seconds (default 0.7s)
const animationDuration = 0.5;

window.linkTransition = function (link, isBackwards = false) {
  document.body.style.animation = `contentSlide${
    isBackwards ? 'Rv' : ''
  } ${animationDuration}s ease forwards`;
  transitionPh.style.animation = `phSlide${
    isBackwards ? 'Rv' : ''
  } ${animationDuration}s ease forwards`;

  setTimeout(() => {
    window.location.href = link;
  }, animationDuration * 1000);
};
