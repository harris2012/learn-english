var app = angular.module('nuist', ['ngResource', 'ui.router', 'ui.bootstrap']);

app.config(route);

app.service('LearnEnglishService', ['$resource', '$q', LearnEnglishService]);


