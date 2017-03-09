angular.module("MyApp")

.service("RestaurantService", ["$http", function($http) {
    
    var self = this;
    self.restaurant = [];
    
    this.getRestaurant = function() {
        return $http.get("https://developers.zomato.com/api/v2.1/search?key=def05fa3e0ab82ba4566702c9f7853d4")
        .then(function(response) {
            self.restaurant = response.data;
            console.log(self.restaurant);
            return self.restaurant;
        })
    }
    
    this.getRestaurantCity = function(cities) {
        return $http.get("https://developers.zomato.com/api/v2.1/search?key=def05fa3e0ab82ba4566702c9f7853d4")
        .then(function(response) {
            self.restaurant = response.data.cities
        })
    }
}])