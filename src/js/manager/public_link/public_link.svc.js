app.factory('PublicLinkSvc', function (AppConst, PublicLinkRes, $rootScope, $q, $modalBox, $modal, NavbarSvc, MessageSvc, $routeParams, $route) {
    var service={};

    service.item={};
    service.list=[];

    service.initEmptyItem=function(){
        service.item = {};
        service.item.src = '';
        service.item.title = '';
        service.item.description='';
        service.item.icon='';
        service.item.position=0;
        service.item.in_header=0;
        service.item.in_footer=0;
        service.item.in_contact=1;
    }

    service.showCreate=function(){
        service.mode='create';
        service.initEmptyItem();
        var boxOptions = {
            title: 'Add new public_link',
            confirmTemplate: 'views/manager/public_link/create.modal.html',
            size: 'lg',
            boxType: 'confirm',
            theme: 'alert',
            effect: false,
            confirmText: 'Create',
            cancelText: 'Cancel',
            afterConfirm: function(){
                service.doCreate(service.item);
            },
            afterCancel: function(){

            },
            prefixEvent: 'public_linkCreate'
        }
        $modalBox(boxOptions);
    }

    service.selectItem=function(item){
        service.item=angular.copy(item);
    }

    service.showUpdate=function(item){
        service.mode='update';
        service.item=angular.copy(item);
        var boxOptions = {
            title: 'Edit properties',
            confirmTemplate: 'views/manager/public_link/update.modal.html',
            size: 'lg',
            boxType: 'confirm',
            theme: 'alert',
            effect: false,
            confirmText: 'Save',
            cancelText: 'Cancel',
            afterConfirm: function(){
                service.doUpdate(service.item);
            },
            afterCancel: function(){

            },
            prefixEvent: 'public_linkUpdate'
        }
        $modalBox(boxOptions);
    }

    service.updateItemOnList=function(item){
        for (var i=0;i<service.list.length;i++){
            if (item.id===service.list[i].id){
                angular.extend(service.list[i],angular.copy(item));
            }
        }
    }

	service.doCreate=function(item){
	    $rootScope.$broadcast('show-errors-check-validity');
		PublicLinkRes.actionCreate(item).then(
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                    service.item=angular.copy(response.data.data[0]);
                    service.list.push(service.item);
                    $rootScope.$broadcast('public_link.create', service.item);
                }
            },
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    }
	service.doUpdate=function(item){
	    $rootScope.$broadcast('show-errors-check-validity');
		PublicLinkRes.actionUpdate(item).then(
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                    service.item=angular.copy(response.data.data[0]);
                    service.updateItemOnList(service.item);

                    $rootScope.$broadcast('public_link.update', service.item);
                }
            },
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    }
	service.doDelete=function(item){
         MessageSvc.confirm('public_link/remove/confirm', {values:[item.src]},
         function(){
             PublicLinkRes.actionDelete(item).then(
                function (response) {
                    if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                        for (var i=0;i<service.list.length;i++){
                            if (service.list[i].id==item.id){
                                service.list.splice(i, 1);
                                break;
                            }
                        }
                        service.item={};
                        $rootScope.$broadcast('public_link.delete', item);
                    }
                },
                function (response) {
                    if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                        MessageSvc.error(response.data.code, response.data);
                }
            );
         });
    }
    
    service.load=function(reload){
        var deferred = $q.defer();
        if (service.loaded!==true || reload===true){
            service.loaded=true;
            PublicLinkRes.getList().then(function (response) {
                service.list=angular.copy(response.data.data);
                deferred.resolve(service.list);
                $rootScope.$broadcast('public_link.load', service.list);
            }, function (response) {
                service.list=[];
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                    MessageSvc.error(response.data.code, response.data);
                deferred.resolve(service.list);
            });
        }else
            deferred.resolve(service.list);
        return deferred.promise;
    }

    service.init=function(reload){
        NavbarSvc.init($routeParams.navId);

        $q.all([
            service.load()
        ]).then(function(responseList) {

        });
    }
    return service;
  });