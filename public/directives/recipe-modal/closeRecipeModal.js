var app = angular.module("MyApp");

app.controller("CloseRecipeModal", ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {

    $scope.cancel = function() {
    $uibModalInstance.dismiss();
        
  };
}]);