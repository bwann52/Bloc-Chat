(function() {
     function HomeCtrl(Room, $stateParams, Message) {
        this.rooms = Room.rooms;
		  
		  this.messages = Message.getByRoomId($stateParams.room_id);
		  
//		  messages refer to this.messages 
		  console.log($stateParams.room_id);
		  
		 
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$stateParams', 'Message', HomeCtrl]);
 })();