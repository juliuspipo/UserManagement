


(function () {
    'use strict';

    function modal ( $q, $uibModal ) {
        var api = {};



        api.openPermissions = function ( _scope ) {

            var modalLogin = $uibModal.open( {
                animation: true,
                windowClass: 'wibe-modal permissions',
                templateUrl:  'user-management/views/modals/permissions.tpl.html',
                scope: _scope,
                controller: 'PermissionsCtrl'
            } );

        };

        return api;
    }

    angular.module( 'userManagement.services' )
        .factory("ModalSrv", modal );



}());
