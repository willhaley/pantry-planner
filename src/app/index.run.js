(function() {
  'use strict';

  angular
    .module('foodPantry')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
