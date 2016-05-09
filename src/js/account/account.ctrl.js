app.controller('AccountCtrl', function ($scope, AccountSvc, TagSvc, ProjectSvc, NavbarSvc, $routeParams) {
    $scope.AccountSvc=AccountSvc;
    $scope.TagSvc=TagSvc;
    $scope.ProjectSvc=ProjectSvc;
    $scope.NavbarSvc=NavbarSvc;
    $scope.$routeParams=$routeParams;

	TagSvc.load();
	ProjectSvc.load();
	AccountSvc.init();
});