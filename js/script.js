/*	Author:
		TMW - (Author Name Here)
*/


// Uncomment the line below to expose jQuery as a global object to the usual places
// window.jQuery = window.$ = require('./libs/jquery/jquery-1.10.2.js');

// include any globally accessible files here too:
// require('.helpers/log');


// Create a closure to maintain scope of the '$' and KO (Kickoff)
;(function(KO) {

	// follow a singleton pattern
	// (http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript)

	KO.Config = {
		variableX : '', // please don't keep me - only for example syntax!

		init : function () {
			console.debug('Kickoff is running');
		}
	};

	// Example module include
	// KO.UI = require('./modules/UI');

	KO.Config.init();

})(window.KO = window.KO || {});
