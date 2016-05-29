app.controller('PublicLinkCtrl', function($scope, PublicLinkSvc, $routeParams, AccountSvc, ManagerSvc, AppLang) {
    $scope.PublicLinkSvc = PublicLinkSvc;
    $scope.AccountSvc = AccountSvc;
    $scope.ManagerSvc = ManagerSvc;
    $scope.$routeParams = $routeParams;
    $scope.AppLang = AppLang;

    PublicLinkSvc.init();
});