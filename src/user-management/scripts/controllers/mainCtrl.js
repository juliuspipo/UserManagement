(function(){
    'use strict';

    function mainCtrl ( $scope, $rootScope, $state ){

        function setup (){
            setupVars();
        }

        function setupVars () {
            $scope.model = {};
            $scope.model.lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos porro blanditiis enim doloremque deserunt voluptatem ducimus quam, numquam tenetur, quibusdam maiores commodi laboriosam corporis, quo animi temporibus aut nisi recusandae.";
            $scope.visibilityExit = false;
        }



        setup();
    }

    angular.module( "userManagement.controllers", [])
    .controller( "mainCtrl", mainCtrl );
})();
