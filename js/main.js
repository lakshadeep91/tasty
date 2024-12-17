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

		} , { offset: '85%' } );
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
	if(lang === "pol") {
		$(".biography.bio-english").appendTo(".biography.bio-polish");
		$(".bio-polish").show()
	} else {
		$(".biography.bio-polish").appendTo(".biography.bio-english");
		$(".bio-english").show()
	}


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
			"artist": "Celine Dion",
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
	  function buildSongCards() {
		$('.panel-group.arrangements-page').html('');
		var count = 0
		for (var i=0; i<songs_data.length; i++) {
			var visible_files = [];
			var protected_files = [];
			var visible_music_sheets = '';
			var protected_music_sheets = '';
			var collapse_in = '';
			var collapsed_flag = '';

			var song_name = songs_data[i]["title"];
			var artist_name = songs_data[i]["artist"];
			var song_url = songs_data[i]["song_url"];
			var active_tab = $(".arrangement-nav .active span").text();
			var files = songs_data[i]["files"];
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
			if(count === 0) {
				collapse_in = 'in';
			}
			else {
				collapsed_flag = 'collapsed';
			}
			var song_card = '<div class="panel panel-default song-card animate-box fadeIn animated-fast"><div class="panel-heading" role="tab" id="headingOne"><h4 class="panel-title"><div class="container"><div class="row"><div class="col-md-6 col-sm-12 song-name"><span class="song">' + song_name + '</span><span class="artist">' + artist_name + '</span></div><div class="col-md-5 col-sm-12 audio-player"><audio controls><source src="' + song_url + '" type="audio/mpeg">Your browser does not support the audio element.</audio></div><div class="col-md-1 col-sm-12 expand"><a class="collapse-arrow ' + collapsed_flag + '" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + i + '" aria-expanded="true" aria-controls="collapse' + count + '"><img src="images/down-arrow.png"/></a></div></div></div></h4></div><div id="collapse' + i + '" class="panel-collapse collapse ' + collapse_in + '" role="tabpanel" aria-labelledby="headingOne"><div class="panel-body">' + visible_music_sheets + protected_music_sheets + '</div></div></div>';
			$(".panel-group").append(song_card);
			count++;
		}
	  }

	  buildSongCards();

	  jQuery('#search-box').on('input', function() {
			var textsearch = $('#search-box').val().toLowerCase()
			if(textsearch == "") {
				$(".song-card").show()
				return true;
			}
			$(".song-card").hide()
			$(".song-name span").each(function(index) {
				var element_text = $(this).text().toLowerCase()
				if(element_text.indexOf(textsearch) >= 0) {
					$(this).closest(".song-card").show()
				}
			});
		});

		$('.arrangement-nav .menu-item').click(function() {
			$('#search-box').val('');
			$('.arrangement-nav .menu-item.active').removeClass('active');
			$(this).addClass('active');
			buildSongCards();
		});

		$('.panel-group').on("click", ".btn-view-music-sheet", function() {
			var file_id = $(this).attr('data');
			var url = 'https://drive.google.com/file/d/' + file_id  + '/preview';
			$('.modal .modal-body iframe').attr('src', url);
			url = 'https://drive.google.com/uc?export=download&id=' + file_id;
			$('.modal .modal-footer .btn-success').attr('href', url);
		});



}());
