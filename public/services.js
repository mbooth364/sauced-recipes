angular.module("MyApp")

.service("recipeService", ["$http", function($http) {
    
    var self = this;
    
    this.getRecipe = function() {
        return $http.get("/recipes");
    }
    
    this.addRecipe = function(recipe) {
        recipe.ingredients = recipe.ingredients.trim().split(",")
        for(var i = 0; i < recipe.ingredients.length; i++) {
            recipe.ingredients[i] = recipe.ingredients[i].trim()
            if(recipe.ingredients[i] === "") {
                recipe.ingredients.splice(i, 1)
                i--
            }
        }
        console.log(recipe.ingredients);
        return $http.post("/recipes", recipe);
    }
    
    this.updateRecipe = function(item, index) {
        return $http.put(`/recipes/${item._id}`, item)
        .then(function(response) {
            return response.data
        })
    }
    
    this.getSingleRecipe = function(_id) {
        return $http.get(`/recipes/${_id}`)
        .then(function(response) {
            return response.data;
        })
    }
    
    this.deleteRecipe = function(_id, index) {
        return $http.delete(`/recipes/${_id}`);
    }
}])