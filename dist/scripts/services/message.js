(function() {
  function Message($firebaseArray) {
	  var ref = firebase.database().ref().child('messages').orderByChild('room_id').equalTo('room1');
	  
	  
	  Message.getByRoomId = function(roomID) {
		  var ref = firebase.database().ref().child('messages').orderByChild('room_id').equalTo(roomID);
	  }
	  
	  
 Message.messages = $firebaseArray(ref);
	  
  return Message;
  
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();