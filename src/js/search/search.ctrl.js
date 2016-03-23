app.controller('SearchCtrl', function ($scope, SearchSvc, AccountSvc, TagSvc, ProjectSvc) {
    $scope.AccountSvc=AccountSvc;
	$scope.SearchSvc=SearchSvc;
	$scope.TagSvc=TagSvc;
	$scope.ProjectSvc=ProjectSvc;

	TagSvc.init();
	ProjectSvc.init();
	SearchSvc.init();
});