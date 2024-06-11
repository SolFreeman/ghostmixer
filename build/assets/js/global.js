jQuery(document).ready(function ($) {
	faqAccordeon();

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

	function selectLang() {
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
			event.stopPropagation(); // Останавливаем всплытие события, чтобы не сработал обработчик для документа
		});
	
		select.click(function (event) {
			select.removeClass('active');
			$(this).addClass('active');
			var $lang = $(this).text();
			nav.text($lang);
			nav.trigger('click');
	
			event.preventDefault();
			event.stopPropagation(); // Останавливаем всплытие события, чтобы не сработал обработчик для документа
		});
	
		$(document).click(function () {
			if (nav.hasClass('active')) {
				nav.removeClass('active');
				selection.stop().slideUp(200);
			}
		});
	}

	selectLang();

	function selectOpen() {
		var nav = $('.select-title');
		var selection = $('.list');
		var select = selection.find('li');
		
		nav.click(function (event) {
			var parent = $(this).parent();
			
			if (nav.hasClass('active')) {
				nav.removeClass('active');
				parent.removeClass('active');
				selection.stop().slideUp(200);
			} else {
				nav.addClass('active');
				parent.addClass('active');
				selection.stop().slideDown(200);
			}
			event.preventDefault();
			event.stopPropagation(); // Останавливаем всплытие события, чтобы не сработал обработчик для документа
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
			event.stopPropagation(); // Останавливаем всплытие события, чтобы не сработал обработчик для документа
		});
	
		$(document).click(function () {
			if (nav.hasClass('active')) {
				nav.removeClass('active');
				nav.parent().removeClass('active');
				selection.stop().slideUp(200);
			}
		});
	}
	
	selectOpen();
	


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

	document.getElementById('copyButton').addEventListener('click', function() {
		var textField = document.getElementById('textField');
		navigator.clipboard.writeText(textField.value).then(function() {
			alert('Текст скопирован: ' + textField.value);
		}, function(err) {
			console.error('Ошибка копирования: ', err);
		});
	});

	$('.tablist a').click(function(event) {
        event.preventDefault(); 
        $('.tablist a').removeClass('active'); 
        $(this).addClass('active');
    });

	$('.next').click(function() {
        $('.step_1').hide();
        $('.step_2, .info-text').show();
    });

    $('.back').click(function() {
        $('.step_2, .info-text').hide();
        $('.step_1').show();
    });

});

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