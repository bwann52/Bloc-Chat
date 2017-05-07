(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    Room.rooms = $firebaseArray(ref);
	  
	  //can I just write rooms.$add(name)?
	  Room.addRoom = function(name) {
            Room.rooms.$add(name);
         };
	  
	  
	 
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
