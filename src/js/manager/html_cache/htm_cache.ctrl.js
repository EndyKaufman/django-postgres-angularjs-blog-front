app.controller('HtmlCacheCtrl', function($scope, HtmlCacheSvc, $routeParams, AccountSvc, ManagerSvc, AppLang, ScanSitemapSvc) {
    $scope.HtmlCacheSvc = HtmlCacheSvc;
    $scope.AccountSvc = AccountSvc;
    $scope.ManagerSvc = ManagerSvc;
    $scope.$routeParams = $routeParams;
    $scope.AppLang = AppLang;
    $scope.ScanSitemapSvc = ScanSitemapSvc;

    HtmlCacheSvc.init();
});