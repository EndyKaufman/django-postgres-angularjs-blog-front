app.controller('AppCtrl', function ($scope, AppSvc, AppConst, UtilsSvc, AccountSvc, MessageSvc, PropertiesSvc) {
    $scope.AppConfig=AppConfig;

    $scope.UtilsSvc=UtilsSvc;
    $scope.AppConst=AppConst;
	$scope.AppSvc=AppSvc;
	$scope.MessageSvc=MessageSvc;
	$scope.PropertiesSvc=PropertiesSvc;

	AppSvc.init();
});