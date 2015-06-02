// make all images responsive
$(function() {
	$("img").addClass("img-responsive");
});

// responsive tables
$(document).ready(function() {
	$("table").wrap("<div class='table-responsive'></div>");
	$("table").addClass("table");
});

// responsive embed videos
$(document).ready(function () { 
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
$(document).ready(function($) {
    var MQL = 768;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height(),
			introHeight = $('.intro-header').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
				if (currentTop >= introHeight) {
					$('.navbar-custom').addClass('is-top');
				} else {
					$('.navbar-custom').removeClass('is-top');
				}
                this.previousTop = currentTop;
            });
    }
});

$(document).ready(function() {
	$('.nav').click('a', function(e) {
		$('.nav').find('li').removeClass('active');
		$(this).parent.addClass('active');
	})
});
