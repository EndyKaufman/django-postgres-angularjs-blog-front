app.controller('HtmlCacheCtrl', function($scope, HtmlCacheSvc, $routeParams, AccountSvc, ManagerSvc, AppLang) {
    $scope.HtmlCacheSvc = HtmlCacheSvc;
    $scope.AccountSvc = AccountSvc;
    $scope.ManagerSvc = ManagerSvc;
    $scope.$routeParams = $routeParams;
    $scope.AppLang = AppLang;

    HtmlCacheSvc.init();
});