(function(){
    'use strict';



    function application() {



        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './user-management/scripts/directives/application/application.tpl.html',
            scope:{
            },
            link:function ( $scope ){
            }



        };



    }



    angular.module( 'userManagement.directives' )
    .directive( 'application', application );



}());
