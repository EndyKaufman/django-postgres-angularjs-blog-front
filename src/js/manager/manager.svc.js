app.factory('ManagerSvc', function(AppConst, $routeParams, $route, AppSvc, gettextCatalog) {
    var service = {};

    service.setMeta = function() {
        AppSvc.setTitle([service.title, gettextCatalog.getString(AppConst.manager.strings.title)]);
        AppSvc.setDescription(service.description);
        AppSvc.setUrl('manager/' + $routeParams.subNavId);
    };

    service.initMeta = function() {
        angular.extend($routeParams, $route.current.$$route.params);

        service.title = gettextCatalog.getString(AppConst.manager[$routeParams.subNavId].title);
        service.description = gettextCatalog.getString(AppConst.manager[$routeParams.subNavId].description);
    };

    service.init = function(reload) {
        service.initMeta();
        service.setMeta();
    };
    return service;
});