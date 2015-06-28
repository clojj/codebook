'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);



var idx = lunr(function () {
    this.field('title', { boost: 10 });
    this.field('body')
});

var doc = {
    "title": "Twelfth-Night",
    "body": "If music be the food of love, play on: Give me excess of it…",
    "author": "William Shakespeare",
    "id": 1
};
idx.add(doc);
idx.add({
    "title": "b",
    "body": "love is all around",
    "author": "Me",
    "id": 2
});

var result = idx.search('love')[0];
alert(result.ref + " score " + result.score);