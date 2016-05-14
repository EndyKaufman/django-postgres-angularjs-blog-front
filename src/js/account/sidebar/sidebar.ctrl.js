app.controller('AccountSidebarCtrl', function ($scope, AccountSidebarSvc, ProjectSvc, PostSvc, TagSvc) {
    $scope.AccountSidebarSvc=AccountSidebarSvc;
	$scope.ProjectSvc=ProjectSvc;
	$scope.PostSvc=PostSvc;
	$scope.TagSvc=TagSvc;

    AccountSidebarSvc.init();
});