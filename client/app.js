angular.module('Instagram', ['ngRoute', 'ngMessages', 'satellizer'])
  .config(function($routeProvider, $authProvider) {
	$routeProvider
	  .when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'HomeCtrl'
	  })
	  .when('/login', {
	    templateUrl: 'views/login.html',
	    controller: 'LoginCtrl'
	  })
	  .when('/signup', {
	    templateUrl: 'views/signup.html',
	    controller: 'SignupCtrl'
	  })
	  .when('/photo/:id', {
	    templateUrl: 'views/detail.html',
	    controller: 'DetailCtrl'
	  })
	  .otherwise('/');

	$authProvider.loginUrl = 'http://localhost:3000/connexion';
	$authProvider.signupUrl = 'http://localhost:4908/auth/signup';
	$authProvider.oauth2({
	  name: 'instagram',
	  url: 'http://localhost:4908/auth/instagram',
	  redirectUri: 'http://localhost:3000/',
	  clientId: '2b8733c4d5434e318f1e2ced068a9f8f',
	  requiredUrlParams: ['scope'],
	  scope: ['likes'],
	  scopeDelimiter: '+',
	  authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'	  
  	});
});

