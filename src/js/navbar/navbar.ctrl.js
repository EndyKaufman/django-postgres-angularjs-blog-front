app.controller('NavbarCtrl', function ($scope, NavbarSvc, SearchSvc, PublicLinkSvc) {
	$scope.NavbarSvc=NavbarSvc;
	$scope.SearchSvc=SearchSvc;
	$scope.PublicLinkSvc=PublicLinkSvc;

    PublicLinkSvc.load();
    NavbarSvc.init();
});