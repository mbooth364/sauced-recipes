angular.module("MyApp")

.service("recipeService", ["$http", function($http) {
    
    var self = this;
    
    this.getRecipe = function() {
        return $http.get("/recipes");
    }
    

    
    this.addRecipe = function(recipe) {
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
    
    this.deleteRecipe = function(id, $index) {
        return $http.delete(`/recipes/${id}`);
    }
}])