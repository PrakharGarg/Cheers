$(document).ready(function() {
  $(".title").lettering();
});

$(document).ready(function(){
  $( ".main" ).on( "click", function() {
    $(this).parent().removeClass('active');
    $(this).parent().addClass('hide');
  });
});

$(document).ready(function(){
  $( ".main-larger" ).on( "click", function() {
    $('.larger').removeClass('hide');
    $('.larger').addClass('active');
  });
  
  $( ".larger-btn" ).on( "click", function() {
    document.getElementById('beer').style.backgroundColor = '#FFCE1A';
    $(document.getElementById('pipe')).removeClass();
    $(document.getElementById('pipe')).toggleClass('larger-btn');
    restart_animation();
  });
  
  $( ".main-dark" ).on( "click", function() {
    $('.dark-larger').removeClass('hide');
    $('.dark-larger').addClass('active');
  });
  
  $( ".schwarzbier" ).on( "click", function() {
    document.getElementById('beer').style.backgroundColor = '#201B30';
    $(document.getElementById('pipe')).removeClass();
    $(document.getElementById('pipe')).toggleClass('schwarzbier');
    restart_animation();
  });
  
  $( ".normal-dark-larger" ).on( "click", function() {
    document.getElementById('beer').style.backgroundColor = '#8C2F12';
    $(document.getElementById('pipe')).removeClass();
    $(document.getElementById('pipe')).toggleClass('normal-dark-larger');
    restart_animation();
  });
  
  $( ".traditional-bock" ).on( "click", function() {
    document.getElementById('beer').style.backgroundColor = '#8C2F12';
    $(document.getElementById('pipe')).removeClass();
    $(document.getElementById('pipe')).toggleClass('traditional-bock');
    restart_animation();
  });
  
  $( ".maibock-bock" ).on( "click", function() {
    document.getElementById('beer').style.backgroundColor = '#D2B74B';
    $(document.getElementById('pipe')).removeClass();
    $(document.getElementById('pipe')).toggleClass('maibock-bock');
    restart_animation();
  });
  
  $( ".main-bock" ).on( "click", function() {
    $('.german-bock').removeClass('hide');
    $('.german-bock').addClass('active');
  });
  
  $( ".main-ale" ).on( "click", function() {
    $('.ale').removeClass('hide');
    $('.ale').addClass('active');
  });
  
  $( ".brown-ale" ).on( "click", function() {
    document.getElementById('beer').style.backgroundColor = '#632D18';
    $(document.getElementById('pipe')).removeClass();
    $(document.getElementById('pipe')).toggleClass('brown-ale');
    restart_animation();
  });
  
  $( ".main-pale-ale" ).on( "click", function() {
    $('.pale-ale').removeClass('hide');
    $('.pale-ale').addClass('active');
  });
  
  $( ".normal-pale-ale" ).on( "click", function() {
    document.getElementById('beer').style.backgroundColor = '#EA9819';
    $(document.getElementById('pipe')).removeClass();
    $(document.getElementById('pipe')).toggleClass('normal-pale-ale');
    restart_animation();
  });
  
  $( ".amber-pale-ale" ).on( "click", function() {
    document.getElementById('beer').style.backgroundColor = '#8C2F12';
    $(document.getElementById('pipe')).removeClass();
    $(document.getElementById('pipe')).toggleClass('amber-pale-ale');
    restart_animation();
  });
  
  $( ".main-ipa" ).on( "click", function() {
    $('.india-pale-ale').removeClass('hide');
    $('.india-pale-ale').addClass('active');
  });
  
  $( ".ipa" ).on( "click", function() {
    document.getElementById('beer').style.backgroundColor = '#EBC63C';
    $(document.getElementById('pipe')).removeClass();
    $(document.getElementById('pipe')).toggleClass('ipa');
    restart_animation();
  });
  
  $( ".main-porter" ).on( "click", function() {
    $('.porter').removeClass('hide');
    $('.porter').addClass('active');
  });
  
  $( ".port" ).on( "click", function() {
    document.getElementById('beer').style.backgroundColor = '#220000';
    $(document.getElementById('pipe')).removeClass();
    $(document.getElementById('pipe')).toggleClass('port');
    restart_animation();
  });
  
  $( ".main-stout" ).on( "click", function() {
    $('.stout').removeClass('hide');
    $('.stout').addClass('active');
    document.getElementById('beer').style.backgroundColor = '#140D1C';
    restart_animation();
    
  });
  
  $( ".main-belgium" ).on( "click", function() {
    $('.belgium').removeClass('hide');
    $('.belgium').addClass('active');
  });
  
  $( ".main-wheat" ).on( "click", function() {
    $('.wheat').removeClass('hide');
    $('.wheat').addClass('active');
  });
  
  $( ".main-spontaneous" ).on( "click", function() {
    $('.spontaneous').removeClass('hide');
    $('.spontaneous').addClass('active');
  });
  
  $( ".fa-chevron-circle-left" ).on( "click", function() {
    $(this).parent().removeClass('active');
    $(this).parent().addClass('hide');
    $('.main-beers').removeClass('hide');
    $('.main-beers').addClass('active');
  });
  
  function restart_animation(){
    var elm = document.getElementById('beer');
    var elm2 = document.getElementById('pipe-handle');
    var elm3 = document.getElementById('pipe')
    var newone = elm.cloneNode(true);
    var newone2 = elm2.cloneNode(true);
    var newone3 = elm3.cloneNode(true);
    elm2.parentNode.replaceChild(newone2,elm2);
    elm3.parentNode.replaceChild(newone3,elm3);
    elm.parentNode.replaceChild(newone,elm);
  }
  
});


$(document).ready(function() {
  animation();
}, 1000);

$('.button').click(function() {
  animation();
});


function animation() {
  var title1 = new TimelineMax();
  title1.staggerFromTo(".title span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
}


/*
	Astral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var settings = {

		// Speed to resize panel.
			resizeSpeed: 200,

		// Speed to fade in/out.
			fadeSpeed: 30,

		// Size factor.
			sizeFactor: 11.5,

		// Minimum point size.
			sizeMin: 15,

		// Maximum point size.
			sizeMax: 20

	};

	var $window = $(window);

	$window.on('load', function() {

		skel
			.breakpoints({
				desktop: '(min-width: 737px)',
				mobile: '(max-width: 736px)'
			})
			.viewport({
				breakpoints: {
					desktop: {
						width: 1080,
						scalable: false
					}
				}
			})
			.on('+desktop', function() {

				var	$body = $('body'),
					$main = $('#main'),
					$panels = $main.find('.panel'),
					$hbw = $('html,body,window'),
					$footer = $('#footer'),
					$wrapper = $('#wrapper'),
					$nav = $('#nav'), $nav_links = $nav.find('a'),
					$jumplinks = $('.jumplink'),
					$form = $('form'),
					panels = [],
					activePanelId = null,
					firstPanelId = null,
					isLocked = false,
					hash = window.location.hash.substring(1);

				if (skel.vars.touch) {

					settings.fadeSpeed = 0;
					settings.resizeSpeed = 0;
					$nav_links.find('span').remove();

				}

				// Body.
					$body._resize = function() {
						var factor = ($window.width() * $window.height()) / (1440 * 900);
						$body.css('font-size', Math.min(Math.max(Math.floor(factor * settings.sizeFactor), settings.sizeMin), settings.sizeMax) + 'pt');
						$main.height(panels[activePanelId].outerHeight());
						$body._reposition();
					};

					$body._reposition = function() {
						if (skel.vars.touch && (window.orientation == 0 || window.orientation == 180))
							$wrapper.css('padding-top', Math.max((($window.height() - (panels[activePanelId].outerHeight() + $footer.outerHeight())) / 2) - $nav.height(), 30) + 'px');
						else
							$wrapper.css('padding-top', ((($window.height() - panels[firstPanelId].height()) / 2) - $nav.height()) + 'px');
					};

				// Panels.
					$panels.each(function(i) {
						var t = $(this), id = t.attr('id');

						panels[id] = t;

						if (i == 0) {

							firstPanelId = id;
							activePanelId = id;

						}
						else
							t.hide();

						t._activate = function(instant) {

							// Check lock state and determine whether we're already at the target.
								if (isLocked
								||	activePanelId == id)
									return false;

							// Lock.
								isLocked = true;

							// Change nav link (if it exists).
								$nav_links.removeClass('active');
								$nav_links.filter('[href="#' + id + '"]').addClass('active');

							// Change hash.
								if (i == 0)
									window.location.hash = '#';
								else
									window.location.hash = '#' + id;

							// Add bottom padding.
								var x = parseInt($wrapper.css('padding-top')) +
										panels[id].outerHeight() +
										$nav.outerHeight() +
										$footer.outerHeight();

								if (x > $window.height())
									$wrapper.addClass('tall');
								else
									$wrapper.removeClass('tall');

							// Fade out active panel.
								$footer.fadeTo(settings.fadeSpeed, 0.0001);
								panels[activePanelId].fadeOut(instant ? 0 : settings.fadeSpeed, function() {

									// Set new active.
										activePanelId = id;

										// Force scroll to top.
											$hbw.animate({
												scrollTop: 0
											}, settings.resizeSpeed, 'swing');

										// Reposition.
											$body._reposition();

										// Resize main to height of new panel.
											$main.animate({
												height: panels[activePanelId].outerHeight()
											}, instant ? 0 : settings.resizeSpeed, 'swing', function() {

												// Fade in new active panel.
													$footer.fadeTo(instant ? 0 : settings.fadeSpeed, 1.0);
													panels[activePanelId].fadeIn(instant ? 0 : settings.fadeSpeed, function() {

														// Unlock.
															isLocked = false;

													});
											});

								});

						};

					});

				// Nav + Jumplinks.
					$nav_links.add($jumplinks).click(function(e) {
						var t = $(this), href = t.attr('href'), id;

						if (href.substring(0,1) == '#') {

							e.preventDefault();
							e.stopPropagation();

							id = href.substring(1);

							if (id in panels)
								panels[id]._activate();

						}

					});

				// Window.
					$window
						.resize(function() {

							if (!isLocked)
								$body._resize();

						});

					$window
						.on('orientationchange', function() {

							if (!isLocked)
								$body._reposition();

						});

					if (skel.vars.IEVersion < 9)
						$window
							.on('resize', function() {
								$wrapper.css('min-height', $window.height());
							});

				// Fix: Placeholder polyfill.
					$('form').placeholder();

				// Prioritize "important" elements on mobile.
					skel.on('+mobile -mobile', function() {
						$.prioritize(
							'.important\\28 mobile\\29',
							skel.breakpoint('mobile').active
						);
					});

				// CSS polyfills (IE<9).
					if (skel.vars.IEVersion < 9)
						$(':last-child').addClass('last-child');

				// Init.
					$window
						.trigger('resize');

					if (hash && hash in panels)
						panels[hash]._activate(true);

					$wrapper.fadeTo(400, 1.0);

			})
			.on('-desktop', function() {

				window.setTimeout(function() {
					location.reload(true);
				}, 50);

			});

	});

})(jQuery);