(function() {
	
    function ModalCtrl(Room, $uibModal) {
				
         
        this.open = function(){
          var modalInstance = $uibModal.open({
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'templates/modal.html',
              controller: 'ModalInstanceCtrl',
              controllerAs: '$ctrl',
					});

        }
        
    };
		
	
	function ModalInstanceCtrl($uibModalInstance, $uibModal, Room) {
				this.ok = function () {
					$uibModalInstance.close();
				};
		
				this.save= function(roomName) {
					Room.addRoom(roomName);
				}
		  
		  		this.cancel = function () {
				  	$uibModalInstance.close();
				};
		 

	}
    
 
     angular
         	.module('blocChat')
         	.controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl])
		.controller('ModalInstanceCtrl', ['$uibModalInstance','$uibModal','Room', ModalInstanceCtrl])
 })();