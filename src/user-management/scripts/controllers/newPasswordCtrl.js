(function(){
    'use strict';

    function newPasswordCtrl ( $scope){

        function setup (){
            console.log("newPasswordCtrl");
        }

        setup();
    }

    angular.module( "newPassword.controllers", [])
    .controller( "newPasswordCtrl", newPasswordCtrl );
})();
