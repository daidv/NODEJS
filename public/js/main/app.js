var app = angular.module("app.todos",["xeditable"]);

app.controller("todoController",['$scope','svTodos', function($scope, svTodos){

    $scope.appName = "Todo Dashboard";
    $scope.formData = {};
    $scope.loading = true;

    $scope.todos = [];

    // load data form api
    
    svTodos.get().then(function(res){
        $scope.todos = res.data;
        $scope.loading = false;
    }); 

    $scope.createTodo = function(){
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
       svTodos.create(todo).then(function successCallback(res){
            $scope.todos = res.data;
           $scope.formData.text = "";
       });
       $scope.loading = false;
    }

    $scope.updateTodo = function(todo){
        console.log("Update todo: ", todo);
    }

    $scope.deleteTodo = function(todo){
        console.log("deleteTodo", todo)
    }

}]);