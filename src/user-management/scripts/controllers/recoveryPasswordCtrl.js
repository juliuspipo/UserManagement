(function(){
    'use strict';

    function recoveryPasswordCtrl ( $scope){

        function setup (){
            console.log("recoveryPasswordCtrl");
        }

        setup();
    }

    angular.module( "recoveryPassword.controllers", [])
    .controller( "recoveryPasswordCtrl", recoveryPasswordCtrl );
})();
