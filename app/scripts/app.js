(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
     
    
    $stateProvider
         .state('home', {
             url: '/',
             controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
         })
   
	    .state('active', {
             url: '/',
             controller: 'ActiveCtrl as active',
            templateUrl: '/templates/active.html'
         })
     
     }
    
    angular
         .module('blocChat', ['ui.router', 'firebase','ui.bootstrap'])
         .config(config);
 })();

