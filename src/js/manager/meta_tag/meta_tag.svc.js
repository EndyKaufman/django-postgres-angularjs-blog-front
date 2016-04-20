app.factory('MetaTagSvc', function (AppConst, MetaTagRes, $rootScope, $q, $modalBox, $modal, NavbarSvc, MessageSvc, $routeParams, $route) {
    var service={};

    service.item={};
    service.list=false;

    service.initEmptyItem=function(){
        service.item = {};
        service.item.name = '';
        service.item.content = '';
        service.item.attributes='';
    }

    service.showCreate=function(){
        service.mode='create';
        service.initEmptyItem();
        var boxOptions = {
            title: 'Add new meta_tag',
            confirmTemplate: 'views/manager/meta_tag/create.modal.html',
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
            prefixEvent: 'meta_tagCreate'
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
            confirmTemplate: 'views/manager/meta_tag/update.modal.html',
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
            prefixEvent: 'meta_tagUpdate'
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
		MetaTagRes.actionCreate(item).then(
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                    service.item=angular.copy(response.data.data[0]);
                    service.list.push(service.item);
                    $rootScope.$broadcast('meta_tag.create', service.item);
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
		MetaTagRes.actionUpdate(item).then(
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                    service.item=angular.copy(response.data.data[0]);
                    service.updateItemOnList(service.item);

                    $rootScope.$broadcast('meta_tag.update', service.item);
                }
            },
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    }
	service.doDelete=function(item){
         MessageSvc.confirm('meta_tag/remove/confirm', {values:[item.src]},
         function(){
             MetaTagRes.actionDelete(item).then(
                function (response) {
                    if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                        for (var i=0;i<service.list.length;i++){
                            if (service.list[i].id==item.id){
                                service.list.splice(i, 1);
                                break;
                            }
                        }
                        service.item={};
                        $rootScope.$broadcast('meta_tag.delete', item);
                    }
                },
                function (response) {
                    if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                        MessageSvc.error(response.data.code, response.data);
                }
            );
         });
    }
    
    service.load=function(){
        var deferred = $q.defer();
        if (service.list===false){
            MetaTagRes.getList().then(function (response) {
                service.list=angular.copy(response.data.data);
                deferred.resolve(service.list);
                $rootScope.$broadcast('meta_tag.load', service.list);
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