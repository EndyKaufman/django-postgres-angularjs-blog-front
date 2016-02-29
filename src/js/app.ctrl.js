app.controller('AppCtrl', function ($scope, AppSvc, AppConst, UtilsSvc, AccountSvc, MessageSvc) {
    $scope.AppConfig=AppConfig;

    $scope.UtilsSvc=UtilsSvc;
    $scope.AppConst=AppConst;
	$scope.AppSvc=AppSvc;
	$scope.MessageSvc=MessageSvc;
});