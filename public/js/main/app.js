var app = angular.module("app.todos",[]);

app.controller("todoController",['$scope', function($scope){

    $scope.appName = "Todo Dashboard";
    $scope.todos = [
        {
            text:" Khoi tao du an, include thu vien bootstrap, fontawesome, angularjs, ...",
            isDone: true
        },
        {
            text:"Cai dat angularjs, app, controller, khoi tao du lieu ban dau",
            isDone: true
        },
        {
             text:"viec 4",
            isDone: false
        }
    ];

}]);