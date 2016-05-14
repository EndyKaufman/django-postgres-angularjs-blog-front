app.controller('UserAppCtrl', function ($scope, UserAppSvc, $routeParams, AccountSvc) {
	$scope.UserAppSvc=UserAppSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.$routeParams=$routeParams;

	UserAppSvc.init();
});