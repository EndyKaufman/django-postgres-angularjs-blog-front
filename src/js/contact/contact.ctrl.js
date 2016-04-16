app.controller('ContactCtrl', function ($scope, $routeParams, ContactSvc, TagSvc, ProjectSvc) {
    $scope.ContactSvc=ContactSvc;
    $scope.TagSvc=TagSvc;
    $scope.$routeParams=$routeParams;

	TagSvc.init();
	ContactSvc.init();
});