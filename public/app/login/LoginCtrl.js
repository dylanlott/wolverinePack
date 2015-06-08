(function(){
	// 'use strict';

angular.module("booklet")
	.controller('LoginCtrl', function($scope) {
		$scope.login = function() {
			usersService.login(user)
            .then(function() {
                $location.path('/home');
            }).catch(function(err) {
                $scope.error = err;
            });
		};
	});
})(); 
