(function(){
    'use strict';



    function mainCtrl ( $scope, $state ){



        function setup (){
            setupVars();
        }


        $scope.goView = function ( _state ) {
            $state.go( _state );
        };



        function setupVars () {
            $scope.model = {};
            $scope.visibilityExit = false;
        }



        setup();
    }




    angular.module( "userManagement.controllers", [])
    .controller( "mainCtrl", mainCtrl );
})();
