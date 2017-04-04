(function() {
  function Room($firebaseArray, ModalInstanceCtrl) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', 'ModalInstanceCtrl', Room]);
})();