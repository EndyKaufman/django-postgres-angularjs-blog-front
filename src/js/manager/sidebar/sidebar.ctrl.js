app.controller('ManagerSidebarCtrl', function ($scope, ManagerSidebarSvc, ProjectSvc, PostSvc, TagSvc) {
    $scope.ManagerSidebarSvc=ManagerSidebarSvc;
	$scope.ProjectSvc=ProjectSvc;
	$scope.PostSvc=PostSvc;
	$scope.TagSvc=TagSvc;

    ManagerSidebarSvc.init();
});