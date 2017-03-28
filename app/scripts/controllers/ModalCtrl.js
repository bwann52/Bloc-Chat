(function() {
    function ModalCtrl(Room,$uibModal) {
         
          var template = "<div class='modal-dialog' role='document'>" +
          "<div class='content'>" +
            "<div class='modal-header'>" +
                "<h4>Create a new room</h4>" +
            "</div>" +
            "<div class='modal-body'>" +
              "<p>Enter a room name</p>" +
              "<div class='room-name'>" +
                "<input type='textbox' placeholder='enter a room name here' ng-model='$ctrl.roomName'></div>" +
              "</div>" +
            "</div>" +
            "<div class='modal-footer'>" +
              "<button class='btn btn-success' ng-click='$ctrl.save() && $ctrl.cancel()'>Okay</button>" +
              "<button class='btn' ng-click='$ctrl.cancel()'>Cancel</button>" +
            "</div>" +
          "</div>" +
        "</div>"
				
         
        this.open = function(){
						console.log("does this work?")
          var modalInstance = $uibModal.open({
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              template: template,
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
