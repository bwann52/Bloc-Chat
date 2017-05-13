(function() {
	
    function Modal2Ctrl(Room, $uibModal) {
				
         
        this.open = function(){
          var modalInstance = $uibModal.open({
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'templates/modal2.html',
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
         	.controller('Modal2Ctrl', ['Room', '$uibModal', Modal2Ctrl])
		.controller('ModalInstanceCtrl', ['$uibModalInstance','$uibModal','Room', ModalInstanceCtrl])
 })();