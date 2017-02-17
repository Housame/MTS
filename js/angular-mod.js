/**
 * Created by Housam on 2017-02-15.
 */
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "ng-parts/main.html"
        })
        .when("/sten", {
            templateUrl : "ng-parts/RPS-game.html"
        })
        .when("/memory", {
            templateUrl : "ng-parts/memory-game.html"
        })
        .otherwise({
            redirectTo: '/',
            templateUrl: "ng-parts/main.html"
        })

});