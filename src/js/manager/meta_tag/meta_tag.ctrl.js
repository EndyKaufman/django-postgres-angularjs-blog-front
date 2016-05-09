app.controller('MetaTagCtrl', function ($scope, MetaTagSvc, $routeParams, AccountSvc, TagSvc, ManagerSvc) {
	$scope.MetaTagSvc=MetaTagSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.TagSvc=TagSvc;
	$scope.ManagerSvc=ManagerSvc;
	$scope.$routeParams=$routeParams;

    TagSvc.load();
	MetaTagSvc.init();
});