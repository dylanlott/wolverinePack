(function(){
  // 'use strict';

angular
  .module("fashionfile", ['ui.router'])

//config
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('', '/');
		$urlRouterProvider.otherwise('/');
		$stateProvider
		 	.state('home', {
		 			url: '/',
          templateUrl : './app/home/home.html', 
          controller  : 'HomeCtrl'
      })
      .state('signup', {
          url: '/signup',
          templateUrl: './app/signup/signup.html',
          controller: 'SignupCtrl'
      })
      .state('dashboard', {
          url: '/dashboard',
          templateUrl : './app/secure/dashboard.html',
          controller  : 'DashboardCtrl'
      })
      .state('login', {
      		url: '/login',
          templateUrl : './app/login/login.html',
          controller  : 'LoginCtrl'
      });

  })
})();

