'use strict';
	var $ad = $('.slick-ad');
	var $center = $('#slick-center');
	var $gallery = $('#slick-preview');
	var $count = $('.slick-count-wrap');
	var $current = $('.slick-current');
	var $total = $('.slick-total');
	var slideCount = null;
$(function() { 
	$center.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		//arrows: true,
		draggable: false,
		//swipe: false,
		//fade: true,
		asNavFor: '#slick-preview',
		fade: true,		
		nextArrow: $(".slick-control.is--next"),
		prevArrow: $(".slick-control.is--prev"),
		//variableWidth: true,
		//centerMode: true,
		//prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-prev"></use></svg></button>',
		//nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-next"></use></svg></button>',
		//prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev"></use></svg></button>',
		//nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next"></use></svg></button>'
		responsive: [
		    {
		      breakpoint: 1025,
		      settings: {
				fade: false, 
				asNavFor: '',
				draggable: true,
		      }
		    }
	  	]
	});
	$gallery.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: '15px',
		asNavFor: '#slick-center',
		arrows: false,
		//centerMode: true,
		focusOnSelect: true,
		//nextArrow: $(".slick-control.is--next"),
		//prevArrow: $(".slick-control.is--prev"),
		//draggable: false,
		//swipe: false,
		//touchThreshold: 10
		responsive: [
		    {
		    	breakpoint: 1024,
		    	settings: "unslick"
		    }
	  	]
	});	
	$ad.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: $(".slick-control.is--next.is--ad-index"),
		prevArrow: $(".slick-control.is--prev.is--ad-index"),
		draggable: false,
		fade: true,
		responsive: [
		    {
		      breakpoint: 1025,
		      settings: {
				fade: false, 
				draggable: true,
		      }
		    }
	  	]
	});
}); 
$center.on('init', function(event, slick){
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});
$center.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
  var $el = $count.find('.slick-total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  var $el = $count.find('.slick-current');
  $el.text(currentSlide + 1);
}
/*'use strict';
$(function() { 
	$('.slick-country').slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: true,
		//appendArrows: '.content-block__cols.is--slick-btn .work-news',
		infinite: false,
		responsive: [
		    {
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		],
		prevArrow: '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#slick-left"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#slick-right"></use></svg></button>'
		//asNavFor: "#sl-nav",
		//fade: true,
		//customPaging: 20,
		//draggable: false,
		//swipe: false,
		//fade: true,
		//variableWidth: true,
		//centerMode: true,
	});
	$('.slick-gallery').slick({
		centerMode: true,
		centerPadding: '15px',
		slidesToShow: 3,
		//slidesToScroll: 4,
		arrows: true,
		//infinite: false,
		draggable: false,
		swipe: false,
		dots: false,
		responsive: [
		    {
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					//dots: true,
				}
		    },
		    {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					//dots: false,
					centerMode: false,
					centerPadding: '15px', 
				}
		    }
		],
		prevArrow: '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#slick-left"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#slick-right"></use></svg></button>'
		//asNavFor: "#sl-nav",
		//fade: true,
		//customPaging: 20,
		//fade: true,
		//variableWidth: true,
		//centerMode: true,
	});
}); */
