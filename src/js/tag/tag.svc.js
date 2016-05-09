app.factory('TagSvc', function ($routeParams, $q, $rootScope, AppConst, TagRes, ProjectRes, PostRes, $modalBox, $modal, NavbarSvc, MessageSvc, AppSvc) {
    var service={};

    service.item={};
    service.list=[];
    service.allList=[];

    service.countItemsOnRow=3;
    service.limitOnHome=5;
    service.limit=10;
    service.begin=0;

    $rootScope.$on('$routeChangeStart',function(event, current, previous){
        if (current.params!=undefined && $routeParams.navId!='tag'){
            service.tagText='';
        }
    });


    service.initEmptyItem=function(){
        service.item = {};
        service.item.text = '';
        service.item.description='';
    }

    service.showCreate=function(){
        service.mode='create';
        service.initEmptyItem();
        var boxOptions = {
            title: 'Add new tag',
            confirmTemplate: 'views/manager/tag/create.modal.html',
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
            prefixEvent: 'tagCreate'
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
            confirmTemplate: 'views/manager/tag/update.modal.html',
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
            prefixEvent: 'tagUpdate'
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
		TagRes.actionCreate(item).then(
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                    service.item=angular.copy(response.data.data[0]);
                    service.list.push(service.item);
                    $rootScope.$broadcast('tag.create', service.item);
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
		TagRes.actionUpdate(item).then(
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                    service.item=angular.copy(response.data.data[0]);
                    service.updateItemOnList(service.item);

                    $rootScope.$broadcast('tag.update', service.item);
                }
            },
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    }
	service.doDelete=function(item){
         MessageSvc.confirm('tag/remove/confirm', {values:[item.src]},
         function(){
             TagRes.actionDelete(item).then(
                function (response) {
                    if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                        for (var i=0;i<service.list.length;i++){
                            if (service.list[i].id==item.id){
                                service.list.splice(i, 1);
                                break;
                            }
                        }
                        service.item={};
                        $rootScope.$broadcast('tag.delete', item);
                    }
                },
                function (response) {
                    if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                        MessageSvc.error(response.data.code, response.data);
                }
            );
         });
    }
    
    service.init=function(reload){
        service.tagText=$routeParams.tagText;

        service.title=vsprintf(AppConst.tag.strings.title,[service.tagText]);
        service.description=vsprintf(AppConst.tag.strings.description,[service.tagText]);

        AppSvc.setTitle([service.title]);
        AppSvc.setDescription(service.description);
        AppSvc.setUrl('tag/'+service.tagText);

        if ($routeParams.tagText!=undefined){
            service.allList=[];
            service.allListSumSize=0;
            $q.all([
                service.load(),
                ProjectRes.getListByTag($routeParams.tagText),
                PostRes.getListByTag($routeParams.tagText)
            ]).then(function(responseList) {
                for (var i=1;i<responseList.length;i++){
                    if (responseList[i].data.data && responseList[i].data.data.length>0)
                        service.allListSumSize=service.allListSumSize+responseList[i].data.data.length;
                    if (i==1)
                        service.allList.push({
                            name: 'project',
                            list: responseList[i].data.data
                        });
                    if (i==2)
                        service.allList.push({
                            name: 'post',
                            list: responseList[i].data.data
                        });
                }
            });
        }else{
            $q.all([
                service.load()
            ]).then(function(responseList) {
    
            });
        }
    }

    service.searchTag=function(query){
        var list=[];
        for (var i=0;i<service.list.length;i++){
            if (service.list[i].text.indexOf(query)!=-1)
                list.push(service.list[i]);
        }
        return list;
    }

    service.load=function(reload){
        var deferred = $q.defer();
        if (service.loaded!==true || reload===true){
            service.loaded=true;
            TagRes.getList().then(function (response) {
                service.list=angular.copy(response.data.data);
                deferred.resolve(service.list);
                $rootScope.$broadcast('tag.load', service.list);
            },
            function (response) {
                service.list=[];
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                    MessageSvc.error(response.data.code, response.data);
                deferred.resolve(service.list);
            })
        } else
            deferred.resolve(service.list);
        return deferred.promise;
    }
    return service;
  });