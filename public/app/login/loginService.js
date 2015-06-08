angular.module("booklet").service('usersService', function($http, $q) {
	this.login = function(user) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/users/auth',
			data:  {
				email: user.email,
				password: user.password
			}
		}).then(function(res) {
			deferred.resolve(res.data);
		}).catch(function(res) {
			deferred.reject(res.data);
		});
		return deferred.promise;
	};
});