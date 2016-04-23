app.controller('PostCtrl', function ($scope, $timeout, PostSvc, AccountSvc, TagSvc, FileSvc) {
    $scope.AccountSvc=AccountSvc;
	$scope.PostSvc=PostSvc;
	$scope.TagSvc=TagSvc;
	$scope.FileSvc=FileSvc;

	PostSvc.init();
});