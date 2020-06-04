

/**
 * @name scrollAnimation
 *
 * @param elem
 * @param el
 *
 * @description
 */
const scrollAnimation = (elem, el) => {

  $(elem).css({
    'animation-name'      : ($(el).data('animation-name')) ? $(el).data('animation-name') + ", fadeIn" : 'slideInUp, fadeIn',
    'animation-delay'     : $(el).data('animation-delay') || '0s',
    'animation-duration'  : $(el).data('animation-duration') || '1s'
  });

};

/**
 * @name initViewPortChecker
 *
 * @param className {String}              - default is `viewport-hide-js`
 * @param classNameToAdd {String}         - default is `viewport-show-js animated`
 * @param offsetVal {Number}              - default is 100
 * @param callbackFunctionName {Object}   - default is `scrollAnimation()`
 *
 * @description Detects if an element is in the viewport and adds a class to it
 *
 * You can to add some attribute:
 * - <div data-vp-add-class="random"></div>                       > classToAdd
 * - <div data-vp-remove-class="random"></div>                    > classToRemove
 * - <div data-vp-remove-after-animation="true|false"></div>      > Removes added classes after CSS3 animation has completed
 * - <div data-vp-offset="[100 OR 10%]"></div>                    > offset
 * - <div data-vp-repeat="true"></div>                            > repeat
 * - <div data-vp-scrollHorizontal="false"></div>                 > scrollHorizontal
 */
const initViewPortChecker = (
  className = "viewport-hide-js",
  classNameToAdd = "viewport-show-js animated",
  offsetVal = 100,
  callbackFunctionName = scrollAnimation
) => {

  $("." + className).not(".full-visible").each(function(idx, el) {

    $(el).viewportChecker({
      classToAdd: classNameToAdd,
      classToAddForFullView: 'full-visible',
      classToRemove : className,
      removeClassAfterAnimation: true,
      offset: offsetVal,
      repeat: false,
      callbackFunction: function(elem, action) {

        callbackFunctionName(elem, el);

      }
    });

  });

};
const initViewportSVG = (
  className = "viewport-svg-js",
  classNameToAdd = "is-viewport",
  offsetVal = 400
) => {

	function isElementInViewport(el) {
		let rect = el.getBoundingClientRect();

		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
	function isElementOutViewport(el) {
		let rect = el.getBoundingClientRect();

		return (
			rect.top <= 0 &&
			rect.left <= 0 &&
			rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right >= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

  $("." + className).not(".full-visible").each(function(idx, el) {
    $(el).viewportChecker({
      classToAdd: classNameToAdd,
      classToAddForFullView: 'full-visible',
      removeClassAfterAnimation: true,
      offset: offsetVal,
      repeat: true,
      callbackFunction: function(elem, action) {

				// var top_of_element = $(elem).offset().top;
				// var bottom_of_element = $(elem).offset().top + $(elem).outerHeight();
				// var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
				// var top_of_screen = $(window).scrollTop();
				//
				// if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
				// 	// the element is visible, do something
				// 	console.log('the element is visible, do something');
				// } else {
				// 	// the element is not visible, do something else
				// 	console.log('the element is not visible, do something else');
				// }

      	// if(isElementInViewport($(elem)[0]) && action === 'add') {
				// 	console.log('in');
				// 	window[$(elem).attr('data-name')].play();
				// // }
      	// if (isElementOutViewport($(elem)[0]) && action === 'remove') {
				// 	console.log('out');
				// 	window[$(elem).attr('data-name')].restart().kill();
				// }
			}
    });
  });

};
