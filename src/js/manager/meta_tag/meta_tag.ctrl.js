app.controller('MetaTagCtrl', function ($scope, MetaTagSvc, $routeParams, AccountSvc) {
	$scope.MetaTagSvc=MetaTagSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.$routeParams=$routeParams;

	MetaTagSvc.init();
});