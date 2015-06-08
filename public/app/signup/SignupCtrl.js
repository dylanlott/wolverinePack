(function(){

angular.module("booklet")
.controller('SignupCtrl', function($scope) {
		$scope.userSignup = function() {
			if (user.password !== user.password2) {
				$scope.error = "Passwords don't match.";
				return;
			}
			usersService.signup(user.email, user.password, user.name)
            .then(function(new_user) {
				$location.path('/home');
				console.log("success!", new_user);
			}).catch(function(err) {
				$scope.error = err.message;
			});
		};
});
})(); 