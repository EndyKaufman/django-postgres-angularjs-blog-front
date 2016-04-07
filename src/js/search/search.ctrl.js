app.controller('SearchCtrl', function ($scope, SearchSvc, AccountSvc, TagSvc, ProjectSvc, PostSvc) {
    $scope.AccountSvc=AccountSvc;
	$scope.SearchSvc=SearchSvc;
	$scope.TagSvc=TagSvc;
	$scope.ProjectSvc=ProjectSvc;
	$scope.PostSvc=PostSvc;

	TagSvc.init();
	ProjectSvc.init();
	PostSvc.init();
	SearchSvc.init();
});