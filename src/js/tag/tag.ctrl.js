app.controller('TagCtrl', function ($scope, $routeParams, TagSvc, AccountSvc, ProjectSvc, PostSvc) {
    $scope.AccountSvc=AccountSvc;
	$scope.TagSvc=TagSvc;
	$scope.ProjectSvc=ProjectSvc;
	$scope.PostSvc=PostSvc;
	$scope.$routeParams=$routeParams;

	TagSvc.init();
});