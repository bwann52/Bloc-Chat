(function() {
  function Message($firebaseArray) {
	  
	  this.getByRoomId = function(roomID) {
		 if(roomID){
		  return $firebaseArray(firebase.database().ref().child('messages').orderByChild('room_id').equalTo(roomID));
			 } else {
				 return "hi";
			 }
	  }
	  
	  return this;
  
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();