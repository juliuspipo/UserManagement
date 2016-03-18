(function(){
    'use strict';



    function searchUsersCtrl ( $scope){



        function setup (){
            console.log("searchUsersCtrl");
        }



        setup();
    }



    angular.module( "userManagement.controllers", [])
    .controller( "searchUsersCtrl", searchUsersCtrl );



})();
