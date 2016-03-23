app.controller('ProjectCtrl', function ($scope, $timeout, ProjectSvc, AccountSvc, TagSvc, FileSvc) {
    $scope.AccountSvc=AccountSvc;
	$scope.ProjectSvc=ProjectSvc;
	$scope.TagSvc=TagSvc;
	$scope.FileSvc=FileSvc;

	TagSvc.init();
	ProjectSvc.init();
});