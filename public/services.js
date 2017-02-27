angular.module("MyApp")

.service("recipeService", ["$http", function($http) {
    
    this.getRecipe = function() {
        return $http.get("/recipes");
    }
    
    this.addRecipe = function(x) {
        return $http.post("/recipes", x);
    }
    
    this.updateRecipe = function(item, index) {
        return $http.put(`/recipes/${item._id}`, item)
        .then(function(response) {
            return response.data
        })
    }
    
    this.deleteRecipe = function(id, index) {
        return $http.delete(`/recipes/${id}`);
    }
}])