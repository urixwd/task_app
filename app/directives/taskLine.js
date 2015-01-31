app.directive('taskLine', function(){
    return {
        restrict: 'E',
        scope: {
            task: "=task"
        },
        templateUrl: 'templates/taskLine.html'
    };
});
