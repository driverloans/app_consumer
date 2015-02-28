'use strict';

angular.module('driverloansApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rates', {
        url: '/rates',
        templateUrl: 'app/rates/rates.html',
        controller: 'RatesCtrl'
      });
  });