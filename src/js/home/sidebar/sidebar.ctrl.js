app.controller('SidebarCtrl', function ($scope, SidebarSvc, ProjectSvc, PostSvc, TagSvc) {
    $scope.SidebarSvc=SidebarSvc;
	$scope.ProjectSvc=ProjectSvc;
	$scope.PostSvc=PostSvc;
	$scope.TagSvc=TagSvc;

    SidebarSvc.init();
});