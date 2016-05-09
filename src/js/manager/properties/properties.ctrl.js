app.controller('PropertiesCtrl', function ($scope, PropertiesSvc, $routeParams, AccountSvc, TagSvc, ManagerSvc) {
	$scope.PropertiesSvc=PropertiesSvc;
	$scope.AccountSvc=AccountSvc;
	$scope.TagSvc=TagSvc;
	$scope.ManagerSvc=ManagerSvc;
	$scope.$routeParams=$routeParams;

    TagSvc.load();
	PropertiesSvc.init();
});