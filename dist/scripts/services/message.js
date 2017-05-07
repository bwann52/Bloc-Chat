(function() {
  function Message($firebaseArray, $stateParams) {
	  this.messages = getByRoomId();
	  
	  function getByRoomId () {
		  
		  var ref = firebase.database().ref("messages");
		  
		  ref.orderByChild("room_id").equalTo($stateParams.room_id).on("child_added", function(snapshot, messages) {
			  console.log(snapshot.val().content);
			  messages = snapshot.val();
			});		    
	  }
	  
	  console.log(messages);
	  return Message;
  
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$stateParams', Message]);
})();