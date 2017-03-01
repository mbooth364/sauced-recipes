angular.module("MyApp")
.filter("menu", function() {
    return function(input, menu) {
        var filtered = input.filter(function(item) {
            return item.menu === menu;
        });
        return filtered;
    }
})