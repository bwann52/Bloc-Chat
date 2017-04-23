(function() {
     function HomeCtrl(Room, $stateParams, Message) {
         this.rooms = Room.rooms;
		   this.currentRoom = null // default
//			console.log($stateParams)
			
			this.setActiveRoom = function(roomId) {
				console.log($stateParams)
//				$stateParams.room_id = roomId;
				this.currentRoom = roomId;
				this.messages = Message.messages;

			}

     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$stateParams', 'Message', HomeCtrl]);
 })();