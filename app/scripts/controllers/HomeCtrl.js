(function() {
     function HomeCtrl(Room, $stateParams, Message) {
        this.rooms = Room.rooms;
		  this.messages = Message.messages;
		  
//		  messages refer to this.messages 
		  console.log($stateParams.room_id);
//		  console.log(messages);
		  
 
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$stateParams', 'Message', HomeCtrl]);
 })();