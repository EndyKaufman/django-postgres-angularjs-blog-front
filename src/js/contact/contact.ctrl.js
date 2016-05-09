app.controller('ContactCtrl', function ($scope, ContactSvc, TagSvc, ProjectSvc, PublicLinkSvc) {
    $scope.ContactSvc=ContactSvc;
    $scope.TagSvc=TagSvc;
    $scope.PublicLinkSvc=PublicLinkSvc;

    PublicLinkSvc.load();
	TagSvc.load();
	ContactSvc.init();
});