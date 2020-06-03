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

			tl.set(_svg, {opacity:1, visibility: "visible"});
			tl.set("#main-box--left", {opacity: 0, transformOrigin: 'center'});
			tl.set("#main__box-line > *", {transformOrigin: 'left center', scaleX: 0,});
			tl.set("#main__box-graph > *", {transformOrigin: 'center bottom', scaleY: '0',});
			tl.set("#main__box-point > *, #main__box-point > *", {transformOrigin: 'center', y: 20, scale: '0',});
			tl.set("#main__sidebar-point > *", {transformOrigin: 'center', scale: '0',});
			tl.set("#main__sidebar-line > *, #main__content-line-1 > *, #main__content-line-2 > *, #main__content-line-3 > *", {
				transformOrigin: 'left center', scaleX: '0'
			});

			tl
				.staggerTo($('#main__box-line > *'), 0.8, {scaleX: 1, ease: Power2.easeInOut})
				.staggerTo($('#main__box-graph > *'), 0.8, {scaleY: 1, ease: Power2.easeInOut}, 0.1, '-=0.5')
				.staggerTo($('#main__box-point > *'), 0.8, {scale: 1, y: 0, ease: Power2.easeInOut}, 0.1, '-=0.5')
				.staggerTo($('#main__sidebar-point > *'), 0.8, {scale: 1, ease: Power2.easeInOut}, 0.1, '-=1.15')
				.staggerTo($('#main__sidebar-line > *'), 0.8, {scaleX: 1, ease: Power2.easeInOut}, 0.1, '-=1.15')
				.staggerTo($('#main__content-line-1 > *'), 0.75, {scaleX: 1, ease: Power2.easeInOut}, 0.12, '-=1')
				.staggerTo($('#main__content-line-2 > *'), 0.75, {scaleX: 1, ease: Power2.easeInOut}, 0.11, '-=1')
				.staggerTo($('#main__content-line-3 > *'), 0.75, {scaleX: 1, ease: Power2.easeInOut}, 0.13, '-=1')
				.to($('#main-box--left'), 1.2, {opacity: 1, ease: Power2.easeInOut}, '-=0.4');
		};

		const platform1Animation = () => {
			const tl = new TimelineMax();

			const _svg = $('#platform-illustration-1-svg');

			tl.set(_svg, {opacity:1, visibility: "visible"});
			tl.set("#platform-1__sidebar-point > *", {transformOrigin: 'center', scale: 0,});
			tl.set("#platform-1__sidebar-line > *, #platform-1__graph-3-line > *", {transformOrigin: 'left center', scaleX: 0});
			tl.set("#platform-1__graph-1-line > *, #platform-1__graph-4-line > *", {transformOrigin: 'left bottom', scaleY: 0});
			tl.set("#platform-1__graph-2-line-1 > *", {transformOrigin: 'left bottom', scaleX: 0});
			tl.set("#platform-1__graph-2-line-2 > *", {transformOrigin: 'left bottom', scaleX: 0});
			tl.set("#platform-1__graph-2-line-3 > *", {transformOrigin: 'left bottom', scaleX: 0});


			tl
				.staggerTo($('#platform-1__sidebar-point > *'), 0.8, {scale: 1, ease: Power2.easeInOut}, 0.1)
				.staggerTo($('#platform-1__sidebar-line > *'), 0.8, {scaleX: 1, ease: Power2.easeInOut}, 0.075, '-=0.65')
				.staggerTo($('#platform-1__graph-1-line > *'), 0.8, {scaleY: 1, ease: Power2.easeInOut}, 0.1, '-=0.8')
				.staggerTo($('#platform-1__graph-4-line > *'), 0.8, {scaleY: 1, ease: Power2.easeInOut}, 0.075, '-=0.85')
				.staggerTo($('#platform-1__graph-3-line > *'), 0.8, {scaleX: 1, ease: Power2.easeInOut}, 0.1, '-=0.8')
				.staggerTo($('#platform-1__graph-2-line-1 > *'), 0.75, {scaleX: 1, ease: Power2.easeInOut}, 0.055, '-=0.8')
				.staggerTo($('#platform-1__graph-2-line-2 > *'), 0.75, {scaleX: 1, ease: Power2.easeInOut}, 0.055, '-=0.8')
				.staggerTo($('#platform-1__graph-2-line-3 > *'), 0.75, {scaleX: 1, ease: Power2.easeInOut}, 0.055, '-=0.8')
				;
		};

		const platform2Animation = () => {
			const tl = new TimelineMax();

			const _svg = $('#platform-illustration-2-svg');

			tl.set(_svg, {opacity:1, visibility: "visible"});
			tl.set("#platform-2__box-1, #platform-2__box-2, #platform-2__box-3", {opacity: 0,});
			tl.set("#platform-2__sidebar-point > *", {transformOrigin: 'center', scale: 0,});
			tl.set("#platform-2__sidebar-line > *, #platform-2__table-header > *, #platform-2__table-option > *", {transformOrigin: 'left center', scaleX: 0});
			tl.set("#platform-2__table-text-1 > *, #platform-2__table-text-2 > *, #platform-2__table-text-3 > *, #platform-2__table-text-4 > *, #platform-2__table-text-5 > *", {
				transformOrigin: 'left bottom', scaleX: 0
			});


			tl
				.staggerTo($('#platform-2__sidebar-point > *'), 0.8, {scale: 1, ease: Power2.easeInOut}, 0.1)
				.staggerTo($('#platform-2__sidebar-line > *'), 0.8, {scaleX: 1, ease: Power2.easeInOut}, 0.075, '-=0.95')
				.staggerTo($('#platform-2__table-header > *'), 0.75, {scaleX: 1, ease: Power2.easeInOut}, 0.1, '-=0.95')
				.staggerTo($('#platform-2__table-option > *'), 0.8, {scaleX: 1, ease: Power2.easeInOut}, 0.1, '-=1')
				.staggerTo($('#platform-2__table-text-1 > *'), 0.7, {scaleX: 1, ease: Power2.easeInOut}, 0.075, '-=1')
				.staggerTo($('#platform-2__table-text-2 > *'), 0.7, {scaleX: 1, ease: Power2.easeInOut}, 0.075, '-=1')
				.staggerTo($('#platform-2__table-text-3 > *'), 0.7, {scaleX: 1, ease: Power2.easeInOut}, 0.075, '-=1')
				.staggerTo($('#platform-2__table-text-4 > *'), 0.7, {scaleX: 1, ease: Power2.easeInOut}, 0.075, '-=1')
				.staggerTo($('#platform-2__table-text-5 > *'), 0.7, {scaleX: 1, ease: Power2.easeInOut}, 0.075, '-=1')
				.to($('#platform-2__box-1'), 1.5, {opacity: 1, ease: Power2.easeInOut}, '-=1.5')
				.to($('#platform-2__box-2'), 1.5, {opacity: 1, ease: Power2.easeInOut}, '-=1.25')
				.to($('#platform-2__box-3'), 1.5, {opacity: 1, ease: Power2.easeInOut}, '-=1')
				;
		};

		mainAnimation();
		platform1Animation();
		platform2Animation();
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
