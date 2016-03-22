(function(){
    'use strict';



    function searchUsersCtrl ( $scope ){



        function setup (){
        }



        $scope.goAddUser = function () {
            $scope.goView("add-user");
        };



        setup();
    }



    angular.module( "userManagement.controllers", [])
    .controller( "searchUsersCtrl", searchUsersCtrl );



})();
