/*
 * https://adebateman.org/ site script
 */

jQuery(document).ready(function() {

	/* How to Handle Hashtags */
	jQuery(window).hashchange(function(){
		var hash = location.hash;
		jQuery('a[href='+hash+']').trigger('click');
	});

	/* Main Navigation Clicks */
	jQuery('.main-nav ul li a').click(function() {
		var link = jQuery(this).attr('href').substr(1);

		if ( !jQuery('section.content.show, section#' + link).is(':animated') ) {
			jQuery('.main-nav ul li a').removeClass('active'); //remove active
			jQuery('section.content.show').animate({'opacity' : 0}, {queue: false, duration: 1000,
				complete: function() {
					jQuery('section.content.show').removeClass('show').addClass('hide');
					jQuery('a[href="#'+link+'"]').addClass('active'); // add active
					jQuery('section#' + link).removeClass('hide').addClass('show').animate({'opacity' : 1}, {queue: false, duration: 1000});
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
