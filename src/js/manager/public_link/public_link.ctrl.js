app.controller('PublicLinkCtrl', function ($scope, PublicLinkSvc, $routeParams, AccountSvc) {
	$scope.PublicLinkSvc=PublicLinkSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.$routeParams=$routeParams;

	PublicLinkSvc.init();
});