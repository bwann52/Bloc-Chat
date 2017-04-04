(function() {
	
    function ActiveCtrl($scope, Room) {
	    $scope.roomID = Room.rooms.$keyAt(1);
         
        
    };
		
    
 
     angular
         	.module('blocChat')
         	.controller('ActiveCtrl', ['$scope','Room',ActiveCtrl])
 })();