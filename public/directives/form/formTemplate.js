angular.module("MyApp")
.directive("formTemplate", function() {
    return{
        restrict:"E",
        templateUrl:"directives/form/form-template.html"
    }
})