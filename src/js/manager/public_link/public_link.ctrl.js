app.controller('PublicLinkCtrl', function ($scope, PublicLinkSvc, $routeParams, AccountSvc, ManagerSvc) {
	$scope.PublicLinkSvc=PublicLinkSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.ManagerSvc=ManagerSvc;
	$scope.$routeParams=$routeParams;

	PublicLinkSvc.init();
});