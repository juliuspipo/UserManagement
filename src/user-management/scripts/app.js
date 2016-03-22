( function(){
    'use strict';

    angular.module( "userManagement.controllers", [] );
    angular.module( "userManagement.directives", [] );
    angular.module( "userManagement.services", [] );
    angular.module( "userManagement.filters", [] );

    angular.module( "userManagement", [
        "ngAnimate",
        "ui.router",
        'oc.lazyLoad',
        'ui.bootstrap',

        "userManagement.controllers",
        "userManagement.directives",
        "userManagement.services",
        "userManagement.filters"
    ]);
})();
