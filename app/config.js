app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider
        .when('/tasks', {
            templateUrl: 'templates/tasks.html',
            controller: 'TasksController'
        })
        .when('/', {
            templateUrl: 'templates/default.html',
            controller: 'Welcome'
        })
        .otherwise({
            redirectTo: '/'
        });
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);