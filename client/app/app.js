import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'bootstrap/dist/css/bootstrap.css';
import uiBootstrap from 'angular-ui-bootstrap';
import ngMessages from 'angular-messages';


import Common from './common/common';
import Components from './components/components';
import 'normalize.css';
import './bower_components/ladda/dist/spin.min.js';
import AppComponent from './app.component';


let enviornment = {
    'local': {
        serverURL: 'http://192.168.1.46:9999/api/',
        static_assets_url: 'http://192.168.1.46:9999/static/assets/'
    },
    'prod': {
        serverURL: 'http://api.wp.report:9999',
        static_assets_url: 'http://api.wp.report:9999/static/assets/'
    }
};

let selectedEnv = enviornment['local'];
let selectedServerURL = selectedEnv.serverURL;


angular.module('app', [
        uiRouter,
        uiBootstrap,
        ngMessages,
        Common.name,
        Components.name
    ])
    .config(($locationProvider) => {
        "ngInject";
    })
    .constant('SERVERURL', selectedServerURL)
    // .run(initApp)
    .component('app', AppComponent);


// function initApp($rootScope, Auth, $state) {
//     "ngInject";
//     $rootScope.$on('$stateChangeStart', function(event, toState) {
//         if (toState.name !== 'login' && toState.name !== 'register') {
//             if (!Auth.isAuthenticated(Auth)) {
//                 event.preventDefault();
//                 $state.go('login');
//             }
//         }
//         if (toState.name === 'login' || toState.name === 'register') {
//             if (Auth.isAuthenticated()) {
//                 event.preventDefault();
//                 $state.go('home');
//             }
//         }
//         if (toState.redirectTo) {
//             event.preventDefault();
//             $state.go(toState.redirectTo);
//         }
//     });
// }
