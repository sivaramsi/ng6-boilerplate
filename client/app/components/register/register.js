import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registerComponent from './register.component';

let registerModule = angular.module('register', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('register', {
      url: '/register',
      template: '<register></register>'
    });
})

.component('register', registerComponent);


export default registerModule;
