app.controller('FileCtrl', function ($scope, FileSvc) {
	$scope.FileSvc=FileSvc;

	FileSvc.init();
});