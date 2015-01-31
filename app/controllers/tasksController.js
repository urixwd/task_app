app.controller('TasksController', ['$scope', function($scope){
    console.log('tasks');
    //alert('tasks');
    $scope.data = [
        {name: 'task1', desc:'do something'},
        {name: 'task3', desc:'do sometdsadasdhing'},
        {name: 'task2', desc:'do something else'}
    ];
}]);
