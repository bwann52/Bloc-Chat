(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'templates/modal2.html',
              controller: function UsernameModalInstanceCtrl($cookies, $uibModalInstance) {
//					this.userName = '';
					this.setUserName = function() {
						$cookies.put('blocChatCurrentUser', this.userName);
						// can be dismissed
						$uibModalInstance.close();
					}
		  
				  },
			//in controller, wrote function UsernameModelInstanceCtrl which setsup userName and setUserName function
              controllerAs: '$ctrl2',
					});
      }
	  
	  

    }
	
	  


  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();