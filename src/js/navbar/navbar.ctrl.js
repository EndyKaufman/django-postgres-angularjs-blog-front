app.controller('NavbarCtrl', function ($scope, NavbarSvc, SearchSvc, PublicLinkSvc, $routeParams) {
	$scope.NavbarSvc=NavbarSvc;
	$scope.SearchSvc=SearchSvc;
	$scope.PublicLinkSvc=PublicLinkSvc;
	$scope.$routeParams=$routeParams;

    NavbarSvc.init();
    PublicLinkSvc.load();
});