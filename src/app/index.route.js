(function() {
  'use strict';

  angular
    .module('foodPantry')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
