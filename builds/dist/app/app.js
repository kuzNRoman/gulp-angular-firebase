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
        .constant('FIREBASE_URL', 'https://fitng-ea8bc.firebaseio.com/')

        Config.$inject = ['$routeProvider', '$locationProvider', '$logProvider'];

        function Config($routeProvider, $locationProvider, $logProvider){
            $routeProvider.
                otherwise({ redirectTo: '/'});
            $locationProvider.html5Mode(true);
            //$logProvider.debugEnabled(true);
        }

})();


;(function (){
    "use strict";

    angular
        .module('ngFit.about', ['ngRoute'])
        .config(['$routeProvider', config])
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['$scope', '$rootScope', '$log'];

    function AboutCtrl($scope, $rootScope) {

        var vm = this;
        $rootScope.curPath = 'about';


    };

    function config($routeProvider){
        $routeProvider.
          when('/about', {
            templateUrl: 'app/about/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'vm'    //это не тот vm, что в переменной var
        });
    };

})();
;(function (){
    'use strict';

    angular.module('ngFit.contact', ['ngRoute'])
        .config(['$routeProvider', config])
        .controller('ContactCtrl', ContactCtrl);

    ContactCtrl.$inject = ['$scope', '$rootScope', '$log'];

    function ContactCtrl($scope, $rootScope, $log) {

        var vm = this;
        $rootScope.curPath = 'contact';

    };

    function config($routeProvider){
        $routeProvider.
        when('/contact', {
            templateUrl: 'app/contact/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'vm'    //это не тот vm, что в переменной var
        });
    };

})();

;(function (){
    "use strict";

    angular
        .module('ngFit.main', ['ngRoute'])
        .config(configMain)
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$rootScope', '$log', '$firebaseObject', 'FIREBASE_URL'];

    function MainCtrl($scope, $rootScope, $log, FIREBASE_URL, $firebaseObject) {
        console.log('ctrl', FIREBASE_URL);
        var vm = this;
// FIREBASE
        var ref = new Firebase(FIREBASE_URL);
        var refObj = $firebase(ref).$asObject();

        refObj.$loaded(function () {
            vm.db = refObj;
        });

        $rootScope.curPath = 'main';

        vm.url = FIREBASE_URL;
        vm.title = 'Это приветственная страница';
        vm.name = 'Loftschool';
        $scope.clickFunction = function(name) {
            alert('Hi, '+ name);
        };

    };

    configMain.$inject = ['$routeProvider', 'FIREBASE_URL'];

    function configMain($routeProvider, FIREBASE_URL){
        $routeProvider.
        when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'    //это не тот vm, что в переменной var
        });
        console.log('config', FIREBASE_URL);
    };

})();
;(function () {
    "use strict";

    angular
        .module('ngFit.navbar',[
            'ngRoute'
        ]);

})();