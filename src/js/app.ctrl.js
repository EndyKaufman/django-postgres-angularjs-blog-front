app.controller('AppCtrl', function ($scope, AppSvc, AppLang, AppConst, UtilsSvc, AccountSvc, MessageSvc, AppProperties) {
    $scope.AppConfig=AppConfig;

    $scope.UtilsSvc=UtilsSvc;
    $scope.AppConst=AppConst;
	$scope.AppSvc=AppSvc;
    $scope.AppLang=AppLang;
    $scope.AppProperties=AppProperties;
	$scope.MessageSvc=MessageSvc;

    AppSvc.init();
});