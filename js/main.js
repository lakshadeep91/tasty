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
			console.log('1')
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
	var x = 0
	  var songs_data = [
		{
			"title": "Canon In D",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "My heart will go on",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Symphony No. 40",
			"artist": "Wolfgang Amadeus Mozart",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"title": "Canon In D 2",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 3",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 4",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 5",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 6",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 7",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 8",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 9",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 10",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 11",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 12",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 13",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 14",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 15",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 16",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "Canon In D 17",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "My heart will go on 2",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "My heart will go on 3",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"id": ""
				},
			]
		},
		{
			"title": "My heart will go on 4",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"title": "My heart will go on 5",
			"artist": "Canon Artist",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"title": "Symphony No. 41",
			"artist": "Wolfgang Amadeus Mozart",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"title": "Symphony No. 3, Eroica",
			"artist": "Ludwig van Beethoven",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_CHURCH",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"title": "Pastoral Symphony, or Recollections of Country Life",
			"artist": "Ludwig van Beethoven",
			"song_url": "audio/sample1.mp3",
			"type": "POLISH_CHURCH",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"title": "Five violin concertos and one without solo",
			"artist": "Antonio Vivaldi",
			"song_url": "audio/sample1.mp3",
			"type": "INTERNATIONAL_SECULAR",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"url": ""
				},
			]
		},
		{
			"title": "Silent Night / Cicha noc",
			"artist": "Franz Gruber",
			"song_url": "audio/Franz_Gruber__Silent_Night_Cicha_Nocmp3.mp3",
			"type": "INTERNATIONAL_CHURCH",
			"files": [
				{
					"name": "Piano, Vocal Score",
					"type": "VISIBLE",
					"id": "1p_AG0pbzmpicd1j0ioXoF0XDodZSpl2j"
				},
				{
					"name": "Full Score",
					"type": "VISIBLE",
					"id": "1sQSE0Gy-DyMLVwniU1CMrFW3J1VkCDb6"
				},
				// {
				// 	"name": "File 3 bla bla bla bla",
				// 	"type": "PROTECTED",
				// 	"url": ""
				// },
			]
		},
		{
			"title": "Six violin concertos",
			"artist": "Antonio Vivaldi",
			"song_url": "audio/sample1.mp3",
			"type": "INTERNATIONAL_CHURCH",
			"files": [
				{
					"name": "File 1 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 2 bla bla bla bla",
					"type": "VISIBLE",
					"id": "1G1_ce39VL-e3LEFEmeqM7DPH-qPhda4n"
				},
				{
					"name": "File 3 bla bla bla bla",
					"type": "PROTECTED",
					"url": ""
				},
			]
		}
	  ]

	  function getActiveTabSongs() {
		var active_tab = $(".arrangement-nav .active span").text();
		var newSongsData = []
		for(var i=0; i<songs_data.length; i++) {
			var song_type = songs_data[i]["type"];
			if (active_tab === "Polish Secular Music" && song_type === "POLISH_SECULAR") {
				x = 1;
			} else if (active_tab === "Polish Church Music" && song_type === "POLISH_CHURCH") {
				x = 1;
			} else if (active_tab === "International Secular Music" && song_type === "INTERNATIONAL_SECULAR") {
				x = 1;
			} else if (active_tab === "International Church Music" && song_type === "INTERNATIONAL_CHURCH") {
				x = 1;
			} else {
				continue;
			}
			newSongsData.push(songs_data[i]);
		}
		return newSongsData;
	  }

	  function getSearchMatchingSongs() {
			$('.alert-no-arrangements-found').hide();
			$('.arrangement-nav').hide();
			var textsearch = $('#search-box').val().toLowerCase()
			if(textsearch === "") {
				$('.arrangement-nav').show();
				$('.alert-arrangements-found').hide();
				return getActiveTabSongs();
			}
			$('.alert-arrangements-found').show();
			$('.alert-arrangements-found span#entered-search-text').html(textsearch);
			// var currentTabSongs = getActiveTabSongs();

			var currentTabSongs = songs_data;
			var newSongsData = [];
			for(var i=0; i<currentTabSongs.length; i++) {
				if(currentTabSongs[i]["title"].toLowerCase().indexOf(textsearch) >=0 || currentTabSongs[i]["artist"].toLowerCase().indexOf(textsearch) >=0) {
					newSongsData.push(currentTabSongs[i]);
				}
			}
			if (!newSongsData.length) {
				// $('.alert-arrangements-found').hide();
				$('.alert-no-arrangements-found').show();
			}
			return newSongsData;
	  }

	  function buildSongCards(songs_data) {
		var total_song_cards = $('.song-card').length;
		var count = 0
		if (!total_song_cards) {
			$('.panel-group.arrangements-page').html('');
		}
		var i;
		for (i=total_song_cards; i<songs_data.length; i++) {
			if(count == 10) {
				$(".show-more-arrangements").removeClass('animated-fast fadeInUp').show()
				return;
			}
			var visible_files = [];
			var protected_files = [];
			var visible_music_sheets = '';
			var protected_music_sheets = '';
			var collapse_in = '';
			var collapsed_flag = '';

			var song_name = songs_data[i]["title"];
			var artist_name = songs_data[i]["artist"];
			var song_url = songs_data[i]["song_url"];
			var files = songs_data[i]["files"];
			for (var j=0; j<files.length; j++) {
				if(files[j]["type"] === "VISIBLE") {
					visible_files.push(files[j]);
				}
				else if(files[j]["type"] === "PROTECTED") {
					protected_files.push(files[j]);
				}
			}
			if(visible_files) {
				for(var j=0; j<visible_files.length; j++) {
					file_name = visible_files[j]["name"];
					var file_id = visible_files[j]["id"];
					visible_music_sheets = visible_music_sheets + '<div class="row"><div class="col-md-11 col-sm-11 col-xs-11 music-sheet"><span>' + file_name + '</span></div><div class="col-md-1 col-sm-1 col-xs-1 view-music-sheet"><a href="#" data="' + file_id + '" class="btn-view-music-sheet" title="View Music Sheet" data-toggle="modal" data-target="#myModal" alt="Music Sheet"><img src="images/music-sheet.png"/></a></div></div>';
				}
			}
			if(protected_files) {
				for(var j=0; j<protected_files.length; j++) {
					var file_name = protected_files[j]["name"];
					protected_music_sheets = protected_music_sheets + '<div class="row"><div class="col-md-11 col-sm-11 col-xs-11 music-sheet"><span>' + file_name + '</span></div><div class="col-md-1 col-sm-1 col-xs-1 view-music-sheet"><a href="#" class="btn-paid-music-sheet"><img src="images/mail.png"/></a></div></div>';
				}
			}
			if(count === 0 && !total_song_cards) {
				collapse_in = 'in';
			}
			else {
				collapsed_flag = 'collapsed';
			}
			var song_card = '<div class="panel panel-default song-card animate-box fadeIn"><div class="panel-heading" role="tab" id="headingOne"><h4 class="panel-title"><div class="container-flex"><div class="row"><div class="col-md-6 col-sm-12 song-name"><span class="song">' + song_name + '</span><span class="artist">' + artist_name + '</span></div><div class="col-md-5 col-sm-12 audio-player"><audio controls><source src="' + song_url + '" type="audio/mpeg">Your browser does not support the audio element.</audio></div><div class="col-md-1 col-sm-12 expand"><a class="collapse-arrow ' + collapsed_flag + '" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + i + '" aria-expanded="true" aria-controls="collapse' + count + '"><img src="images/down-arrow.png"/></a></div></div></div></h4></div><div id="collapse' + i + '" class="panel-collapse collapse ' + collapse_in + '" role="tabpanel" aria-labelledby="headingOne"><div class="panel-body">' + visible_music_sheets + protected_music_sheets + '</div></div></div>';
			$(".panel-group").append(song_card);
			count++;
		}
		if(i == songs_data.length) {
			$('.show-more-arrangements').hide();
		}
	  }

	  buildSongCards(getActiveTabSongs());

	jQuery('#search-box').on('input', function() {
		$('.panel-group').html('');
		var newSongsData = getSearchMatchingSongs();
		buildSongCards(newSongsData);
		$('.song-card').each(function(i) {
			var x = $(this)
			setTimeout(function() {
				$(x).addClass('animated-fast fadeInUp');
				console.log('hello', x);
			}, 100*i);
		});
	});
	$('a#clear-search-arrangements').click(function() {
		$('#search-box').val('');
		$('.panel-group').html('');
		$('.arrangement-nav').show();
		$('.alert-arrangements-found').hide()
		$('.alert-no-arrangements-found').hide();
		buildSongCards(getActiveTabSongs());
		contentWayPoint();
	});

	$('.arrangement-nav .menu-item').click(function() {
		$('#search-box').val('');
		$('.arrangement-nav .menu-item.active').removeClass('active');
		$(this).addClass('active');
		$(".panel-group").html('')
		buildSongCards(getActiveTabSongs());
		contentWayPoint();
	});

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
			console.log(og_audio, this);
			if (this !== og_audio) {
				this.pause(); // Stop playing
				this.currentTime = 0; // Reset time
			}
		});
	});

	$('.show-more-arrangements').click(function() {
		buildSongCards(getSearchMatchingSongs());
		contentWayPoint();
	})

	$('#about-page .toggle-language a').click(function() {
		$('#about-page .toggle-language a').removeClass('active');
		$(this).addClass('active');
	});
}());
