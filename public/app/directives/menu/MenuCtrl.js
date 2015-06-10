(function(){
	'use strict';

var app = angular.module('fashionphile');

//menu directive
app
	.directive('menu', function(){
		return {
			templateUrl: 'app/directives/menu/menu.html',
			restrict: 'E',
			// replace: true,
		};
	});

})();
