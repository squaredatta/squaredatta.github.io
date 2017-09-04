$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop < 6)
        scrollTop = 6;
	if (scrollTop <= 200) {
		$('.herotext1, .herotext2, h4').css({
			'opacity': 1 - scrollTop / 200,
		});
	}
});

$(function() {
    if (screen.width > 900) {
        $('.aboutmelink, .ghost-button-full-color, .brand-logo, .scroll-indicator1').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
               scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
        });
    }
});

if (screen.width > 900) {

    $('.square1, .square2').hover(function() {
            $('.homepage').find('.heroimage').removeClass('heroimage-animation2');
            $('.homepage').find('.heroimage').addClass('heroimage-animation1');
        },
        function() {
            $('.homepage').find('.heroimage').addClass('heroimage-animation2');
            $('.homepage').find('.heroimage').removeClass('heroimage-animation1');
        });

    $('.square1').hover(function() {
            $('.square1 .square-header').css({
                'color': '#616161'
            });
            $('.square1 .square-desc').css({
                'color': '#616161',
                'animation': 'slide-up',
                'border-color': '#e67e22'
            });

        },
        function() {
            $('.square1 .square-header').css({
                'color': '#fff'
            });
            $('.square1 .square-desc').css({
                'color': 'transparent',
                'border-color': 'transparent'
            });
        });

    $('.square2').hover(function() {
            $('.square2 .square-header').css({
                'color': '#616161'
            });
            $('.square2 .square-desc').css({
                'color': '#616161',
                'animation': 'slide-up',
                'border-color': '#e67e22'
            });
        },
        function() {
            $('.square2 .square-header').css({
                'color': '#fff'
            });
            $('.square2 .square-desc').css({
                'color': 'transparent',
                'border-color': 'transparent'
            });
        });
}