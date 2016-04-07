app.controller('HomeCtrl', function ($scope, $timeout, ProjectSvc, PostSvc, AccountSvc, TagSvc, FileSvc, NavbarSvc) {
    $scope.AccountSvc=AccountSvc;
	$scope.ProjectSvc=ProjectSvc;
	$scope.PostSvc=PostSvc;
	$scope.TagSvc=TagSvc;
	$scope.FileSvc=FileSvc;

	TagSvc.init();
	ProjectSvc.init();
	PostSvc.init();
    NavbarSvc.init('home');
});