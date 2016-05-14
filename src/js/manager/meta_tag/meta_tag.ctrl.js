app.controller('MetaTagCtrl', function ($scope, MetaTagSvc, $routeParams, AccountSvc, ManagerSvc) {
	$scope.MetaTagSvc=MetaTagSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.ManagerSvc=ManagerSvc;
	$scope.$routeParams=$routeParams;

	MetaTagSvc.init();
});