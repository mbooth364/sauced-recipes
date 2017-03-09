var app = angular.module("MyApp", ["ui.bootstrap"]);

app.controller("RecipeController", ["$scope", "$http", "$uibModal", "recipeService", function ($scope, $http, $uibModal, recipeService) {


    $scope.recipeList = []

    recipeService.getRecipe().then(function (response) {
        $scope.recipeList = response.data;
    })

    $scope.addRecipe = function (recipe) {
        recipeService.addRecipe(recipe).then(function (response) {
            $scope.recipeList.push(response.data)
            $scope.newRecipe = {};
        })
    }



    $scope.results = function (recipe) {
        recipeService.getSingleRecipe(recipe._id)
            .then(function (recipe) {
                $scope.recipe = recipe
                console.log(recipe);
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: "modal.html",
                    scope: $scope,
                    size: "lg",
                    controller: "CloseRecipeModal"
                })
            })
    }


    $scope.updateRecipe = function (recipe, index) {
        recipeService.updateRecipe(recipe, index).then(function (updatedRecipe) {
            $scope.recipeList[index] = updatedRecipe;
        })
    }

    $scope.deleteRecipe = function (item, $index) {
        recipeService.deleteRecipe(item, $index).then(function (response) {
            $scope.recipeList.splice($index, 1);
        })
    }
    


    }])