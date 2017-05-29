(function() {
  function Message($firebaseArray, $cookies, $uibModal) {
	 
	 var ref = firebase.database().ref().child('messages');
	 var messages = $firebaseArray(ref);
	  
	  var currentUser = $cookies.get('blocChatCurrentUser');
	  
	  // send a message, which is a new function
	  
	  this.addMessage = function(newMessage) {
		  console.log(newMessage)
		  messages.$add(newMessage);
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
    .factory('Message', ['$firebaseArray','$cookies','$uibModal', Message]);
})();