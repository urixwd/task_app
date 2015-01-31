'use strict';
console.log("Scripts loading... ");

var app = angular.module("task_app", ['ngRoute'])
    .controller('Welcome', ['$scope', '$routeParams', function($scope, $routeParams) {
        //default...
        console.log('welcome...');
    }])
    .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/tasks.html',
                controller: 'TasksController'
            })
            .when('/default', {
                templateUrl: 'templates/default.html',
                controller: 'Welcome'
            })
//            .when('/get_feed/:id', {
//                templateUrl: '/angular_rss/templates/url_feed.html',
//                controller: 'FeedController'
//            })
            .otherwise({
                redirectTo: '/'
            });
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
app.run(['$rootScope', function($rootScope) {

}]);