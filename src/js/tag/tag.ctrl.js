app.controller('TagCtrl', function ($scope, TagSvc, AccountSvc, ProjectSvc) {
    $scope.AccountSvc=AccountSvc;
	$scope.TagSvc=TagSvc;
	$scope.ProjectSvc=ProjectSvc;

	ProjectSvc.init();
	TagSvc.init();
});