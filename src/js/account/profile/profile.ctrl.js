app.controller('ProfileCtrl', function ($scope, ProfileSvc, $routeParams, AccountSvc) {
	$scope.ProfileSvc=ProfileSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.$routeParams=$routeParams;

	ProfileSvc.init();
});