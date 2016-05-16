app.controller('HtmlCacheCtrl', function ($scope, HtmlCacheSvc, $routeParams, AccountSvc, ManagerSvc) {
	$scope.HtmlCacheSvc=HtmlCacheSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.ManagerSvc=ManagerSvc;
	$scope.$routeParams=$routeParams;

	HtmlCacheSvc.init();
});