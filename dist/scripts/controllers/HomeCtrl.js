(function() {
     function HomeCtrl(Room, $stateParams, Message, $cookies) {
        this.rooms = Room.rooms;
		  this.messages = Message.getByRoomId($stateParams.room_id);
		  this.currentUser = $cookies.get('blocChatCurrentUser');
//		  this.newMessage = "";
		  
		  this.createMessageObj = function(newMessage) {
			  console.log(this.currentUser);
			  var msgObj = {content: newMessage, room_id: $stateParams.room_id, sentAt: 'n/a' , username: this.currentUser}
//			  console.log(msgObj)
			  Message.addMessageObj(msgObj);
		  }
	  }
	
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$stateParams', 'Message', '$cookies', HomeCtrl]);
 })();
		  var msg = {}