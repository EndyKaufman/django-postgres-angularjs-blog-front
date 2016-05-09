app.controller('PublicLinkCtrl', function ($scope, PublicLinkSvc, $routeParams, AccountSvc, TagSvc, ManagerSvc) {
	$scope.PublicLinkSvc=PublicLinkSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.TagSvc=TagSvc;
	$scope.ManagerSvc=ManagerSvc;
	$scope.$routeParams=$routeParams;

    TagSvc.load();
	PublicLinkSvc.init();
});