/**
 * Created by Housam on 2017-02-15.
 */
/*Angular method of calling parts*/

/*Angular module*/
var app = angular.module("myApp", ["ngRoute"]);

/*Angular controller*/
app.config(function($routeProvider) {
    $routeProvider
        .when("/tictactoe", {
            templateUrl : "ng-parts/tictactoe.html"
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