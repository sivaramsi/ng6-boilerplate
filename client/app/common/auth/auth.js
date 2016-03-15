import angular from 'angular';
import AuthFactory from './auth.factory';

let authModule = angular.module('auth', [])

.factory('Auth', AuthFactory);

export default authModule;
