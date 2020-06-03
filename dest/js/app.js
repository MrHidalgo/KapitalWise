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
(function () {
	/*
 * CALLBACK :: start
 * ============================================= */
	var illustrationAnimation = function illustrationAnimation() {
		var mainAnimation = function mainAnimation() {
			var tl = new TimelineMax({
				// paused: true
			});

			var _svg = $('#main-illustration-svg');

			tl.set(_svg, { opacity: 1, visibility: "visible" });
			tl.set("#main-box--left", { opacity: 0, transformOrigin: 'center' });
			tl.set("#main__box-line > *", { transformOrigin: 'left center', scaleX: 0 });
			tl.set("#main__box-graph > *", { transformOrigin: 'center bottom', scaleY: '0' });
			tl.set("#main__box-point > *, #main__box-point > *", { transformOrigin: 'center', y: 20, scale: '0' });
			tl.set("#main__sidebar-point > *", { transformOrigin: 'center', scale: '0' });
			tl.set("#main__sidebar-line > *, #main__content-line-1 > *, #main__content-line-2 > *, #main__content-line-3 > *", {
				transformOrigin: 'left center', scaleX: '0'
			});

			tl.staggerTo($('#main__box-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }).staggerTo($('#main__box-graph > *'), 0.8, { scaleY: 1, ease: Power2.easeInOut }, 0.1, '-=0.5').staggerTo($('#main__box-point > *'), 0.8, { scale: 1, y: 0, ease: Power2.easeInOut }, 0.1, '-=0.5').staggerTo($('#main__sidebar-point > *'), 0.8, { scale: 1, ease: Power2.easeInOut }, 0.1, '-=1.15').staggerTo($('#main__sidebar-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.1, '-=1.15').staggerTo($('#main__content-line-1 > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.12, '-=1').staggerTo($('#main__content-line-2 > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.11, '-=1').staggerTo($('#main__content-line-3 > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.13, '-=1').to($('#main-box--left'), 1.2, { opacity: 1, ease: Power2.easeInOut }, '-=0.4');
		};

		var platform1Animation = function platform1Animation() {
			var tl = new TimelineMax({
				// paused: true
			});

			var _svg = $('#platform-illustration-1-svg');

			tl.set(_svg, { opacity: 1, visibility: "visible" });
			tl.set("#platform-1__sidebar-point > *", { transformOrigin: 'center', scale: 0 });
			tl.set("#platform-1__sidebar-line > *, #platform-1__graph-3-line > *", { transformOrigin: 'left center', scaleX: 0 });
			tl.set("#platform-1__graph-1-line > *, #platform-1__graph-4-line > *", { transformOrigin: 'left bottom', scaleY: 0 });
			tl.set("#platform-1__graph-2-line-1 > *", { transformOrigin: 'left bottom', scaleX: 0 });
			tl.set("#platform-1__graph-2-line-2 > *", { transformOrigin: 'left bottom', scaleX: 0 });
			tl.set("#platform-1__graph-2-line-3 > *", { transformOrigin: 'left bottom', scaleX: 0 });

			tl.staggerTo($('#platform-1__sidebar-point > *'), 0.8, { scale: 1, ease: Power2.easeInOut }, 0.1).staggerTo($('#platform-1__sidebar-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=0.65').staggerTo($('#platform-1__graph-1-line > *'), 0.8, { scaleY: 1, ease: Power2.easeInOut }, 0.1, '-=0.8').staggerTo($('#platform-1__graph-4-line > *'), 0.8, { scaleY: 1, ease: Power2.easeInOut }, 0.075, '-=0.85').staggerTo($('#platform-1__graph-3-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.1, '-=0.8').staggerTo($('#platform-1__graph-2-line-1 > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.055, '-=0.8').staggerTo($('#platform-1__graph-2-line-2 > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.055, '-=0.8').staggerTo($('#platform-1__graph-2-line-3 > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.055, '-=0.8');
		};

		var platform2Animation = function platform2Animation() {
			var tl = new TimelineMax({
				// paused: true
			});

			var _svg = $('#platform-illustration-2-svg');

			tl.set(_svg, { opacity: 1, visibility: "visible" });
			tl.set("#platform-2__box-1, #platform-2__box-2, #platform-2__box-3", { opacity: 0 });
			tl.set("#platform-2__sidebar-point > *", { transformOrigin: 'center', scale: 0 });
			tl.set("#platform-2__sidebar-line > *, #platform-2__table-header > *, #platform-2__table-option > *", { transformOrigin: 'left center', scaleX: 0 });
			tl.set("#platform-2__table-text-1 > *, #platform-2__table-text-2 > *, #platform-2__table-text-3 > *, #platform-2__table-text-4 > *, #platform-2__table-text-5 > *", {
				transformOrigin: 'left bottom', scaleX: 0
			});

			tl.staggerTo($('#platform-2__sidebar-point > *'), 0.8, { scale: 1, ease: Power2.easeInOut }, 0.1).staggerTo($('#platform-2__sidebar-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=0.95').staggerTo($('#platform-2__table-header > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.1, '-=0.95').staggerTo($('#platform-2__table-option > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.1, '-=1').staggerTo($('#platform-2__table-text-1 > *'), 0.7, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=1').staggerTo($('#platform-2__table-text-2 > *'), 0.7, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=1').staggerTo($('#platform-2__table-text-3 > *'), 0.7, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=1').staggerTo($('#platform-2__table-text-4 > *'), 0.7, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=1').staggerTo($('#platform-2__table-text-5 > *'), 0.7, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=1').to($('#platform-2__box-1'), 1.5, { opacity: 1, ease: Power2.easeInOut }, '-=1.5').to($('#platform-2__box-2'), 1.5, { opacity: 1, ease: Power2.easeInOut }, '-=1.25').to($('#platform-2__box-3'), 1.5, { opacity: 1, ease: Power2.easeInOut }, '-=1');
		};

		var platform3Animation = function platform3Animation() {
			var tl = new TimelineMax({
				// paused: true
			});

			var _svg = $('#platform-illustration-3-svg');

			tl.set(_svg, { opacity: 1, visibility: "visible" });
			tl.set("#platform-3__sidebar-action > *", { opacity: 0 });
			tl.set("#platform-3__sidebar-point > *", { transformOrigin: 'center', scale: 0 });
			tl.set("#platform-3__sidebar-line > *", { transformOrigin: 'left center', scaleX: 0 });
			tl.set("#platform-3__graph-1-action > *", { transformOrigin: 'left center', scaleX: 0 });
			tl.set("#platform-3__graph-1-line > *", { transformOrigin: 'bottom center', scaleY: 0 });
			tl.set("#platform-3__graph-2-text, #platform-3__graph-2-point, #platform-3__graph-2-ind", { opacity: 0 });
			tl.set("#platform-3__pointer", {
				opacity: 0,
				rotation: 314,
				transformOrigin: "left 100%"
			});

			tl.to($('#platform-3__sidebar-action > *'), 1.25, { opacity: 1, ease: Power2.easeInOut }).staggerTo($('#platform-3__sidebar-point > *'), 0.8, { scale: 1, ease: Power2.easeInOut }, 0.1, '-=1').staggerTo($('#platform-3__sidebar-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=0.95').staggerTo($('#platform-3__graph-1-action > *'), 0.75, { scaleX: 1, ease: Power2.easeInOut }, 0.1, '-=0.95').staggerTo($('#platform-3__graph-1-line > *'), 0.75, { scaleY: 1, ease: Power2.easeInOut }, 0.075, '-=1').to($('#platform-3__graph-2-point, #platform-3__graph-2-ind'), 1, { opacity: 1, ease: Power2.easeInOut }, '-=1').to($('#platform-3__pointer'), 1, { opacity: 1, rotation: 386, ease: Power2.easeInOut }, '-=0.55').to($('#platform-3__graph-2-text'), 1, { opacity: 1, ease: Power2.easeInOut }, '-=0.35');
		};

		var platform4Animation = function platform4Animation() {
			var tl = new TimelineMax({
				// paused: true
			});

			var _svg = $('#platform-illustration-4-svg');

			tl.set(_svg, { opacity: 1, visibility: "visible" });
			tl.set("#platform-4__box-1, #platform-4__box-2", { opacity: 0 });
			tl.set("#platform-4__sidebar-point > *, #platform-4__details-point > *", { transformOrigin: 'center', scale: 0 });
			tl.set("#platform-4__sidebar-line > *, #platform-4__details-line > *", { transformOrigin: 'left center', scaleX: 0 });
			tl.set("#platform-4__graph-line > *", { transformOrigin: 'bottom center', scaleY: 0 });

			tl.staggerTo($('#platform-4__sidebar-point > *'), 0.8, { scale: 1, ease: Power2.easeInOut }, 0.1).staggerTo($('#platform-4__sidebar-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=0.95').staggerTo($('#platform-4__details-point > *'), 0.8, { scale: 1, ease: Power2.easeInOut }, 0.1, '-=1').staggerTo($('#platform-4__details-line > *'), 0.8, { scaleX: 1, ease: Power2.easeInOut }, 0.075, '-=1').staggerTo($('#platform-4__graph-line > *'), 0.75, { scaleY: 1, ease: Power2.easeInOut }, 0.075, '-=1').to($('#platform-4__box-1'), 1, { opacity: 1, ease: Power2.easeInOut }, '-=1').to($('#platform-4__box-2'), 1, { opacity: 1, ease: Power2.easeInOut }, '-=0.55');
		};

		mainAnimation();
		platform1Animation();
		platform2Animation();
		platform3Animation();
		platform4Animation();
	};

	var viewportAnimation = function viewportAnimation() {
		AOS.init({
			offset: 150,
			duration: 400,
			easing: 'ease-in-out',
			once: false,
			mirror: false
		});
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
		// initViewPortPlatformChecker();
		// ==========================================

		// callback
		illustrationAnimation();
		viewportAnimation();
		platformBoxViewportAnimation();
		// ==========================================
	};
	initNative();
})();