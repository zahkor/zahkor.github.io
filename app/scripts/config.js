/**
 * Created by root on 15/12/16.
 */

'use strict';

function configState($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");

    $stateProvider
    // Home - Main page
        .state('home', {
            url: "/home",
            templateUrl: "../index.html",
            data:{
                pageTitle: "Administration"
            }
        })

}

angular
    .module('app')
    .config(configState);