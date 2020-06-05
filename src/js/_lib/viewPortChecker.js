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
		'animation-name': ($(el).data('animation-name')) ? $(el).data('animation-name') + ", fadeIn" : 'slideInUp, fadeIn',
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
const initViewPortChecker = (
	className = "viewport-hide-js",
	classNameToAdd = "viewport-show-js animated",
	offsetVal = 100,
	callbackFunctionName = scrollAnimation
) => {

	$("." + className).not(".full-visible").each(function (idx, el) {

		$(el).viewportChecker({
			classToAdd: classNameToAdd,
			classToAddForFullView: 'full-visible',
			classToRemove: className,
			removeClassAfterAnimation: true,
			offset: offsetVal,
			repeat: false,
			callbackFunction: function (elem, action) {

				callbackFunctionName(elem, el);

			}
		});

	});

};

const initViewPortPlatformBlockChecker = (
	className = "viewport-platform-js",
	classNameToAdd = "is-active",
	offsetVal = 300,
) => {

	$("." + className).not(".full-visible").each(function (idx, el) {

		$(el).viewportChecker({
			classToAdd: classNameToAdd,
			classToAddForFullView: 'full-visible',
			classToRemove: className,
			removeClassAfterAnimation: true,
			offset: offsetVal,
			repeat: true,
			callbackFunction: function (elem, action) {
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

const initViewPortCountToChecker = (
	className = "viewport-countTo-js",
	classNameToAdd = "",
	offsetVal = 300,
) => {

	$("." + className).not(".full-visible").each(function (idx, el) {

		$(el).viewportChecker({
			classToAdd: classNameToAdd,
			classToAddForFullView: 'full-visible',
			classToRemove: className,
			removeClassAfterAnimation: true,
			offset: offsetVal,
			repeat: false,
			callbackFunction: function (elem, action) {

				$('.number__box-count span').countTo({
					speed: 1500,
					refreshInterval: 30
				});

			}
		});

	});

};