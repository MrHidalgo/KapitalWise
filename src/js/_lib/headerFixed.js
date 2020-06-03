

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
const initHeaderFixed = () => {

  let countScroll = window.pageYOffset,
    headerElement = document.getElementById('header');

  if (countScroll > 10) {
    headerElement.classList.add("header--fixed");
  } else {
    headerElement.classList.remove("header--fixed");
  }

};
