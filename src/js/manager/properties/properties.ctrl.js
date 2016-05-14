app.controller('PropertiesCtrl', function ($scope, PropertiesSvc, $routeParams, AccountSvc, ManagerSvc) {
	$scope.PropertiesSvc=PropertiesSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.ManagerSvc=ManagerSvc;
	$scope.$routeParams=$routeParams;

	PropertiesSvc.init();
});