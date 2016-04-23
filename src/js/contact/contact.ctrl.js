app.controller('ContactCtrl', function ($scope, $routeParams, ContactSvc, TagSvc, ProjectSvc, PublicLinkSvc) {
    $scope.ContactSvc=ContactSvc;
    $scope.TagSvc=TagSvc;
    $scope.PublicLinkSvc=PublicLinkSvc;
    $scope.$routeParams=$routeParams;

    PublicLinkSvc.load();
	TagSvc.load();
	ContactSvc.init();
});