$(window).on('load resize', function () {
	if ($(window).width() < 768) {
		$('.review-slider:not(.slick-initialized)').slick({
			dots: true,
			infinite: true,
			speed: 100,
			slidesToShow: 1,
			arrows: false
		});

		$('.js-secrets-slider:not(.slick-initialized)').slick({
			dots: true,
			infinite: true,
			speed: 200,
			slidesToShow: 1,
			arrows: false
		});

	} else {
		$(".js-secrets-slider.slick-initialized").slick("unslick");
		$(".review-slider.slick-initialized").slick("unslick");
		// $(".search-list.slick-initialized").slick("unslick");
	}

	if ($(window).width() < 1340) {
		openPro();
	}

});

jQuery(document).ready(function ($) {
	faqAccordeon();
	openDropdown();


	$('.form-box .text-input').on('input', function () {
		if ($(this).val().trim() !== '') {
			$(this).addClass('filled');
		} else {
			$(this).removeClass('filled');
		}
	});

	function handleTabClicks() {
        if ($(window).width() > 767) {
            $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });
        } else {
            $('ul.tabs__caption').off('click', 'li:not(.active)');
        }
    }

    // Initial check
    handleTabClicks();

    // Check on window resize
    $(window).resize(function() {
        handleTabClicks();
    });

	$('.detail-links').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

	var nav = $('.language-title');
	var selection = $('.language-list');
	var select = selection.find('li');

	nav.click(function (event) {
		if (nav.hasClass('active')) {
			nav.removeClass('active');
			selection.stop().slideUp(200);
		} else {
			nav.addClass('active');
			selection.stop().slideDown(200);
		}
		event.preventDefault();
	});

	select.click(function (event) {
		select.removeClass('active');
		$(this).addClass('active');
		var $lang = $(this).text();
		nav.text($lang);
		nav.trigger('click');
	});

	function selectOpen() {
		var nav = $('.select-title');
		var selection = $('.list');
		var select = selection.find('li');
	
		nav.click(function (event) {
			var parent = $(this).parent();
			
			if (nav.hasClass('active')) {
				nav.removeClass('active');
				parent.removeClass('active'); // Убираем класс active у родителя
				selection.stop().slideUp(200);
			} else {
				nav.addClass('active');
				parent.addClass('active'); // Добавляем класс active родителю
				selection.stop().slideDown(200);
			}
			event.preventDefault();
		});
	
		select.click(function (event) {
			select.removeClass('active');
			$(this).addClass('active');
	
			var $img = $(this).find('img').attr('src');
			var $alt = $(this).find('img').attr('alt');
			var $text = $(this).find('a').text();
	
			nav.html('<img src="' + $img + '" alt="' + $alt + '">' + $text);
			nav.trigger('click');
	
			event.preventDefault();
		});
	}
	
	selectOpen();
	
	




	function autocomplete() {
		let suggestions = [];

		$('.faq-list li span').each(function () {
			suggestions.push($(this).text());
		});

		$('.search').on('input', function () {
			let inputValue = $(this).val().toLowerCase();
			let suggestionList = $('.suggestion-list');

			if (inputValue.length >= 3) {
				let filteredSuggestions = suggestions.filter(function (suggestion) {
					return suggestion.toLowerCase().includes(inputValue);
				});

				let suggestionItems = filteredSuggestions.map(function (suggestion) {
					return '<li>' + suggestion + '</li>';
				});

				suggestionList.html(suggestionItems.join(''));
				suggestionList.show();
			} else {
				suggestionList.hide();
			}

			if (inputValue === '') {
				$('.faq-list li').show();
			}
		});

		$('.suggestion-list').on('click', 'li', function () {
			let suggestion = $(this).text();
			$('.search').val(suggestion);
			$('.suggestion-list').hide();

			let faqList = $('.faq-list li');
			faqList.hide();
			faqList.filter(function () {
				return $(this).find('span').text() === suggestion;
			}).show();
		});
	}

	autocomplete();

	function miniTabs() {
		var windowWidth = $(window).width();
		var isMobile = windowWidth <= 1024;

		function togglePhotoBox() {
			windowWidth = $(window).width();
			isMobile = windowWidth <= 1024;

			if (isMobile) {
				$('ul.mini-tabs li').off('click').on('click', function () {
					var photoBox = $(this).find('.photo-box');

					if (photoBox.is(':visible')) {
						photoBox.slideUp();
					} else {
						$('.photo-box').slideUp();
						photoBox.slideDown();
					}
				});

				$('ul.mini-tabs li:first-child .photo-box').slideDown();
			} else {
				$('ul.mini-tabs li').off('click');
				$('.photo-box').slideUp();
			}
		}

		togglePhotoBox();

		$(window).resize(function () {
			var newWindowWidth = $(window).width();
			var newIsMobile = newWindowWidth <= 768;

			if (isMobile !== newIsMobile) {
				togglePhotoBox();
			}
		});
	}


	miniTabs();



	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.scrolltop:hidden').stop(true, true).fadeIn();
		} else {
			$('.scrolltop').stop(true, true).fadeOut();
		}
	});

	$(function () {
		$(".muve-top").click(function () {
			var top = $(".thetop").offset().top;
			$('html, body').animate({
				scrollTop: top
			}, 1000, 'easeOutExpo');
			return false
		})
	})



	$('.happy-slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1
				},
			}
		]
	});

	$('.gameplay-slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '0',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
				},
			}
		]
	});

	$('.feedback-slider').slick({
		slidesToShow: 3,
		dots: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false,
					centerMode: true,
					centerPadding: '60px',
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					arrows: false,
					adaptiveHeight: true,
					centerPadding: '30px',
				}
			}
		]
	});

	$('.trust-slider').slick({
		slidesToShow: 4,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});



	$('.content iframe').each(function () {
		let iframeWrapper = $('<div class="video-area"><div class="video-holder"></div></div>');

		$(this).wrap(iframeWrapper);
	});

	animateBlock();
});

function animateBlock() {
	let animatedElements = $(".animate-fade-up");

	function checkVisibility() {
		let scroll = $(window).scrollTop();
		let windowHeight = $(window).height();

		animatedElements.each(function () {
			let elementTop = $(this).offset().top;
			let elementBottom = elementTop + $(this).outerHeight();

			if (elementTop <= scroll + windowHeight && elementBottom > scroll) {
				$(this).addClass("active");
			} else if (elementTop < scroll + windowHeight) {
			} else {
				$(this).removeClass("active");
			}
		});
	}

	checkVisibility();

	$(window).scroll(function () {
		checkVisibility();
	});
}


function openDropdown() {
	jQuery('.open-link').on('click', function (e) {
		e.preventDefault();
		jQuery('.choose-menu').toggleClass('active');
	});
	$(document).mouseup(function (e) {
		let div = $('.choose-menu');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			div.removeClass('active');
		}
	});
}

function openPro() {
	jQuery('.btn_pro').on('click', function () {
		jQuery('.btn-box').toggleClass('active');
	});
	$(document).mouseup(function (e) {
		let div = $('.btn-box');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			div.removeClass('active');
		}
	});
}

function faqAccordeon() {
	var allLi = jQuery('.faq-list li'),
		allSub = allLi.children('.filter');

	jQuery('.faq-list li > span').each(function () {
		var doc = jQuery(document),
			$this = jQuery(this),
			item = $this.parent('li'),
			itemFilter = $this.next('.text-faq'),
			itemParent = item.parents('li');


		$this.on('click', function () {
			if (item.hasClass('active')) {
				itemFilter.slideUp();
				item.removeClass('active');
			}
			else {
				allLi.not(itemParent).removeClass('active');
				allLi.not(itemParent).find('.text-faq').slideUp();
				itemFilter.slideDown();
				item.addClass('active');
			}
		});
	});
}


