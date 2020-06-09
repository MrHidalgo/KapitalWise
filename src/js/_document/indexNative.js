/**
 * @description Document DOM ready.
 */

const tlMain = new TimelineMax({paused: true}),
	tlPlatform1 = new TimelineMax({paused: true}),
	tlPlatform2 = new TimelineMax({paused: true}),
	tlPlatform3 = new TimelineMax({paused: true}),
	tlPlatform4 = new TimelineMax({paused: true}),
	tlStory = new TimelineMax({paused: true});

(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const illustrationAnimation = () => {
		$('#main-illustration-svg, ' +
			'#platform-illustration-1-svg, ' +
			'#platform-illustration-2-svg, ' +
			'#platform-illustration-3-svg,' +
			'#platform-illustration-4-svg,' +
			'#story-illustration-svg,' +
			'#story2-illustration-svg').css({opacity: 1});

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

		const storyAnimation = () => {
			const SVGNode = `
				#story__part-1 circle, #story__part-1 line,
				#story__part-2 circle, #story__part-2 line,
				#story__part-3 circle, #story__part-3 line,
				#story__part-4 circle, #story__part-4 line,
				#story__part-5 circle, #story__part-5 line,
				#story__part-6 circle
			`;

			tlStory.set("" +
				"#story__circle-stroke-1, #story__circle-stroke-2, #story__circle-stroke-3, " +
				"#story__circle-stroke-4, #story__circle-stroke-5, #story__circle-stroke-5, " +
				"#story__circle-stroke-6", {
				drawSVG:'0%',
				transformOrigin: "50% 50%"
			});
			tlStory.set("" +
				"#story__line-1-1, #story__line-2-1, #story__line-3-1," +
				"#story__line-4-1, #story__line-5-1", {
				drawSVG: '0%',
				transformOrigin: '0 top'
			});
			tlStory.set("" +
				"#story__additional-line-1, #story__additional-line-2, #story__additional-line-3," +
				"#story__additional-line-4, #story__additional-line-5, #story__additional-line-5," +
				"#story__additional-line-6", {
				drawSVG: '0%',
				transformOrigin: 'left 0'
			});
			tlStory.set("#story__line-1-2, #story__line-3-2, #story__line-5-2", { scaleY: 0, transformOrigin: '0 top' });
			tlStory.set("#story__line-2-2, #story__line-4-2", { scaleY: 0, transformOrigin: '0 bottom' });
			tlStory.set("" +
				"#story__icon-1, #story__icon-2, #story__icon-3 path, " +
				"#story__icon-4 path, #story__icon-5, #story__icon-6", {
				opacity: 0,
				transformOrigin: 'center'
			});
			tlStory.set("" +
				"#story__path-1, #story__path-2, " +
				"#story__path-3, #story__path-4, " +
				"#story__path-5", {
				drawSVG:'0%', transformOrigin: "center"
			});
			tlStory.set("#story__logo", {rotation: 0, transformOrigin: "center"});
			tlStory.set("#story__logo-circle", {scale: 0, transformOrigin: "center"});
			tlStory.set("#story__logo-curve-1", {scaleY: 0, transformOrigin: "left top"});
			tlStory.set("#story__logo-curve-3", {scaleY: 0, transformOrigin: "left bottom"});
			tlStory.set("#story__logo-curve-2", { scaleX: 0, transformOrigin: "center"});
			tlStory.set("#story__block-1, #story__block-2, #story__block-3, #story__block-4, #story__block-5", { opacity: 0 });
			tlStory.set("" +
				"#story__block-1-line > *, #story__block-2-line > *, " +
				"#story__block-3-line > *, #story__block-4-line > *, #story__block-5-line > *", {
				scaleX: 0, transformOrigin: "left center"
			});
			tlStory.set("#story__block-2-graph > *, #story__block-5-graph > *", { scaleY: 0, transformOrigin: "0 bottom" });


			tlStory
				.to($(SVGNode), 0, {opacity: 1, ease: Power0.none})
				.to('#story__circle-stroke-1', 0.45, {drawSVG:'0% 100%', ease:Power1.easeInOut})
				.to('#story__icon-1', 0.5, {opacity: 1, ease:Power1.easeInOut}, '-=0.3')
				.to('#story__line-1-1', 0.45, {drawSVG:'0% 100%', ease: Power1.easeInOut}, '-=0.15')
				.to('#story__additional-line-1', 0.5, {drawSVG:'0% 100%', ease: Power1.easeInOut}, '-=0.45')
				.to('#story__line-1-2', 0.5, {scaleY: 1, ease: Power1.easeInOut}, '-=0.15')
				.to('#story__circle-stroke-2', 0.5, {drawSVG:'0% 100%', ease:Power1.easeInOut})
				.to('#story__icon-2', 0.5, {opacity: 1, ease:Power1.easeInOut}, '-=0.3')
				.to('#story__line-2-1', 0.5, {drawSVG:'0% 100%', ease: Power1.easeInOut}, '-=0.15')
				.to('#story__additional-line-2', 0.5, {drawSVG:'0% 100%', ease: Power1.easeInOut}, '-=0.45')
				.to('#story__line-2-2', 0.5, {scaleY: 1, ease: Power1.easeInOut}, '-=0.15')
				.to('#story__circle-stroke-3', 0.5, {drawSVG:'0% 100%', ease:Power1.easeInOut})
				.to('#story__icon-3 path', 0.5, {opacity: 1, ease:Power1.easeInOut})
				.to('#story__line-3-1', 0.5, {drawSVG:'0% 100%', ease: Power1.easeInOut}, '-=0.15')
				.to('#story__additional-line-3', 0.5, {drawSVG:'0% 100%', ease: Power1.easeInOut}, '-=0.45')
				.to('#story__line-3-2', 0.5, {scaleY: 1, ease: Power1.easeInOut}, '-=0.15')
				.to('#story__circle-stroke-4', 0.5, {drawSVG:'0% 100%', ease:Power1.easeInOut})
				.to('#story__icon-4 path', 0.5, {opacity: 1, ease:Power1.easeInOut})
				.to('#story__line-4-1', 0.5, {drawSVG:'0% 100%', ease: Power1.easeInOut}, '-=0.15')
				.to('#story__additional-line-4', 0.5, {drawSVG:'0% 100%', ease: Power1.easeInOut}, '-=0.45')
				.to('#story__line-4-2', 0.5, {scaleY: 1, ease: Power1.easeInOut}, '-=0.15')
				.to('#story__circle-stroke-5', 0.5, {drawSVG:'0% 100%', ease:Power1.easeInOut})
				.to('#story__icon-5', 0.5, {opacity: 1, ease:Power1.easeInOut})
				.to('#story__line-5-1', 0.5, {drawSVG:'0% 100%', ease: Power1.easeInOut}, '-=0.15')
				.to('#story__additional-line-5', 0.5, {drawSVG:'0% 100%', ease: Power1.easeInOut}, '-=0.45')
				.to('#story__line-5-2', 0.5, {scaleY: 1, ease: Power1.easeInOut}, '-=0.15')
				.to('#story__circle-stroke-6', 0.5, {drawSVG:'0% 100%', ease:Power1.easeInOut})
				.to('#story__icon-6', 0.5, {opacity: 1, ease:Power1.easeInOut})
				.to('#story__icon-6', 0.5, {opacity: 1, ease:Power1.easeInOut}, '-=0.15')
				.to('#story-illustration-svg', 0.75, {opacity: 0, ease: Elastic.easeInOut.config(1, 1)}, '-=0.75')
				.to('#story__logo-circle', 1, {scale: 1, ease: Elastic.easeInOut.config(1.2, 0.5)}, '-=0.25')
				.to('#story__logo-curve-1, #story__logo-curve-3', 0.75, {scaleY: 1, ease:Power1.easeInOut})
				.to('#story__logo-curve-2', 0.75, {scaleX: 1, ease:Power1.easeInOut}, '-=0.75')
				.to('#story__logo', 1.2, {rotation: '360deg', ease:Power1.easeInOut}, '-=1')
				.staggerTo('#story__path > *', 1, {drawSVG:'0 100%', ease:Power1.easeInOut}, '-=0.25')
				.to('#story__block-1, #story__block-2, #story__block-3, #story__block-4, #story__block-5', 1, {opacity: 1, ease:Power1.easeInOut})
				.staggerTo('#story__block-1-line > *, #story__block-2-line > *, #story__block-3-line > *, #story__block-4-line > *, #story__block-5-line > *', 0.55, {scaleX: 1, ease:Power1.easeInOut}, 0.1, '-=0.75')
				.staggerTo('#story__block-2-graph > *, #story__block-5-graph > *', 0.55, {scaleY: 1, ease:Power1.easeInOut}, 0.1, '-=0.95')
			;
		};

		const viewportCheckedAnimation = () => {
			$.fn.isInViewport = function() {
				var elementTop = $(this).offset().top;
				var elementBottom = elementTop + $(this).outerHeight();

				var viewportTop = $(window).scrollTop();
				var viewportBottom = viewportTop + $(window).height();

				return elementBottom > viewportTop && elementTop < viewportBottom;
			};

			if(!$('#main-illustration-svg').length) {
				return;
			}

			const svgObj = [
				'#main-illustration-svg',
				'#platform-illustration-1-svg',
				'#platform-illustration-2-svg',
				'#platform-illustration-3-svg',
				'#platform-illustration-4-svg',
				'#story-illustration-svg'
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
		storyAnimation();
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

		if(!$('.turn-key__box-wrapper').length) {
			return;
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


	const demoIllustrationAnimation = () => {
		const tl = new TimelineMax();

		$('#demo-illustration-svg').css({opacity: 1});

		tl.set('#request__mail', {transformOrigin: 'center', opacity: '0'});
		tl.set('#request__block-1, #request__block-2', {transformOrigin: 'right bottom', scale: '0'});
		tl.set('#request__block-3', {transformOrigin: 'center bottom', scale: '0'});
		tl.set('#request__block-4, #request__block-5', {transformOrigin: 'left bottom', scale: '0'});
		tl.set('#request__block-1-icon, #request__block-2-icon, #request__block-3-icon, #request__block-4-icon, #request__block-5-icon', {
			transformOrigin: 'center', scale: '0'
		});

		tl
			.to('#request__mail', 1, {opacity: 1, ease: Power2.easeInOut})
			.to('#request__block-1', 0.9, {scale: 1, ease: Bounce.easeOut})
			.to('#request__block-2', 0.95, {scale: 1, ease: Bounce.easeOut}, '-=0.9')
			.to('#request__block-3', 1, {scale: 1, ease: Bounce.easeOut}, '-=0.95')
			.to('#request__block-4', 0.975, {scale: 1, ease: Bounce.easeOut}, '-=1')
			.to('#request__block-5', 1.05, {scale: 1, ease: Bounce.easeOut}, '-=0.975')
			.staggerTo('#request__block-1-icon, #request__block-2-icon, #request__block-3-icon, #request__block-4-icon, #request__block-5-icon', 1, {scale: 1}, 0.1, '-=0.5')
		;
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
		// ==========================================

		// callback
		illustrationAnimation();
		platformBoxViewportAnimation();
		turnKeyLineAnimation();
		demoIllustrationAnimation();
		// ==========================================
	};

	$(window).on('load', (ev) => {
		initNative();
	});
})();
