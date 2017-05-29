(function() {
     function HomeCtrl(Room, $stateParams, Message, $cookies) {
        this.rooms = Room.rooms;
		  this.messages = Message.getByRoomId($stateParams.room_id);
		  this.currentUser = $cookies.get('blocChatCurrentUser');
		  this.newMessage = "";
		  this.addMessage = function(newMessage) {
			  var msg = {content: newMessage}
			  Message.addMessage(msg);
		  }
	  }
	
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$stateParams', 'Message', '$cookies', HomeCtrl]);
 })();
		  var msg = {}