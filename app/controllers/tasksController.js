app.controller('TasksController', ['$scope', 'tasks_ser', function($scope, tasks_ser){
    console.log('tasks');
    //alert('tasks');
    $scope.data = [
        {name: 'task1', desc:'do something'},
        {name: 'task3', desc:'do sometdsadasdhing'},
        {name: 'task2', desc:'do something else'}
    ];
    $scope.tasks_ser = tasks_ser;
}]);
