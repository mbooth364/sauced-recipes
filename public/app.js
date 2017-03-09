angular.module("MyApp", ["ngRoute", "ui.materialize"])
.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "components/home/home.html",
        controller:"HomeController"
    })
    .when("/recipes", {
        templateUrl: "components/recipes/recipes.html",
        controller: "RecipeController"
    })
    .when("/restaurants", {
        templateUrl: ""
    })
    .otherwise({
        redirectTo: "/home"
    });
}]);