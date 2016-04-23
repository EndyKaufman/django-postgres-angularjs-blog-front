app.controller('MetaTagCtrl', function ($scope, MetaTagSvc, $routeParams, AccountSvc, TagSvc) {
	$scope.MetaTagSvc=MetaTagSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.TagSvc=TagSvc;
	$scope.$routeParams=$routeParams;

    TagSvc.load();
	MetaTagSvc.init();
});