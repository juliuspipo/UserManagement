(function(){
    'use strict';



    function permission() {



        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './user-management/scripts/directives/permission/permission.tpl.html',
            scope:{
                permission: "=",
                onClick: "="
            }
        };



    }



    angular.module( 'userManagement.directives' )
    .directive( 'permission', permission );



}());
