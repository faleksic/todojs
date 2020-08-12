"use strict";

angular
  .module("todoApp.todo", ["ngRoute"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "todo/todo.html",
        controller: "TodoCtrl",
      });
    },
  ])

  .controller("TodoCtrl", [
    function () {
      console.log("TodoCtrl");
    },
  ]);
