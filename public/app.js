var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "$http", "recipeService", function($scope, $http, recipeService) {

    
    $scope.recipeList = []
    
    recipeService.getRecipe().then(function (response) {
        $scope.recipeList = response.data;
    })
    
    $scope.addRecipe = function(x) {
        recipeService.addRecipe(x).then(function(response) {
            $scope.recipeList.push(response.data)
        })
    }
    
    $scope.updateRecipe = function(x, index) {
        recipeService.updateRecipe(x, index).then(function(updatedRecipe) {
            $scope.recipeList[index] = updatedRecipe;
        })
    }
    
    $scope.deleteRecipe = function(item, index) {
        recipeService.deleteRecipe(item, index).then(function (response) {
            $scope.recipeList.splice(index, 1);
        })
    }
}])