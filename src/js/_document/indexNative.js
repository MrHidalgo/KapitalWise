/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const illustrationAnimation = () => {
		const mainAnimation = () => {
			const tl = new TimelineMax();

			const _svg = $('#main-illustration-svg');

			tl.set(_svg, {visibility: "visible"});
			tl.set("#main-box--left", {opacity: 0, transformOrigin: 'center'});
			tl.set("#main__box-line > *", {transformOrigin: 'left center', scaleX: 0,});
			tl.set("#main__box-graph > *", {transformOrigin: 'center bottom', scaleY: '0',});
			tl.set("#main__box-point > *", {transformOrigin: 'center', y: 20, scale: '0',});
			tl.set("#main__box-point > *", {transformOrigin: 'center', y: 20, scale: '0',});
			tl.set("#main__sidebar-point > *", {transformOrigin: 'center', scale: '0',});
			tl.set("#main__sidebar-line > *", {transformOrigin: 'left center', scaleX: '0',});
			tl.set("#main__content-line-1 > *", {transformOrigin: 'left center', scaleX: '0',});
			tl.set("#main__content-line-2 > *", {transformOrigin: 'left center', scaleX: '0',});
			tl.set("#main__content-line-3 > *", {transformOrigin: 'left center', scaleX: '0',});

			tl
				.to($('#main-box--left'), 0.4, {opacity: 1, ease: Power1.easeInOut})
				.staggerTo($('#main__box-line > *'), 0.5, {scaleX: 1, ease: Power1.easeInOut}, 0.075, '-=0.2')
				.staggerTo($('#main__box-graph > *'), 0.5, {scaleY: 1, ease: Power1.easeInOut}, 0.075, '-=0.3')
				.staggerTo($('#main__box-point > *'), 0.5, {scale: 1, y: 0, ease: Power1.easeInOut}, 0.075, '-=0.3')
				.staggerTo($('#main__sidebar-point > *'), 0.55, {scale: 1, ease: Power1.easeInOut}, 0.1, '-=1')
				.staggerTo($('#main__sidebar-line > *'), 0.55, {scaleX: 1, ease: Power1.easeInOut}, 0.1, '-=1')
				.staggerTo($('#main__content-line-1 > *'), 0.5, {scaleX: 1, ease: Power1.easeInOut}, 0.075, '-=0.75')
				.staggerTo($('#main__content-line-2 > *'), 0.5, {scaleX: 1, ease: Power1.easeInOut}, 0.075, '-=0.75')
				.staggerTo($('#main__content-line-3 > *'), 0.5, {scaleX: 1, ease: Power1.easeInOut}, 0.075, '-=0.75')
			;
		};

		mainAnimation();
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		// ==========================================

		// callback
		illustrationAnimation();
		// ==========================================
	};
	initNative();
})();
