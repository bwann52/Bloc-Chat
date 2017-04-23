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
	  
		 //room_id url, when clicked url is triggered...
		 .state('room', {
             url: '/:room_id',
             controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
         })
  
  
     
     }
    
    angular
         .module('blocChat', ['ui.router', 'firebase','ui.bootstrap'])
         .config(config);
 })();

