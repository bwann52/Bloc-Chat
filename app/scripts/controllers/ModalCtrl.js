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
		
	
	function ModalInstanceCtrl(Room, $uibModalInstance, $uibModal) {
				this.ok = function () {
					$uibModalInstance.close(this);
				};
		
				this.save= function(roomName) {
					home.rooms.$add(roomName);
				}
		  
		  		this.cancel = function () {
				  	$uibModalInstance.close();
				};
		 

	}
    
 
     angular
         	.module('blocChat')
         	.controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl])
		.controller('ModalInstanceCtrl', ['Room','$uibModalInstance','$uibModal', ModalInstanceCtrl])
 })();