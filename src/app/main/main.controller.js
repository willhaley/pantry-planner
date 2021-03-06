(function() {
  'use strict';

  angular
    .module('foodPantry')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $mdDialog) {
    var vm = this;




/*
    $('#customButton').on('click', function(e) {
      // Open Checkout with further options
      handler.open({
        name: 'Demo Site',
        description: '2 widgets',
        amount: 2000
      });
      e.preventDefault();
    });

    // Close Checkout on page navigation
    $(window).on('popstate', function() {
      handler.close();
    });
*/

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1447249605756;
    vm.showToastr = showToastr;

    vm.months = [
      {'abbr':'Jan',  'name': 'January',    'remaining': 0,
        'family':[
          {'filled':'Will Haley'},
          {'filled':'Will Haley'},
          {'filled':'Will Haley'},
          {'filled':'Unknown'},
          {'filled':0},
          {'filled':0},
          {'filled':0},
        ]  },
      {'abbr':'Feb',  'name': 'Feb',        'remaining': 0  },
      {'abbr':'Mar',  'name': 'March',      'remaining': 0 },
      { 'abbr':'Apr',
        'name': 'April',
        'remaining': 9,
        'family':[ {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':'Unknown'},{'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}],
        'single':[ {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':'Unknown'},{'filled':'unknown'}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}],
        'diapers':[ {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':'Unknown'},{'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}],
        'formula':[ {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':'Unknown'},{'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0},],
      },
      { 'abbr':'May',
        'name': 'May',
        'remaining': 3,
        'family':[ {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':0}, {'filled':0},{'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}],
        'single':[ {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':0}, {'filled':0},{'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}],
        'diapers':[ {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':'Unknown'},{'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}],
        'formula':[ {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':'Will Haley'}, {'filled':'Unknown'},{'filled':0}, {'filled':0}, {'filled':0}, {'filled':0}, {'filled':0},],
      },
      {'abbr':'June', 'name': 'June',       'remaining': 2  },
      {'abbr':'July', 'name': 'July',       'remaining': 10 },
      {'abbr':'Aug',  'name': 'August',     'remaining': 10 },
      {'abbr':'Sep',  'name': 'September',  'remaining': 10 },
      {'abbr':'Oct',  'name': 'October',    'remaining': 10 },
      {'abbr':'Nov',  'name': 'November',   'remaining': 10 },
      {'abbr':'Dec',  'name': 'December',   'remaining': 10 }
    ];

    vm.currentMonth = vm.months[3];

    vm.selectMonth = function( index ){
      vm.currentMonth = vm.months[index];
    };

    vm.showSubscruptionOptions = function(ev, type ){

      $mdDialog.show({
        controller: function () {
          var view = this;

          var handler = StripeCheckout.configure({
            key: 'pk_test_b7drTMr7VeLSYqglFulu4V7k',
            image: 'assets/images/noun_28774_cc.png',
            locale: 'auto',
            token: function (token) {
              // Use the token to create the charge with a server-side script.
              // You can access the token ID with `token.id`
            }
          });

          view.newSub = function (type, term) {
            handler.open({
              name: type + ' ' + term + ' Bag',
              description: 'The most awesomest plan',
              amount: 1500
            });

          };
        }
            ,
            templateUrl: 'app/components/subscriptionOptions/subscriptionOptions.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            controllerAs: 'view'
          })
          .then(function(answer) {
              alert('asdf');
          }, function() {

          });
    };

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
