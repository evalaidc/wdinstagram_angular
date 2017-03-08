"use strict";



let gramData = [
  {id: 0, photo_url: "http://yhwiki.com/images/thumb/8/86/Power-rangers-megaforce.jpg/300px-Power-rangers-megaforce.jpg" , author: "Eric", body: "Power Rangers MegaForce"},
  {id: 1, photo_url: "http://yhwiki.com/images/thumb/2/2c/Power-rangers-dino-charge.jpg/300px-Power-rangers-dino-charge.jpg", author: "Bedig", body: "Power Rangers Dino Charge"},
  {id: 2, photo_url: "https://i.ytimg.com/vi/dW-HTrFcEYI/maxresdefault.jpg", author: "Hannah", body: "Mighty Morphin Power Rangers"},
  {id: 3, photo_url: "https://s-media-cache-ak0.pinimg.com/736x/e6/16/87/e61687196107e965494c54cc0094a195.jpg", author: "Hab", body: "Power Rangers in Space"}

]



angular
  .module("wdinstagram", [
    "ui.router",
    "ngResource"
  ])
  .config(["$stateProvider", RouterFunction])
  .factory("GramFactory", [
    "$resource",
    GramFactoryFunction
  ])
  .controller("GramIndexController", [
    "GramFactory",
    GramIndexControllerFunction
  ])
  .controller("GramShowController", [
    "GramFactory",
    "$stateParams",
    GramShowControllerFunction
  ])


  function RouterFunction($stateProvider){
    $stateProvider
    .state("gramIndex", {
      url: "/grams",
      templateUrl: "js/ng-views/index.html",
      controller: "GramIndexController",
      controllerAs: "vm"
    })
    .state("gramShow", {
      url: "/grams/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "GramShowController",
      controllerAs: "vm"
    })
  }

  function GramFactoryFunction($resource){
    return  $resource("http://localhost:3000/entries/:id")
  }

  function GramIndexControllerFunction(GramFactory) {
    this.grams = GramFactory.query();
  }

  function GramShowControllerFunction(GramFactory, $stateParams) {
    this.gram = GramFactory.get({id: $stateParams.id});
  }
