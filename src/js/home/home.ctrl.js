app.controller('HomeCtrl', function ($scope, HomeSvc, ProjectSvc, PostSvc, AccountSvc, TagSvc, FileSvc, NavbarSvc) {
    $scope.AccountSvc=AccountSvc;
	$scope.ProjectSvc=ProjectSvc;
	$scope.PostSvc=PostSvc;
	$scope.TagSvc=TagSvc;
	$scope.FileSvc=FileSvc;

    HomeSvc.init();
});