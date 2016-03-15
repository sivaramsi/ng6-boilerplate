import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Auth from './auth/auth';
import Interceptor from './interceptor/interceptor';

let commonModule = angular.module('app.common', [
    Interceptor.name,
    Navbar.name,
    Hero.name,
    User.name,
    Auth.name
]);

export default commonModule;
