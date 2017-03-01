angular.module("MyApp")

.service("recipeService", ["$http", function($http) {
    
    var self = this;
    
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
    
    this.getSingleRecipe = function(_id, index) {
        return $http.get(`/recipes/${_id}`)
        .then(function(response) {
            self.recipeList = response.data;
            return self.recipeList;
        })
    }
    
    this.deleteRecipe = function(id, index) {
        return $http.delete(`/recipes/${id}`);
    }
}])