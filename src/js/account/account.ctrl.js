app.controller('AccountCtrl', function ($scope, AccountSvc, NavbarSvc, $routeParams) {
    $scope.AccountSvc=AccountSvc;
    $scope.NavbarSvc=NavbarSvc;
    $scope.$routeParams=$routeParams;

	AccountSvc.init();
});