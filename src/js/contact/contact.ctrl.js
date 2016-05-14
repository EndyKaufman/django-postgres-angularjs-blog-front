app.controller('ContactCtrl', function ($scope, ContactSvc, ProjectSvc, PublicLinkSvc) {
    $scope.ContactSvc=ContactSvc;
    $scope.PublicLinkSvc=PublicLinkSvc;

    PublicLinkSvc.load();
	ContactSvc.init();
});