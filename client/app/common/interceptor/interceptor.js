import angular from 'angular';
import APIInterceptor from './interceptor.service';

let interceptorModule = angular.module('interceptor', [])

.factory('APIInterceptor', APIInterceptor)
.config(($httpProvider) => {
    "ngInject";
    $httpProvider.interceptors.push(APIInterceptor.name);
});

export default interceptorModule;
