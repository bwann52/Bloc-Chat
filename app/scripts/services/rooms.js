(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    Room.rooms = $firebaseArray(ref);
	  
	  Room.addRoom = function(name) {
            Room.rooms.$add(name);
         };
	  
	  
	 
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
