/*	Author:
		TMW - (Author Name Here)
*/

// ======================================
// === Declare global 'TMW' namespace ===
// ======================================
var TMW = window.TMW || {};

// Create a closure to maintain scope of the '$' and remain compatible with other frameworks
(function($) {

	$(function() {

		TMW.SiteSetup.init();

	});// END DOC READY

})(jQuery);

TMW.SiteSetup = {

	init : function () {
		TMW.Demos.init();
	}
};

TMW.Demos = {
	init : function() {
		this.grids();
	},

	grids : function() {
		// $('.grid-test .col.centred').each(function() {
		// 	var $spanName = $(this).attr('class'),
		// 		$html = $(this).html();
		// 	$(this).html($html + $spanName);
		// });

		// $('.grid-test .split > div').each(function() {
		// 	var $spanName = $(this).attr('class');
		// 	$(this).text('split ' + $spanName);
		// });

		// Show the grid
		$('.show-grid-button').click(function() {
			if ( $('body').hasClass('show-grid') ) {
				$('body').removeClass('show-grid');
				$('.show-grid-button').text('Show Grid');
				console.log('show grid');
			} else {
				$('body').addClass('show-grid');
				$('.show-grid-button').text('Hide Grid');
				console.log('hide grid');
			}
		});
	}


}
