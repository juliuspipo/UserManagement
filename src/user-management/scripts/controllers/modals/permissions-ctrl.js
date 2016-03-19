


(function () {
    'use strict';



    function PermissionsCtrl ( $scope, $uibModalInstance ) {



        function setup () {
        }



        $scope.closeModal = function () {
            $uibModalInstance.close();
        };



        setup();



    }



    angular.module( 'userManagement.controllers' )
        .controller( 'PermissionsCtrl', PermissionsCtrl );



}());
