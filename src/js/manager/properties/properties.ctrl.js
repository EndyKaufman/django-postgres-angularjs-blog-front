app.controller('PropertiesCtrl', function($scope, PropertiesSvc, $routeParams, AccountSvc, ManagerSvc, AppLang) {
    $scope.PropertiesSvc = PropertiesSvc;
    $scope.AccountSvc = AccountSvc;
    $scope.ManagerSvc = ManagerSvc;
    $scope.$routeParams = $routeParams;
    $scope.AppLang = AppLang;

    PropertiesSvc.init();
});