/*
 * https://adebateman.org/ site script
 */

$(document).ready(function() {

	/* How to Handle Hashtags */
    $(window).bind("hashchange",function() {
        var hash = location.hash;
        if(hash==='') {
            hash='#home';
        }
        $('a[href='+hash+']').trigger('click');
    });

	/* Main Navigation Clicks */
	$('.main-nav ul li a').click(function() {
		var link = $(this).attr('href').substr(1);

		if ( !$('section.content.show, section#' + link).is(':animated') ) {
			$('.main-nav ul li a').removeClass('active'); //remove active
			$('section.content.show').animate({'opacity' : 0}, {queue: false, duration: 1000,
				complete: function() {
					$('section.content.show').removeClass('show').addClass('hide');
					$('a[href="#'+link+'"]').addClass('active'); // add active
					$('section#' + link).removeClass('hide').addClass('show').animate({'opacity' : 1}, {queue: false, duration: 1000});
				}
			});
		}
	});

    $('#maximage').maximage({
        cycleOptions: {
            fx: 'fade',
            speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
            timeout: 6000,
            prev: '#arrow_left',
            next: '#arrow_right',
            pause: 0,
        },
        onFirstImageLoaded: function(){
            jQuery('#maximage').fadeIn('fast');
        }
    });

    if(location.hash) {
        $('a[href='+location.hash+']').trigger('click');
    }
});

(function() {
    if (!((document.exitFullscreen) || (document.webkitExitFullscreen) || (document.webkitCancelFullScreen) || (document.msExitFullscreen) || (document.mozCancelFullScreen)))
    {
        var ss = document.styleSheets[0];
        if(ss.insertRule) {
            ss.insertRule(".full-screen { display: none; }",0);
        }
    }
})();
