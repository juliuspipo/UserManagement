(function(){
    'use strict';



    function addUserCtrl ( $scope, ModalSrv ){



        function setup (){
        }


        $scope.openModalPermissions = function ( ){
            ModalSrv.openPermissions( $scope );
        };


        setup();
    }



    angular.module( "userManagement.controllers", [])
    .controller( "addUserCtrl", addUserCtrl );



})();
