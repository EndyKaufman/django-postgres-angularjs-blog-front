app.controller('ProjectCtrl', function($scope, ProjectSvc, AccountSvc, TagSvc, FileSvc) {
    $scope.AccountSvc = AccountSvc;
    $scope.ProjectSvc = ProjectSvc;
    $scope.TagSvc = TagSvc;
    $scope.FileSvc = FileSvc;

    ProjectSvc.init();
});