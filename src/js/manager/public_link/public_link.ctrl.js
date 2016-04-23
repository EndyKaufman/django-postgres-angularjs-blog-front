app.controller('PublicLinkCtrl', function ($scope, PublicLinkSvc, $routeParams, AccountSvc, TagSvc) {
	$scope.PublicLinkSvc=PublicLinkSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.TagSvc=TagSvc;
	$scope.$routeParams=$routeParams;

    TagSvc.load();
	PublicLinkSvc.init();
});