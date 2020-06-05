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
		function isElementInViewport(el) {
			var rect = el.getBoundingClientRect();

			return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
		}

		var elem = $('.viewport-platform-js');

		$(window).on("resize scroll load", function () {
			for (var idx = 0; idx < elem.length; idx++) {

				if (isElementInViewport(elem[idx])) {
					$(elem[idx]).addClass('is-active');
				} else {
					$(elem[idx]).removeClass('is-active');
				}
			}
		});
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

		$(window).on("resize scroll load", function () {
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