(function() {
  function Message($firebaseArray) {
	  
	  this.getByRoomId = function(roomID) {
		 return $firebaseArray(firebase.database().ref().child('messages').orderByChild('room_id').equalTo(roomID));
	  }
	  
//	  function getByRoomId () {
//		  
//		  var ref = firebase.database().ref("messages");
//		  
//		  return $firebaseArray(ref.orderByChild("room_id").equalTo($stateParams.room_id))
//	  }
	  
	  return this;
  
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();