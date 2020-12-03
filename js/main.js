$(document).ready(function(){

	$(document).on('click','.radio-btn',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.mobile-btn',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$(document).on('click','.close-btn',function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
		$('.mobile-menu .nav li.li-drop').removeClass('active');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$(document).on('click','.scroll-btn',function(){
		var el = $(this).attr('href');
		var des = $(this).attr('data-scroll-offset');
		if ($(el).length){
			if (des){
				$('body,html').animate({scrollTop: $(el).offset().top - des}, 800);
			} else {
				$('body,html').animate({scrollTop: $(el).offset().top}, 800);
			}
		}
		return false;
	});

	$('form').on('submit',function(){
		var valid = true;

		if ( $(this).find('.policy-text .radio-btn').length ){
			if ( $(this).find('.policy-text .radio-btn').hasClass('active') ){
				$(this).find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
			} else {
				$(this).find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
				return false;
			}
		} else {
			$(this).find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
		}

		if (!valid) {
			event.preventDefault();
			return false;
		}
	});

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	$('.face-slider').slick({
		dots: true
	});

	$('.b-catalog-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive:[
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 930,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.sec-cat').on('mousemove',function(){
		var pos = {};
		pos.centerX = $('.sec-cat-el').outerWidth()/2;
		pos.centerY = $('.sec-cat-el').outerHeight()/2;
		pos.mouseX = event.pageX - $('.sec-cat-el').offset().left;
		pos.mouseY = event.pageY - $('.sec-cat-el').offset().top;
		var moveX = (pos.centerX - pos.mouseX)*40/$('.sec-cat-el').outerWidth();
		var moveY = (pos.centerY - pos.mouseY)*40/$('.sec-cat-el').outerHeight();

		$('.sec-cat-el').css('transform','translate('+moveX+'px, '+moveY+'px)');
	});

	$(document).on('click','.info-btn',function(){
		$(this).parent('.info').toggleClass('active');
	});

	$(document).on('click',function(e){
		var $event = $(e.target);

		if ( $event.closest('.mass-sel').length ){
			if ( $event.closest('.mass-sel-btn').length ){
				if ( $event.parent('.mass-sel').hasClass('active') ){
					$event.parent('.mass-sel').removeClass('active');
				} else {
					$('.mass-sel').removeClass('active');
					$event.parent('.mass-sel').addClass('active');
				}
			}
		} else {
			$('.mass-sel').removeClass('active');
		}
	});

	$(document).on('click','.mass-sel-list li',function(){
		var text = $(this).text();
		$(this).parent('.mass-sel-list').find('li').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.mass-sel').removeClass('active');
		$(this).parents('.mass-sel').find('.mass-sel-btn').text(text);
	});

	$(document).on('click','.buy-btn',function(){
		$(this).parent('.buy-wrap').addClass('active');
		$('.mass-sel').removeClass('active');
		return false;
	});

	$(document).on('click','.more',function(){
		var col = Number($(this).parent('.quantity').find('.number').text());
		col++;
		$(this).parent('.quantity').find('.number').text(col);
	});

	$(document).on('click','.less',function(){
		var col = Number($(this).parent('.quantity').find('.number').text());

		if ( col > 1 ){
			col--;
			$(this).parent('.quantity').find('.number').text(col);
		} else {
			if ( $(this).parents('.buy-wrap').length ){
				$(this).parents('.buy-wrap').removeClass('active');
			} else {
				$(this).parents('.b-order .list > li').remove();
			}
		}
	});

	$(document).on('click','.cat-btn',function(){
		$(this).parent('.header-cat').toggleClass('active');
	});

	$('input.cart-swap').on('change',function(){
		var item = $('input.cart-swap:checked').attr('data-cart');
		$('.cart-item').removeClass('active');
		$('.cart-item').find('input').prop('disabled',true);
		$('.cart-item[data-cart="'+item+'"]').addClass('active');
		$('.cart-item[data-cart="'+item+'"]').find('input').prop('disabled',false);
	});

});