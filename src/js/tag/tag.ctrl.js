app.controller('TagCtrl', function ($scope, $routeParams, TagSvc, AccountSvc, ProjectSvc, PostSvc, ManagerSvc) {
    $scope.AccountSvc=AccountSvc;
	$scope.TagSvc=TagSvc;
	$scope.ProjectSvc=ProjectSvc;
	$scope.PostSvc=PostSvc;
	$scope.ManagerSvc=ManagerSvc;
	$scope.$routeParams=$routeParams;

	TagSvc.init();
});