var app = angular.module("MyApp.Auth")

.controller("SignupController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.passwordMessage = "",

        $scope.signup = function (user) {
            if (user.password !== $scope.passwordRepeat) {
                $scope.passwordMessage = "Passwords do not match";
            } else {
                UserService.signup(user).then(function (response) {
                    $location.path("/ogin")
                }, function (response) {
                    alert("there was a problem " + response.data);
                });
            }
        };
}]);