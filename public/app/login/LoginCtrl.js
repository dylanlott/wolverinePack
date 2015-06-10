(function(){
	// 'use strict';


angular.module('fashionphile').controller('LoginCtrl', function($scope, $location, UsersService) {

	$scope.login = function(user){
		var dfd = $q.defer;
		$http({
			method: 'POST', 
			url: API + '/api/users/auth', //url always needs initial slash
			data: {
				email: user.email,
				password: user.password
			}
		})
		.then(function(res) {
			dfd.resolve(res); 
		});
		console.log("Logged in ", user); 
		return dfd.promise;
		});
	}
}();

