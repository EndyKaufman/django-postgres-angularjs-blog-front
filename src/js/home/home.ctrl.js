app.controller('HomeCtrl', function ($scope, $timeout, ProjectSvc, AccountSvc, TagSvc, FileSvc, NavbarSvc) {
    $scope.AccountSvc=AccountSvc;
	$scope.ProjectSvc=ProjectSvc;
	$scope.TagSvc=TagSvc;
	$scope.FileSvc=FileSvc;

	TagSvc.init();
	ProjectSvc.init();
    NavbarSvc.init('home');
});