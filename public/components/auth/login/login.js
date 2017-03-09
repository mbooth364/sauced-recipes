var app = angular.module("MyApp.Auth")

.controller("LoginController", ["$scope", "$location", "UserService", function($scope, $location, UserService){
    $scope.login = function(user){
        UserService.login(user).then(function(data){
            $location.path("/recipes");
        }, function(data){
            alert(data.message);
        });
    };
}]);