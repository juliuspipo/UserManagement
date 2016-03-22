


(function () {
    'use strict';



    function PermissionsCtrl ( $scope, $uibModalInstance, roles ) {



        function setup () {
            setupVars ();
        }



        $scope.closeModal = function () {
            $uibModalInstance.dismiss();
        };



        $scope.addRol = function ( _selectedRol ) {
            $uibModalInstance.close( _selectedRol );
        };



        function setupVars () {
            $scope.roles = roles;
        }



        setup();



    }



    angular.module( 'userManagement.controllers' )
        .controller( 'PermissionsCtrl', PermissionsCtrl );



}());
