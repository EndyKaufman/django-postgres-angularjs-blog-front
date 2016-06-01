app.controller('PropertiesCtrl', function($scope, PropertiesSvc, $routeParams, AccountSvc, ManagerSvc, FileSvc, AppLang) {
    $scope.PropertiesSvc = PropertiesSvc;
    $scope.AccountSvc = AccountSvc;
    $scope.ManagerSvc = ManagerSvc;
    $scope.$routeParams = $routeParams;
    $scope.FileSvc = FileSvc;
    $scope.AppLang = AppLang;

    PropertiesSvc.init();
});