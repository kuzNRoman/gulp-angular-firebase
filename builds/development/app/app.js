$.material.init();

//Создание модуля
(function() {
    'use strict';

    angular
        .module('ngFit', ['ngRoute',
                          'firebase',
                          'ngFit.main',
                          'ngFit.contact',
                          'ngFit.about'
        ])
        .config(Config)
        .constant('FIREBASE_URL', 'https://fitng-ea8bc.firebaseio.com')

        Config.$inject = ['$routeProvider', '$locationProvider', '$logProvider'];

        function Config($routeProvider, $locationProvider, $logProvider){
            $routeProvider.
                otherwise({ redirectTo: '/'});
            $locationProvider.html5Mode(true);
            //$logProvider.debugEnabled(true);
        }

})();

