var app = angular.module("MyApp")

.controller("RestaurantController", ["$scope", "$http", "RestaurantService", function($scope, $http, RestaurantService) {
    
    $scope.restaurantList = []
    
    RestaurantService.getRestaurant.then(function(response) {
        $scope.restaurantList = response.data
    })
    
    $scope.addRestaurant = function(restaurant) {
        RestaurantService.addRestaurant(restaurant).then(function (response) {
            $scope.restaurantList.push(response.data)
            $scope.restaurantList = {}
        })
    }
    
    $scope.deleteRestaurant = function(item, $index) {
        RestaurantService.deleteRestaurant(item, $index).then(function(response) {
            $scope.restaurantList.splice($index, 1)
        })
    }
    
    
}])