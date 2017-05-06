(function() {
     function HomeCtrl(Room, $stateParams, Message) {
        this.rooms = Room.rooms;
		  
		  
		  
		  //default
		  this.messages = Message.messages;
		  
//		  this.messages = Message.getByRoomId($stateParams.room_id);
		  console.log($stateParams.room_id);
		  
		  
//currentRoom no longer necessary
		 //this.currentRoom = $stateParams.room_id || "nothing" 
 
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$stateParams', 'Message', HomeCtrl]);
 })();