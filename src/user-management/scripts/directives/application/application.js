(function(){
    'use strict';



    function application() {



        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './user-management/scripts/directives/application/application.tpl.html',
            scope:{
                application: '=',
                onClick: '='
            }
        };



    }



    angular.module( 'userManagement.directives' )
    .directive( 'application', application );



}());
