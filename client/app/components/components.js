import angular from 'angular';

import Login from './login/login';
import Register from './register/register';
import Home from './home/home';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Login.name,
  Register.name,
  Home.name,
  About.name
]);

export default componentModule;
