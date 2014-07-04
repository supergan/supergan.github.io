
console.log("--> app.js run");

var app = angular.module('faaSurvey', ['ngRoute']);
 
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'SurveyControlSubmit',
      templateUrl:'tpl/SurveyControlSubmit.html'
    })
    .when('/RSRecFileUpload', {
      controller:'RSRecFileUpload',
      templateUrl:'tpl/RSRecFileUpload.html'
    })
    .otherwise({
      redirectTo:'/'
    });
});