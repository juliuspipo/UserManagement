(function(){
    'use strict';

    function routerProviderConfig ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider

            .state('login', {
                url: "/login",
                templateUrl: "/user-management/views/partials/login.html",
                resolve: {
                    controllers: function ( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                            "./user-management/scripts/controllers/loginCtrl.js"
                        ]);
                    }
                }
            })



            .state('user-management', {
                url: "/user-management",
                templateUrl: "/user-management/views/partials/user-management.html",
                resolve: {
                    controllers: function ( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                            "./user-management/scripts/controllers/userManagementCtrl.js"
                        ]);
                    }
                }
            })



            .state('add-user', {
                url: "/add-user",
                templateUrl: "/user-management/views/partials/add-user.html",
                resolve: {
                    controllers: function ( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                            "./user-management/scripts/directives/application/application.js",
                            "./user-management/scripts/directives/permission/permission.js"
                        ]);
                    }
                }
            })



            .state('user-detail', {
                url: "/user-detail",
                templateUrl: "/user-management/views/partials/user-detail.html",
                resolve: {
                    controllers: function ( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                            "./user-management/scripts/directives/permission/permission.js"
                        ]);
                    }
                }
            });



    }

    angular.module( 'userManagement' )
        .config( routerProviderConfig );



})();
