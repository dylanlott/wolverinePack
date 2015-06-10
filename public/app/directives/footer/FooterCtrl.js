(function(){
	'use strict';

var app = angular.module('fashionphile');

//footer directive
app
	.directive('zfooter', function(){
		return {
			templateUrl: 'app/directives/footer/footer.html',
			restrict: 'E',
			// replace: true,
		};
	});

})();
