app.factory('NavbarSvc', function($routeParams, $route, $rootScope, $location, $window, AppConst, AppSvc) {
    var service = {};

    service.goBack = function() {
        if ($window.history.length > 0)
            $window.history.back();
        else
            service.goHome();
    };
    service.goHome = function() {
        $location.path(AppSvc.currentLangUrlPrefix + AppConst.home.url);
    };

    service.getItemByName = function() {};

    service.init = function() {
        service.items = AppConst.navbar;
    };

    return service;
});