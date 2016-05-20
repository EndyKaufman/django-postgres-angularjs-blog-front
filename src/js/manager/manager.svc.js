app.factory('ManagerSvc', function(AppConst, $routeParams, $route, AppSvc) {
    var service = {};
    service.init = function(reload) {
        angular.extend($routeParams, $route.current.$$route.params);

        service.title = AppConst.manager[$routeParams.subNavId].title;
        service.description = AppConst.manager[$routeParams.subNavId].description;

        AppSvc.setTitle([service.title, AppConst.manager.strings.title]);
        AppSvc.setDescription(service.description);
        AppSvc.setUrl('manager/' + $routeParams.subNavId);
    };
    return service;
});