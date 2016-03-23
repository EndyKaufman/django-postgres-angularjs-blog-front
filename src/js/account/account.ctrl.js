app.controller('AccountCtrl', function ($scope, $routeParams, AccountSvc, TagSvc, ProjectSvc) {
    $scope.AccountSvc=AccountSvc;
    $scope.TagSvc=TagSvc;
    $scope.ProjectSvc=ProjectSvc;
    $scope.$routeParams=$routeParams;

	TagSvc.init();
	ProjectSvc.init();
	AccountSvc.init();
});