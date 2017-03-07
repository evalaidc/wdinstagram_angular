"use strict";

// (function(){
//   angular.module("wdinstagram", [])
// })();

angular
  .module("wdinstagram", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("GramIndexController", [
    GramIndexControllerFunction
  ])


  function RouterFunction($stateProvider){
    $stateProvider
    .state("GramIndex", {
      url: "/grams",
      templateUrl: "js/ng-views/index.html",
      controller: "GramIndexController",
      controllerAs: "vm"
    })
  }


  function GramIndexControllerFunction()
