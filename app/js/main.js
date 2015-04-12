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
