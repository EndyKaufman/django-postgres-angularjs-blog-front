app.controller('PropertiesCtrl', function ($scope, PropertiesSvc, $routeParams, AccountSvc, TagSvc) {
	$scope.PropertiesSvc=PropertiesSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.TagSvc=TagSvc;
	$scope.$routeParams=$routeParams;

    TagSvc.load();
	PropertiesSvc.init();
});