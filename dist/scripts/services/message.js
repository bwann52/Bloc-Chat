(function() {
  function Message($firebaseArray) {
	  Message.messages;
	  
	  Message.getByRoomId = function(roomID) {
		  var ref = firebase.database().ref().child("roomID").equalTo(roomID); 
	 	  Message.messages = $firebaseArray(ref);
	  }
    
	  
  return Message;

  
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();