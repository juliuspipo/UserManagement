


(function () {
    'use strict';

    function modal ( $q, $uibModal ) {
        var api = {};



        api.openPermissions = function ( _roles ) {
            var defered = $q.defer();
            var promise = defered.promise;

            var modalLogin = $uibModal.open( {
                animation: true,
                windowClass: 'wibe-modal permissions',
                templateUrl:  'user-management/views/modals/permissions.tpl.html',
                controller: 'PermissionsCtrl',
                resolve: {
                    roles: function () {
                        return _roles;
                    }
                }
            } );

            modalLogin.result
                .then(function ( _selectedRol ) {
                    defered.resolve( _selectedRol );
                }, function () {
                    defered.reject();
                });
            return promise;

        };

        return api;
    }

    angular.module( 'userManagement.services' )
        .factory("ModalSrv", modal );



}());
