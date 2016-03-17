(function(){
    'use strict';

    function checkEmailCtrl ( $scope){

        function setup (){
            console.log("checkEmailCtrl");
        }

        setup();
    }

    angular.module( "checkEmail.controllers", [])
    .controller( "checkEmailCtrl", checkEmailCtrl );
})();
