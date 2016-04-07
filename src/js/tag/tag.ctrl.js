app.controller('TagCtrl', function ($scope, TagSvc, AccountSvc, ProjectSvc, PostSvc) {
    $scope.AccountSvc=AccountSvc;
	$scope.TagSvc=TagSvc;
	$scope.ProjectSvc=ProjectSvc;
	$scope.PostSvc=PostSvc;

	ProjectSvc.init();
	PostSvc.init();
	TagSvc.init();
});