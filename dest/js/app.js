"use strict";

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

	var btn = document.querySelector("[hamburger-js]"),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	if (btn) {
		btn.addEventListener("click", function (ev) {
			var elem = ev.currentTarget;

			elem.classList.toggle("is-active");
			mobileContainer.classList.toggle("is-open");

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.toggle("is-hideScroll");
			});
		});
	}
};

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

	var countScroll = window.pageYOffset,
	    headerElement = document.getElementById('header');

	if (countScroll > 10) {
		headerElement.classList.add("header--fixed");
	} else {
		headerElement.classList.remove("header--fixed");
	}
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
var initSmoothScroll = function initSmoothScroll() {
	var btnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[anchor-js]";
	var animateSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;


	$(btnName).on("click", function (e) {

		var linkHref = $(e.currentTarget).attr('href'),
		    headerHeight = $(".header").outerHeight() || 0,
		    topHeightOffset = $(linkHref).offset().top - headerHeight;

		$('body, html').animate({
			scrollTop: topHeightOffset
		}, animateSpeed);
	});
};
/**
 * @name scrollAnimation
 *
 * @param elem
 * @param el
 *
 * @description
 */
var scrollAnimation = function scrollAnimation(elem, el) {

	$(elem).css({
		'animation-name': $(el).data('animation-name') ? $(el).data('animation-name') + ", fadeIn" : 'slideInUp, fadeIn',
		'animation-delay': $(el).data('animation-delay') || '0s',
		'animation-duration': $(el).data('animation-duration') || '1s'
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
var initViewPortChecker = function initViewPortChecker() {
	var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "viewport-hide-js";
	var classNameToAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "viewport-show-js animated";
	var offsetVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
	var callbackFunctionName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : scrollAnimation;


	$("." + className).not(".full-visible").each(function (idx, el) {

		$(el).viewportChecker({
			classToAdd: classNameToAdd,
			classToAddForFullView: 'full-visible',
			classToRemove: className,
			removeClassAfterAnimation: true,
			offset: offsetVal,
			repeat: false,
			callbackFunction: function callbackFunction(elem, action) {

				callbackFunctionName(elem, el);
			}
		});
	});
};

var initViewPortPlatformBlockChecker = function initViewPortPlatformBlockChecker() {
	var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "viewport-platform-js";
	var classNameToAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "is-active";
	var offsetVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;


	$("." + className).not(".full-visible").each(function (idx, el) {

		$(el).viewportChecker({
			classToAdd: classNameToAdd,
			classToAddForFullView: 'full-visible',
			classToRemove: className,
			removeClassAfterAnimation: true,
			offset: offsetVal,
			repeat: true,
			callbackFunction: function callbackFunction(elem, action) {
				if (action === 'add') {
					// const parentNode = $(elem).closest('.platform__box-wrapper'),
					// 	currentBlockElem = parentNode.find('.platform__box.is-active'),
					// 	activeCount = $('.platform__box.is-active').length;
					//
					// if(activeCount > 1) {
					// 	for (let i = 0; i < currentBlockElem.length - 1; i++) {
					// 		$(currentBlockElem[i]).removeClass('is-active');
					// 	}
					// }

					$(elem).addClass('is-active');
				}

				if (action === 'remove') $(elem).removeClass('is-active');
			}
		});
	});
};

var initViewPortCountToChecker = function initViewPortCountToChecker() {
	var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "viewport-countTo-js";
	var classNameToAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	var offsetVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;


	$("." + className).not(".full-visible").each(function (idx, el) {

		$(el).viewportChecker({
			classToAdd: classNameToAdd,
			classToAddForFullView: 'full-visible',
			classToRemove: className,
			removeClassAfterAnimation: true,
			offset: offsetVal,
			repeat: false,
			callbackFunction: function callbackFunction(elem, action) {

				$('.number__box-count span').countTo({
					speed: 1500,
					refreshInterval: 30
				});
			}
		});
	});
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {
	initHeaderFixed();
});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {
	initHeaderFixed();
});

/**
 * @description Document DOM ready.
 */

var tlMain = new TimelineMax({ paused: true }),
    tlPlatform1 = new TimelineMax({ paused: true }),
    tlPlatform2 = new TimelineMax({ paused: true }),
    tlPlatform3 = new TimelineMax({ paused: true }),
    tlPlatform4 = new TimelineMax({ paused: true });

(function () {
	/*
 * CALLBACK :: start
 * ============================================= */
	var illustrationAnimation = function illustrationAnimation() {
		$('#main-illustration-svg, ' + '#platform-illustration-1-svg, ' + '#platform-illustration-2-svg, ' + '#platform-illustration-3-svg,' + '#platform-illustration-4-svg').css({ opacity: 1 });

		var mainAnimation = function mainAnimation() {
			var SVGNode = "\n\t\t\t\t#main__box-line > *, #main__box-graph > *, #main__box-point > *,\n\t\t\t\t#main__box-point > *, #main__sidebar-point > *, #main__sidebar-line > *,\n\t\t\t\t#main__content-line-1 > *, #main__content-line-2 > *, #main__content-line-3 > *\n\t\t\t";

			tlMain.set("#main-box--left", { opacity: 0, transformOrigin: 'center' });
			tlMain.set("#main__box-line > *", { transformOrigin: 'left center', scaleX: 0 });
			tlMain.set("#main__box-graph > *", { transformOrigin: 'center bottom', scaleY: '0' });
			tlMain.set("#main__box-point > *, #main__box-point > *", { transformOrigin: 'center', y: 20, scale: '0' });
			tlMain.set("#main__sidebar-point > *", { transformOrigin: 'center', scale: '0' });
			tlMain.set("#main__sidebar-line > *, #main__content-line-1 > *, #main__content-line-2 > *, #main__content-line-3 > *", {
				transformOrigin: 'left center', scaleX: '0'
			});

			tlMain.to($(SVGNode), 0, { opacity: 1, ease: Power0.none }).staggerTo($('#main__box-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }).staggerTo($('#main__box-graph > *'), 0.8, { scaleY: 1, ease: Power2.easeInOut }, 0.1, '-=0.5').staggerTo($('#main__box-point > *'), 0.8, { scale: 1, y: 0, ease: Power2.easeInOut }, 0.1, '-=0.5').staggerTo($('#main__sidebar-point > *'), 0.8, { scale: 1, ease: Power2.easeInOut }, 0.1, '-=1.15').staggerTo($('#main__sidebar-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.1, '-=1.15').staggerTo($('#main__content-line-1 > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.12, '-=1').staggerTo($('#main__content-line-2 > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.11, '-=1').staggerTo($('#main__content-line-3 > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.13, '-=1').to($('#main-box--left'), 1.2, { opacity: 1, ease: Power2.easeInOut }, '-=0.4');
		};

		var platform1Animation = function platform1Animation() {
			var SVGNode = "\n\t\t\t\t#platform-1__sidebar-point > *, #platform-1__sidebar-line > *, #platform-1__graph-3-line > *,\n\t\t\t\t#platform-1__graph-1-line > *, #platform-1__graph-4-line > *, #platform-1__graph-2-line-1 > *,\n\t\t\t\t#platform-1__graph-2-line-2 > *, #platform-1__graph-2-line-3 > *\n\t\t\t";

			tlPlatform1.set("#platform-1__sidebar-point > *", { transformOrigin: 'center', scale: 0 });
			tlPlatform1.set("#platform-1__sidebar-line > *, #platform-1__graph-3-line > *", { transformOrigin: 'left center', scaleX: 0 });
			tlPlatform1.set("#platform-1__graph-1-line > *, #platform-1__graph-4-line > *", { transformOrigin: 'left bottom', scaleY: 0 });
			tlPlatform1.set("#platform-1__graph-2-line-1 > *", { transformOrigin: 'left bottom', scaleX: 0 });
			tlPlatform1.set("#platform-1__graph-2-line-2 > *", { transformOrigin: 'left bottom', scaleX: 0 });
			tlPlatform1.set("#platform-1__graph-2-line-3 > *", { transformOrigin: 'left bottom', scaleX: 0 });

			tlPlatform1.to($(SVGNode), 0, { opacity: 1, ease: Power0.none }).staggerTo($('#platform-1__sidebar-point > *'), 0.8, { scale: 1, ease: Power2.easeInOut }, 0.1).staggerTo($('#platform-1__sidebar-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=0.65').staggerTo($('#platform-1__graph-1-line > *'), 0.8, { scaleY: 1, ease: Power2.easeInOut }, 0.1, '-=0.8').staggerTo($('#platform-1__graph-4-line > *'), 0.8, { scaleY: 1, ease: Power2.easeInOut }, 0.075, '-=0.85').staggerTo($('#platform-1__graph-3-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.1, '-=0.8').staggerTo($('#platform-1__graph-2-line-1 > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.055, '-=0.8').staggerTo($('#platform-1__graph-2-line-2 > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.055, '-=0.8').staggerTo($('#platform-1__graph-2-line-3 > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.055, '-=0.8');
		};

		var platform2Animation = function platform2Animation() {
			var SVGNode = "\n\t\t\t\t#platform-2__sidebar-point > *, #platform-2__sidebar-line > *, #platform-2__table-header > *,\n\t\t\t\t#platform-2__table-option > *, #platform-2__table-text-1 > *, #platform-2__table-text-2 > *,\n\t\t\t\t#platform-2__table-text-3 > *, #platform-2__table-text-4 > *, #platform-2__table-text-5 > *\n\t\t\t";

			tlPlatform2.set("#platform-2__box-1, #platform-2__box-2, #platform-2__box-3", { opacity: 0 });
			tlPlatform2.set("#platform-2__sidebar-point > *", { transformOrigin: 'center', scale: 0 });
			tlPlatform2.set("#platform-2__sidebar-line > *, #platform-2__table-header > *, #platform-2__table-option > *", { transformOrigin: 'left center', scaleX: 0 });
			tlPlatform2.set("#platform-2__table-text-1 > *, #platform-2__table-text-2 > *, #platform-2__table-text-3 > *, #platform-2__table-text-4 > *, #platform-2__table-text-5 > *", {
				transformOrigin: 'left bottom', scaleX: 0
			});

			tlPlatform2.to($(SVGNode), 0, { opacity: 1, ease: Power0.none }).staggerTo($('#platform-2__sidebar-point > *'), 0.8, { scale: 1, ease: Power2.easeInOut }, 0.1).staggerTo($('#platform-2__sidebar-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=0.95').staggerTo($('#platform-2__table-header > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.1, '-=0.95').staggerTo($('#platform-2__table-option > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.1, '-=1').staggerTo($('#platform-2__table-text-1 > *'), 0.7, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=1').staggerTo($('#platform-2__table-text-2 > *'), 0.7, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=1').staggerTo($('#platform-2__table-text-3 > *'), 0.7, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=1').staggerTo($('#platform-2__table-text-4 > *'), 0.7, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=1').staggerTo($('#platform-2__table-text-5 > *'), 0.7, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=1').to($('#platform-2__box-1'), 1.5, { opacity: 1, ease: Power2.easeInOut }, '-=1.5').to($('#platform-2__box-2'), 1.5, { opacity: 1, ease: Power2.easeInOut }, '-=1.25').to($('#platform-2__box-3'), 1.5, { opacity: 1, ease: Power2.easeInOut }, '-=1');
		};

		var platform3Animation = function platform3Animation() {
			var SVGNode = "\n\t\t\t\t#platform-3__sidebar-point > *, #platform-3__sidebar-line > *,\n\t\t\t\t#platform-3__graph-1-action > *, #platform-3__graph-1-line > *\n\t\t\t";

			tlPlatform3.set("#platform-3__sidebar-action > *", { opacity: 0 });
			tlPlatform3.set("#platform-3__sidebar-point > *", { transformOrigin: 'center', scale: 0 });
			tlPlatform3.set("#platform-3__sidebar-line > *", { transformOrigin: 'left center', scaleX: 0 });
			tlPlatform3.set("#platform-3__graph-1-action > *", { transformOrigin: 'left center', scaleX: 0 });
			tlPlatform3.set("#platform-3__graph-1-line > *", { transformOrigin: 'bottom center', scaleY: 0 });
			tlPlatform3.set("#platform-3__graph-2-text, #platform-3__graph-2-point, #platform-3__graph-2-ind", { opacity: 0 });
			tlPlatform3.set("#platform-3__pointer", {
				opacity: 0,
				rotation: 314,
				transformOrigin: "left 100%"
			});

			tlPlatform3.to($(SVGNode), 0, { opacity: 1, ease: Power0.none }).to($('#platform-3__sidebar-action > *'), 1.25, { opacity: 1, ease: Power2.easeInOut }).staggerTo($('#platform-3__sidebar-point > *'), 0.8, { scale: 1, ease: Power2.easeInOut }, 0.1, '-=1').staggerTo($('#platform-3__sidebar-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=0.95').staggerTo($('#platform-3__graph-1-action > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.1, '-=0.95').staggerTo($('#platform-3__graph-1-line > *'), 0.75, { scaleY: 1, ease: Power2.easeInOut }, 0.075, '-=1').to($('#platform-3__graph-2-point, #platform-3__graph-2-ind'), 1, { opacity: 1, ease: Power2.easeInOut }, '-=1').to($('#platform-3__pointer'), 1, { opacity: 1, rotation: 386, ease: Power2.easeInOut }, '-=0.55').to($('#platform-3__graph-2-text'), 1, { opacity: 1, ease: Power2.easeInOut }, '-=0.35');
		};

		var platform4Animation = function platform4Animation() {
			var SVGNode = "\n\t\t\t\t#platform-4__sidebar-point > *, #platform-4__details-point > *, #platform-4__sidebar-line > *,\n\t\t\t\t#platform-4__details-line > *, #platform-4__graph-line > *\n\t\t\t";

			tlPlatform4.set("#platform-4__box-1, #platform-4__box-2", { opacity: 0 });
			tlPlatform4.set("#platform-4__sidebar-point > *, #platform-4__details-point > *", { transformOrigin: 'center', scale: 0 });
			tlPlatform4.set("#platform-4__sidebar-line > *, #platform-4__details-line > *", { transformOrigin: 'left center', scaleX: 0 });
			tlPlatform4.set("#platform-4__graph-line > *", { transformOrigin: 'bottom center', scaleY: 0 });

			tlPlatform4.to($(SVGNode), 0, { opacity: 1, ease: Power0.none }).staggerTo($('#platform-4__sidebar-point > *'), 0.8, { scale: 1, ease: Power2.easeInOut }, 0.1).staggerTo($('#platform-4__sidebar-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=0.95').staggerTo($('#platform-4__details-point > *'), 0.8, { scale: 1, ease: Power2.easeInOut }, 0.1, '-=1').staggerTo($('#platform-4__details-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=1').staggerTo($('#platform-4__graph-line > *'), 0.75, { scaleY: 1, ease: Power2.easeInOut }, 0.075, '-=1').to($('#platform-4__box-1'), 1, { opacity: 1, ease: Power2.easeInOut }, '-=1').to($('#platform-4__box-2'), 1, { opacity: 1, ease: Power2.easeInOut }, '-=0.55');
		};

		var viewportCheckedAnimation = function viewportCheckedAnimation() {
			$.fn.isInViewport = function () {
				var elementTop = $(this).offset().top;
				var elementBottom = elementTop + $(this).outerHeight();

				var viewportTop = $(window).scrollTop();
				var viewportBottom = viewportTop + $(window).height();

				return elementBottom > viewportTop && elementTop < viewportBottom;
			};

			var svgObj = ['#main-illustration-svg', '#platform-illustration-1-svg', '#platform-illustration-2-svg', '#platform-illustration-3-svg', '#platform-illustration-4-svg'];

			for (var i = 0; i < svgObj.length; i++) {
				if ($(svgObj[i]).isInViewport()) {
					window[$(svgObj[i]).attr('data-name')].play();
				} else {
					window[$(svgObj[i]).attr('data-name')].restart().kill();
				}
			}

			$(window).on("resize scroll", function () {
				for (var _i = 0; _i < svgObj.length; _i++) {
					if ($(svgObj[_i]).isInViewport()) {
						window[$(svgObj[_i]).attr('data-name')].play();
					} else {
						window[$(svgObj[_i]).attr('data-name')].restart().kill();
					}
				}
			});
		};

		mainAnimation();
		platform1Animation();
		platform2Animation();
		platform3Animation();
		platform4Animation();
		viewportCheckedAnimation();
	};

	var platformBoxViewportAnimation = function platformBoxViewportAnimation() {
		var controller = new ScrollMagic.Controller();

		var platformBlocks = $('.platform__box');

		var _loop = function _loop(block) {
			scene = new ScrollMagic.Scene({
				triggerElement: block,
				duration: 230,
				offset: -75
			}).on("enter", function () {
				block.classList.add('is-active');
			}).on("leave", function () {
				block.classList.remove('is-active');
			})
			// .addIndicators({name: "2 - change inline style"})
			.addTo(controller);
		};

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = platformBlocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var block = _step.value;
				var scene;

				_loop(block);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	};

	var turnKeyLineAnimation = function turnKeyLineAnimation() {
		function isAnyPartOfElementInViewport(el) {
			var rect = el.getBoundingClientRect();
			var windowHeight = window.innerHeight || document.documentElement.clientHeight;
			var windowWidth = window.innerWidth || document.documentElement.clientWidth;
			var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
			var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

			return vertInView && horInView;
		}

		var elem = $('.turn-key__box-wrapper')[0];

		if (isAnyPartOfElementInViewport(elem)) {
			$(elem).addClass('is-active');
		} else {
			$(elem).removeClass('is-active');
		}

		$(window).on("resize scroll", function () {
			if (isAnyPartOfElementInViewport(elem)) {
				$(elem).addClass('is-active');
			} else {
				$(elem).removeClass('is-active');
			}
		});
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initHamburger();
		initSmoothScroll();
		initViewPortCountToChecker();
		// initViewPortPlatformBlockChecker();
		// ==========================================

		// callback
		illustrationAnimation();
		platformBoxViewportAnimation();
		turnKeyLineAnimation();
		// ==========================================
	};

	$(window).on('load', function (ev) {
		initNative();
	});
})();