;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;
				if(($(this.element).parent().hasClass('music-sheet-design-bg')) ||
				($(this.element).is('#choral-arrangements-heading')) ||
				($(this.element).hasClass('search-box-wrapper')) ||
				($(this.element).parent().parent().parent().parent().hasClass('arrangement-nav')))
				{
					return;
				}
				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '100%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

			// if ( $win.scrollTop() > 100 ) {
			if ( $win.scrollTop() > 40 ) {
				$('.fh5co-nav').addClass('scrolled');
			} else {
				$('.fh5co-nav').removeClass('scrolled');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};


	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#fh5co-slider-wrwap .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#fh5co-slider-wrwap .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#fh5co-slider-wrwap .flexslider .slides > li').css('height', $(window).height());	
	  	});

	  	
	};

	var parallax = function() {
		if ( !isMobile.any() ) {
			$(window).stellar();
		}
	};

	var DateTimePickerFunc = function() {
		if ($('#taskdatetime').length > 0) {
			$('#taskdatetime').datetimepicker();
		}
	}

	var zoomFunc = function() {
		if ($('.zoomerang').length > 0) {
	   	// Zoomerang.config({maxHeight:730,maxWidth:900}).listen('.zoomerang');

	   	$('.fh5co-bg-img').each(function(){
	   		$(this).css('width', '100%');
	   	});
	   	Zoomerang
                .config({
                    maxHeight: 900,
                    maxWidth: 800,
                    bgColor: '#000',
                    bgOpacity: .85,
                    onOpen: openCallback,
                    onClose: closeCallback,
                    onBeforeOpen: beforeOpenCallback,
                    onBeforeClose: beforeCloseCallback
                })
                .listen('.zoomerang')

            function openCallback (el) {
                console.log('zoomed in on: ')
                // console.log(el)
            }

            function closeCallback (el) {
                console.log('zoomed out on: ')
                // console.log(el)
            }

            function beforeOpenCallback (el) {
            	console.log('on before zoomed in on:')
            	// console.log(el)
            }

            function beforeCloseCallback (el) {
            	console.log('on before zoomed out on:')
            	// console.log(el)
            }

	   }
	}

	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		fullHeight();
		parallax();
		DateTimePickerFunc();

		$('.fh5co-bg-img').each(function(){
   		$(this).css('width', '100%');
   	});
		// zoomFunc();
	});
	$(document).ready(function() {
		const year = new Date().getFullYear();
		$('#copyright-text').html('&copy; ' + year + ' by Matthew Jaskiewicz')

		function showpanel(el) {
			$(el).addClass('fadeIn fadeInUp animated-fast');
		}
		setTimeout(function() {
			$('#music-symbol').addClass('fadeIn fadeInUp animated-fast');
		}, 300);
		setTimeout(function() {
			$('#choral-arrangements-heading').addClass('fadeIn animated');
		}, 300);
		$('.line1').addClass('fadeInLeft animated-fast');
		setTimeout(function() {
			$('.line2').addClass('fadeInLeft animated-fast');
		}, 200);
		setTimeout(function() {
			$('.line3').addClass('fadeInLeft animated-fast');
		}, 300);
		setTimeout(function() {
			$('.line4').addClass('fadeInLeft animated-fast');
		}, 400);
		setTimeout(function() {
			$('.line5').addClass('fadeInLeft animated-fast');
		}, 500);
		setTimeout(function() {
			showpanel($($('.arrangement-nav .menu-item')[0]));
		}, 200);
		setTimeout(function() {
			showpanel($($('.arrangement-nav .menu-item')[1]));
		}, 300);
		setTimeout(function() {
			showpanel($($('.arrangement-nav .menu-item')[2]));
		}, 400);
		setTimeout(function() {
			showpanel($($('.arrangement-nav .menu-item')[3]));
		}, 500);
		// setTimeout(function() {
		// 	showpanel($('.show-more-arrangements'));
		// }, 200);
		setTimeout(function() {
			showpanel($('.search-box-wrapper'));
		}, 700);
		$('.arrangements-page .song-card').each(function(i, el) {
			setTimeout(function() {
				showpanel(el);
			}, (200*i));
		});
	});	
	$('.js-fullheight').css('height', $(window).height());
	$('.modal iframe').css('height', $(window).height() - 250);
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
		return false;
	};
	var lang = getUrlParameter("lang")
	$(".biography").hide()
	$("#about-page .toggle-language a").removeClass('active');
	if(lang === "pol") {
		$("#about-page .toggle-language a#polish-toggle").addClass('active');
		$(".biography.bio-english").appendTo(".biography.bio-polish");
		$(".bio-polish").show()
	} else {
		$("#about-page .toggle-language a#english-toggle").addClass('active');
		$(".biography.bio-polish").appendTo(".biography.bio-english");
		$(".bio-english").show()
	}
	$('#about-page .toggle-language a').hover(function() {
		$('#about-page .toggle-language a').removeClass('active');
	});
	$('#about-page .toggle-language a').mouseleave(function() {
		if(lang == "pol") {
			$("#about-page .toggle-language a#polish-toggle").addClass('active');
		} else {
			$("#about-page .toggle-language a#english-toggle").addClass('active');
		}
	});


	// $('#fh5co-header .display-tc').css('padding-top', $('.fh5co-nav').height() + 32);

	// var swiper = new Swiper(".mySwiper", {
	// slidesPerView: 1,
	// spaceBetween: 30,
	// loop: true,
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	clickable: true,
	// },
	// navigation: {
	// 	nextEl: ".swiper-button-next",
	// 	prevEl: ".swiper-button-prev",
	// },
	// });
	// $(document).ready(function() {
	// 	$("#bg-video").get(0).play()
	// });
	// $('.btn-polish').click(function () {
	// 	console.log
	// 	$('#polish-about-me').hide()
	// 	$('#english-about-me').show()
	// });
	// $('.btn-english').click(function () {
	// 	$('#english-about-me').hide()
	// 	$('#polish-about-me').show()
	// });
	// $('.js-fullheight').css('height', $(window).height());
	// year = new Date().getFullYear()	
	// $('#copyright-text').html('&copy; ' + year + ' by Matthew Jaskiewicz')

	// Arrangement song cards

	$('.panel-group').on("click", ".btn-view-music-sheet", function() {
		var file_id = $(this).attr('data');
		var url = 'https://drive.google.com/file/d/' + file_id  + '/preview';
		$('.modal .modal-body iframe').attr('src', url);
		url = 'https://drive.google.com/uc?export=download&id=' + file_id;
		$('.modal .modal-footer .btn-success').attr('href', url);
	});

	$('audio').on('play', function(x) {
		var og_audio = this;
		$('audio').each(function(){
			if (this !== og_audio) {
				this.pause(); // Stop playing
				this.currentTime = 0; // Reset time
			}
		});
	});


	$('#about-page .toggle-language a').click(function() {
		$('#about-page .toggle-language a').removeClass('active');
		$(this).addClass('active');
	});
}());
