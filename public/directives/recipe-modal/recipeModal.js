angular.module("MyApp")
.directive("recipeModal", function() {
    return{
        restrict:"E",
        templateUrl: "directives/recipe-modal/recipe-modal.html"
    }  
})

