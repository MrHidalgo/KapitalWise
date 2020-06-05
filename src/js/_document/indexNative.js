/**
 * @description Document DOM ready.
 */

const tlMain = new TimelineMax({paused: true}),
	tlPlatform1 = new TimelineMax({paused: true}),
	tlPlatform2 = new TimelineMax({paused: true}),
	tlPlatform3 = new TimelineMax({paused: true}),
	tlPlatform4 = new TimelineMax({paused: true});

(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const illustrationAnimation = () => {
		$('#main-illustration-svg, ' +
			'#platform-illustration-1-svg, ' +
			'#platform-illustration-2-svg, ' +
			'#platform-illustration-3-svg,' +
			'#platform-illustration-4-svg').css({opacity: 1});

		const mainAnimation = () => {
			const SVGNode = `
				#main__box-line > *, #main__box-graph > *, #main__box-point > *,
				#main__box-point > *, #main__sidebar-point > *, #main__sidebar-line > *,
				#main__content-line-1 > *, #main__content-line-2 > *, #main__content-line-3 > *
			`;

			tlMain.set("#main-box--left", {opacity: 0, transformOrigin: 'center'});
			tlMain.set("#main__box-line > *", {transformOrigin: 'left center', scaleX: 0,});
			tlMain.set("#main__box-graph > *", {transformOrigin: 'center bottom', scaleY: '0',});
			tlMain.set("#main__box-point > *, #main__box-point > *", {transformOrigin: 'center', y: 20, scale: '0',});
			tlMain.set("#main__sidebar-point > *", {transformOrigin: 'center', scale: '0',});
			tlMain.set("#main__sidebar-line > *, #main__content-line-1 > *, #main__content-line-2 > *, #main__content-line-3 > *", {
				transformOrigin: 'left center', scaleX: '0'
			});

			tlMain
				.to($(SVGNode), 0, {opacity: 1, ease: Power0.none})
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
			const SVGNode = `
				#platform-1__sidebar-point > *, #platform-1__sidebar-line > *, #platform-1__graph-3-line > *,
				#platform-1__graph-1-line > *, #platform-1__graph-4-line > *, #platform-1__graph-2-line-1 > *,
				#platform-1__graph-2-line-2 > *, #platform-1__graph-2-line-3 > *
			`;

			tlPlatform1.set("#platform-1__sidebar-point > *", {transformOrigin: 'center', scale: 0,});
			tlPlatform1.set("#platform-1__sidebar-line > *, #platform-1__graph-3-line > *", {transformOrigin: 'left center', scaleX: 0});
			tlPlatform1.set("#platform-1__graph-1-line > *, #platform-1__graph-4-line > *", {transformOrigin: 'left bottom', scaleY: 0});
			tlPlatform1.set("#platform-1__graph-2-line-1 > *", {transformOrigin: 'left bottom', scaleX: 0});
			tlPlatform1.set("#platform-1__graph-2-line-2 > *", {transformOrigin: 'left bottom', scaleX: 0});
			tlPlatform1.set("#platform-1__graph-2-line-3 > *", {transformOrigin: 'left bottom', scaleX: 0});

			tlPlatform1
				.to($(SVGNode), 0, {opacity: 1, ease: Power0.none})
				.staggerTo($('#platform-1__sidebar-point > *'), 0.8, {scale: 1, ease: Power2.easeInOut}, 0.1)
				.staggerTo($('#platform-1__sidebar-line > *'), 0.8, {scaleX: 1, ease: Power2.easeInOut}, 0.075, '-=0.65')
				.staggerTo($('#platform-1__graph-1-line > *'), 0.8, {scaleY: 1, ease: Power2.easeInOut}, 0.1, '-=0.8')
				.staggerTo($('#platform-1__graph-4-line > *'), 0.8, {scaleY: 1, ease: Power2.easeInOut}, 0.075, '-=0.85')
				.staggerTo($('#platform-1__graph-3-line > *'), 0.8, {scaleX: 1, ease: Power2.easeInOut}, 0.1, '-=0.8')
				.staggerTo($('#platform-1__graph-2-line-1 > *'), 0.75, {scaleX: 1, ease: Power2.easeInOut}, 0.055, '-=0.8')
				.staggerTo($('#platform-1__graph-2-line-2 > *'), 0.75, {scaleX: 1, ease: Power2.easeInOut}, 0.055, '-=0.8')
				.staggerTo($('#platform-1__graph-2-line-3 > *'), 0.75, {scaleX: 1, ease: Power2.easeInOut}, 0.055, '-=0.8');
		};

		const platform2Animation = () => {
			const SVGNode = `
				#platform-2__sidebar-point > *, #platform-2__sidebar-line > *, #platform-2__table-header > *,
				#platform-2__table-option > *, #platform-2__table-text-1 > *, #platform-2__table-text-2 > *,
				#platform-2__table-text-3 > *, #platform-2__table-text-4 > *, #platform-2__table-text-5 > *
			`;

			tlPlatform2.set("#platform-2__box-1, #platform-2__box-2, #platform-2__box-3", {opacity: 0,});
			tlPlatform2.set("#platform-2__sidebar-point > *", {transformOrigin: 'center', scale: 0,});
			tlPlatform2.set("#platform-2__sidebar-line > *, #platform-2__table-header > *, #platform-2__table-option > *", {transformOrigin: 'left center', scaleX: 0});
			tlPlatform2.set("#platform-2__table-text-1 > *, #platform-2__table-text-2 > *, #platform-2__table-text-3 > *, #platform-2__table-text-4 > *, #platform-2__table-text-5 > *", {
				transformOrigin: 'left bottom', scaleX: 0
			});

			tlPlatform2
				.to($(SVGNode), 0, {opacity: 1, ease: Power0.none})
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
				.to($('#platform-2__box-3'), 1.5, {opacity: 1, ease: Power2.easeInOut}, '-=1');
		};

		const platform3Animation = () => {
			const SVGNode = `
				#platform-3__sidebar-point > *, #platform-3__sidebar-line > *,
				#platform-3__graph-1-action > *, #platform-3__graph-1-line > *
			`;

			tlPlatform3.set("#platform-3__sidebar-action > *", {opacity: 0});
			tlPlatform3.set("#platform-3__sidebar-point > *", {transformOrigin: 'center', scale: 0,});
			tlPlatform3.set("#platform-3__sidebar-line > *", {transformOrigin: 'left center', scaleX: 0});
			tlPlatform3.set("#platform-3__graph-1-action > *", {transformOrigin: 'left center', scaleX: 0});
			tlPlatform3.set("#platform-3__graph-1-line > *", {transformOrigin: 'bottom center', scaleY: 0});
			tlPlatform3.set("#platform-3__graph-2-text, #platform-3__graph-2-point, #platform-3__graph-2-ind", {opacity: 0});
			tlPlatform3.set("#platform-3__pointer", {
				opacity: 0,
				rotation: 314,
				transformOrigin:"left 100%"
			});

			tlPlatform3
				.to($(SVGNode), 0, {opacity: 1, ease: Power0.none})
				.to($('#platform-3__sidebar-action > *'), 1.25, {opacity: 1, ease: Power2.easeInOut})
				.staggerTo($('#platform-3__sidebar-point > *'), 0.8, {scale: 1, ease: Power2.easeInOut}, 0.1, '-=1')
				.staggerTo($('#platform-3__sidebar-line > *'), 0.8, {scaleX: 1, ease: Power2.easeInOut}, 0.075, '-=0.95')
				.staggerTo($('#platform-3__graph-1-action > *'), 0.75, {scaleX: 1, ease: Power2.easeInOut}, 0.1, '-=0.95')
				.staggerTo($('#platform-3__graph-1-line > *'), 0.75, {scaleY: 1, ease: Power2.easeInOut}, 0.075, '-=1')
				.to($('#platform-3__graph-2-point, #platform-3__graph-2-ind'), 1, {opacity: 1, ease: Power2.easeInOut}, '-=1')
				.to($('#platform-3__pointer'), 1, {opacity: 1, rotation: 386, ease: Power2.easeInOut}, '-=0.55')
				.to($('#platform-3__graph-2-text'), 1, {opacity: 1, ease: Power2.easeInOut}, '-=0.35');
		};

		const platform4Animation = () => {
			const SVGNode = `
				#platform-4__sidebar-point > *, #platform-4__details-point > *, #platform-4__sidebar-line > *,
				#platform-4__details-line > *, #platform-4__graph-line > *
			`;

			tlPlatform4.set("#platform-4__box-1, #platform-4__box-2", {opacity: 0});
			tlPlatform4.set("#platform-4__sidebar-point > *, #platform-4__details-point > *", {transformOrigin: 'center', scale: 0,});
			tlPlatform4.set("#platform-4__sidebar-line > *, #platform-4__details-line > *", {transformOrigin: 'left center', scaleX: 0});
			tlPlatform4.set("#platform-4__graph-line > *", {transformOrigin: 'bottom center', scaleY: 0});

			tlPlatform4
				.to($(SVGNode), 0, {opacity: 1, ease: Power0.none})
				.staggerTo($('#platform-4__sidebar-point > *'), 0.8, {scale: 1, ease: Power2.easeInOut}, 0.1)
				.staggerTo($('#platform-4__sidebar-line > *'), 0.8, {scaleX: 1, ease: Power2.easeInOut}, 0.075, '-=0.95')
				.staggerTo($('#platform-4__details-point > *'), 0.8, {scale: 1, ease: Power2.easeInOut}, 0.1, '-=1')
				.staggerTo($('#platform-4__details-line > *'), 0.8, {scaleX: 1, ease: Power2.easeInOut}, 0.075, '-=1')
				.staggerTo($('#platform-4__graph-line > *'), 0.75, {scaleY: 1, ease: Power2.easeInOut}, 0.075, '-=1')
				.to($('#platform-4__box-1'), 1, {opacity: 1, ease: Power2.easeInOut}, '-=1')
				.to($('#platform-4__box-2'), 1, {opacity: 1, ease: Power2.easeInOut}, '-=0.55');
		};

		const viewportCheckedAnimation = () => {
			$.fn.isInViewport = function() {
				var elementTop = $(this).offset().top;
				var elementBottom = elementTop + $(this).outerHeight();

				var viewportTop = $(window).scrollTop();
				var viewportBottom = viewportTop + $(window).height();

				return elementBottom > viewportTop && elementTop < viewportBottom;
			};

			const svgObj = [
				'#main-illustration-svg',
				'#platform-illustration-1-svg',
				'#platform-illustration-2-svg',
				'#platform-illustration-3-svg',
				'#platform-illustration-4-svg'
			];

			for(let i = 0; i < svgObj.length; i++) {
				if ($(svgObj[i]).isInViewport()) {
					window[$(svgObj[i]).attr('data-name')].play();
				} else {
					window[$(svgObj[i]).attr('data-name')].restart().kill();
				}
			}

			$(window).on("resize scroll", () => {
				for(let i = 0; i < svgObj.length; i++) {
					if ($(svgObj[i]).isInViewport()) {
						window[$(svgObj[i]).attr('data-name')].play();
					} else {
						window[$(svgObj[i]).attr('data-name')].restart().kill();
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


	const platformBoxViewportAnimation = () => {
		const controller = new ScrollMagic.Controller();

		const platformBlocks = $('.platform__box');

		for(let block of platformBlocks) {
			var scene = new ScrollMagic.Scene({
				triggerElement: block,
				duration: 230,
				offset: -75
			})
				.on("enter", function () {block.classList.add('is-active');})
				.on("leave", function () {block.classList.remove('is-active');})
				// .addIndicators({name: "2 - change inline style"})
				.addTo(controller);
		}
	};


	const turnKeyLineAnimation = () => {
		function isAnyPartOfElementInViewport(el) {
			const rect = el.getBoundingClientRect();
			const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
			const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
			const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
			const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

			return (vertInView && horInView);
		}

		const elem = $('.turn-key__box-wrapper')[0];

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
	const initNative = () => {
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

	$(window).on('load', (ev) => {
		initNative();
	});
})();
