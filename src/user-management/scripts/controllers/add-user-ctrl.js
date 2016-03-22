(function(){
    'use strict';



    function addUserCtrl ( $scope, ModalSrv ){



        function setup (){
            setupVars();
            $scope.model.imageProfile = "imagen";
        }



        $scope.sendImageProfile = function () {
            console.log( $scope.model.file );
        };



        $scope.removeApplication = function ( _application ){
            _.filter( $scope.model.aggregatesRoles, function( application, index ){
                if( application === _application ){
                    $scope.model.aggregatesRoles.splice( index, 1);
                    $scope.model.applications.push( _application.application );
                    return;
                }
            });
        };



        $scope.addApplication = function ( _application ) {
            ModalSrv.openPermissions( _application.roles )
                .then( function( _selectedRol ){
                    var objAppRolSelected = {
                        application: _application,
                        rol: _selectedRol
                    };
                    $scope.model.aggregatesRoles.push( objAppRolSelected );
                    removeApplicationFromApplicationsList( _application );
                });
        };



        function removeApplicationFromApplicationsList ( _application ){
            _.find( $scope.model.applications, function ( application, index ){
                if( angular.equals( application, _application ) ){
                    $scope.model.applications.splice( index, 1 );
                    return;
                }
            });
        }



        function setupVars () {
            $scope.model.imageProfile = "imagen";
            $scope.model.aggregatesRoles = [];
            $scope.model.applications = [
                {
                    name: "Gestion de usuarios",
                    roles: [
                        { name: "Super usuario" }
                    ]
                },
                {
                    name: "Cupones",
                    roles: [
                        { name: "Usuario comercial" },
                        { name: "Usuario tecnico" },
                        { name: "Usuario administrador" }
                    ]
                },
                {
                    name: "Campañas",
                    roles: [
                        { name: "Usuario comercial campaña" },
                        { name: "Usuario tecnico campaña" },
                        { name: "Usuario administrador campaña" }
                    ]
                }
            ];
        }



        setup();
    }



    angular.module( "userManagement.controllers", [])
    .controller( "addUserCtrl", addUserCtrl );



})();
