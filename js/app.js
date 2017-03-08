"use strict";



let gramData = [
  {photo_url: "http://yhwiki.com/images/thumb/8/86/Power-rangers-megaforce.jpg/300px-Power-rangers-megaforce.jpg" , author: "Eric", body: "Power Rangers MegaForce"},
  {photo_url: "http://yhwiki.com/images/thumb/2/2c/Power-rangers-dino-charge.jpg/300px-Power-rangers-dino-charge.jpg", author: "Bedig", body: "Power Rangers Dino Charge"},
  {photo_url: "https://i.ytimg.com/vi/dW-HTrFcEYI/maxresdefault.jpg", author: "Hannah", body: "Mighty Morphin Power Rangers"},
  {photo_url: "https://s-media-cache-ak0.pinimg.com/736x/e6/16/87/e61687196107e965494c54cc0094a195.jpg", author: "Hab", body: "Power Rangers in Space"},

]



angular
  .module("wdinstagramApp", ['ui.router'])
  .config(["$stateProvider", RouterFunction])
  .controller("GramIndexController", [
    GramIndexControllerFunction
  ])


  function RouterFunction($stateProvider){
    console.log("Router setup correctly")
    // $stateProvider
    // .state("GramIndex", {
    //   url: "/grams",
    //   templateUrl: "js/ng-views/index.html",
    //   controller: "GramIndexController",
    //   controllerAs: "vm"
    // })
  }


  function GramIndexControllerFunction(gramData) {
    this.grams = gramData
  }
