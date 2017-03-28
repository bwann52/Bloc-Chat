(function() {
    function ModalCtrl(Room,$uibModal) {
         
				
         
        this.open = function(){
						console.log("does this work?")
          var modalInstance = $uibModal.open({
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'modal.html',
              controller: 'ModalInstanceCtrl',
              controllerAs: '$ctrl',
					});

        }
        
    };
		
		function ModalInstanceCtrl() {
				this.ok = function () {
						$uibModalInstance.close("foo");
					};

		}
    
 
     angular
         .module('blocChat')
         .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl])
				 .controller('ModalInstanceCtrl', [ModalInstanceCtrl]);
 })();