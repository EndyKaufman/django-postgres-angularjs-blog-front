app.controller('AppCtrl', function ($scope, AppSvc, AppLang, AppConst, UtilsSvc, AccountSvc, MessageSvc) {
    $scope.AppConfig=AppConfig;

    $scope.UtilsSvc=UtilsSvc;
    $scope.AppConst=AppConst;
	$scope.AppSvc=AppSvc;
    $scope.AppLang=AppLang;
	$scope.MessageSvc=MessageSvc;

    AppSvc.init();
});