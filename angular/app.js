var app = angular.module("myApp",[]);

app.service("myService",function () {
  this.click = function () {
    alert("HELLO WORLD");
  }
});

app.factory("myFactory",function () {
  return{
    area: function(radius){
      return 2 * this.PI * radius;
    },
    PI : "3.14"
  };
});

app.controller("myController",function ($scope) {
  $scope.myModel = "hello this is angular";
});

app.controller("mynewController",function ($scope) {
  $scope.clicked = function () {
    alert("hello");
  }
});

app.controller("mynewController2",function ($scope,myService ) {
  $scope.click = function () {
    myService.click();
  }
});

app.controller("mynewController3",function ($scope,myFactory ) {
  $scope.radius = 3;
  $scope.getarea = function () {
    alert(myFactory.area($scope.radius));
  }
});

app.controller("mynewController4",function ($scope,myService ) {
  $scope.showDiv = true;
});

app.controller("mynewController5",function ($scope) {
  $scope.students = [
    {
      name : "Student 1",
      section : "12",
    },
    {
      name : "Student 2",
      section : "10",
    },
    {
      name : "Student 3",
      section : "11",
    }
  ]
});