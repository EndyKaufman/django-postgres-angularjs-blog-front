app.controller('MetaTagCtrl', function($scope, MetaTagSvc, $routeParams, AccountSvc, ManagerSvc, AppLang) {
    $scope.MetaTagSvc = MetaTagSvc;
    $scope.AccountSvc = AccountSvc;
    $scope.ManagerSvc = ManagerSvc;
    $scope.$routeParams = $routeParams;
    $scope.AppLang = AppLang;

    MetaTagSvc.init();
});