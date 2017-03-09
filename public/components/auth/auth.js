angular.module("MyApp.Auth", ["ngRoute", "ngStorage"])

.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/signup", {
        templateUrl: "components/auth/signup/signup.html",
        controller: "SignupController"
    })
    .when("/login", {
        templateUrl: "components/auth/login/login.html",
        controller: "LoginController"
    })
    .when("/logout", {
        template: "",
        controller: "LogoutController"
    });
}])

.service("TokenService", ["$localStorage", function($localStorage) {
    this.setToken = function(token) {
        $localStorage.token = token;
    }
    
    this.getToken = function() {
        return $localStorage.token;
    }
    
    this.removeToken = function() {
        delete $localStorage.token;
    };
}])

.service("UserService", ["$http", "$location", "$localStorage", "TokenService", function($http, $location, $localStorage, TokenService) {
    var self = this;
    
    this.user = $localStorage.user || {};
    
    this.signup = function(user) {
        return $http.post("/auth/signup", user);
    };
    
    this.login = function(user) {
        return $http.post("/auth/login", user).then(function(response) {
            TokenService.setToken(response.data.token);
            $localStorage.user = response.data.user;
            self.user = response.data.user;
            return response.data;
        });
    };
    
    this.logout = function() {
        TokenService.removeToken();
        $location.path("/";)
    };
    
    this.isAuthenticated = function() {
        return !!TokenService.getToken();
    };
}])

.service("AuthInterceptor", ["q", "$location", "TokenService", function($q, $location, TokenService) {
    this.request = function(config) {
        var token = TokenService.getToken();
        if(token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer" + token;
        }
        return config;
    };
    
    this.responseError = function(response) {
        if(response.status === 401) {
            TokenService.removeToken();
            $location.path("/login");
        }
        return $q.reject(response);
    }
}])

.config(["$httpProvider", function($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
    
}]);