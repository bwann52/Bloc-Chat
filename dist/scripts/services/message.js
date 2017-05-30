(function() {
  function Message($firebaseArray) {
	 
	  var ref = firebase.database().ref().child('messages');
	  var messages = $firebaseArray(ref);
	  	  
	  // send a message, which is a new function
	  
	  this.addMessageObj = function(msgObj) {
		  messages.$add(msgObj);
	  }
	  
	  this.getByRoomId = function(roomID) {
		 if(roomID){
		   return $firebaseArray(ref.orderByChild('room_id').equalTo(roomID));
		 } else {
		   return [];
		 }
	  }
	 
	 

    
	  
	  //can I return Message if replace all this with Message?
	  return this;
  
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();