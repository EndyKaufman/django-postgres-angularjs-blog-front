app.factory('PostSvc', function ($routeParams, $rootScope, $q, $location, AppConst, PostRes, TagSvc, MessageSvc, AppSvc) {
    var service={};

    $rootScope.$on('post.delete',function(event, item){
        MessageSvc.info('post/delete/success', {values:item});
        service.goList();
    });

    $rootScope.$on('post.create',function(event, item){
        MessageSvc.info('post/create/success', {values:item});
        service.goItem(item.name);
    });

    $rootScope.$on('post.update',function(event, item){
        MessageSvc.info('post/update/success', {values:item});
        service.goItem(item.name);
    });

    service.item={};
    service.list=[];

    service.countItemsOnRow=2;
    service.limitOnHome=3;
    service.limit=10;
    service.begin=0;

    service.title=AppConst.post.strings.title;

    service.init=function(reload){
        service.postName=$routeParams.postName;
        $q.all([
            TagSvc.load(),
            service.load()
        ]).then(function(responseList) {
            if (service.postName!=undefined){
                AppSvc.setTitle([service.item.title,service.title]);
                AppSvc.setDescription(service.item.description);
                AppSvc.setUrl('post/'+service.postName);
                if (service.item.images.length>0)
                    AppSvc.setImage(service.item.images[0].src_url);
            }else{
                AppSvc.setTitle([service.title]);
                AppSvc.setDescription(AppConst.post.strings.description);
                AppSvc.setUrl('post');
            }
        });
    }

    service.goList=function(){
        $location.path('/post');
    }

    service.goItem=function(postName){
        $location.path('/post/'+postName);
    }

    service.updateItemOnList=function(item){
        for (var i=0;i<service.list.length;i++){
            if (item.id===service.list[i].id){
                angular.extend(service.list[i],angular.copy(item));
            }
        }
    }

	service.doCreate=function(item){
	    service.slugName(item.name);
	    $rootScope.$broadcast('show-errors-check-validity');
		 PostRes.actionCreate(item).then(
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                    if (response.data.reload_source.tag==true)
                        TagSvc.load(true);
                    service.item=angular.copy(response.data.data[0]);
                    service.list.push(service.item);
                    $rootScope.$broadcast('post.create', service.item);
                }
            },
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    }
	service.doUpdate=function(item){
	    service.slugName(item.name);
	    $rootScope.$broadcast('show-errors-check-validity');
		 PostRes.actionUpdate(item).then(
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                    if (response.data.reload_source.tag==true)
                        TagSvc.load(true);
                    service.item=angular.copy(response.data.data[0]);
                    service.updateItemOnList(service.item);

                    $rootScope.$broadcast('post.update', service.item);
                }
            },
            function (response) {
                if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                    MessageSvc.error(response.data.code, response.data);
            }
        );
    }
	service.doDelete=function(item){
         MessageSvc.confirm('post/remove/confirm', {values:[item.title]},
         function(){
             PostRes.actionDelete(item).then(
                function (response) {
                    if (response!=undefined && response.data!=undefined && response.data.code!=undefined && response.data.code=='ok'){
                        for (var i=0;i<service.list.length;i++){
                            if (service.list[i].id==item.id){
                                service.list.splice(i, 1);
                                break;
                            }
                        }
                        service.initEmptyItem();
                        $rootScope.$broadcast('post.delete', item);
                    }
                },
                function (response) {
                    if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                        MessageSvc.error(response.data.code, response.data);
                }
            );
         });
    }

    service.doDeleteImage=function(index){
        service.item.images.splice(index, 1);
    }
    service.doAddImage=function(text){
        if (text===undefined)
            text='';
        if (service.item.images===undefined)
            service.item.images=[];
        service.item.images.push({
            id: chance.guid(),
            title: text
        });
    }
    service.slugName=function(value){
        if (service.item.id===undefined)
            service.item.name=getSlug(value, {
                lang:'ru',
                uric: true
            });
    }
    service.initEmptyItem=function(){
        service.item = {};
        /*service.title = '';
        service.name = '';
        service.description = '';
        service.url = '';
        service.text = '';
        service.html = '';
        service.markdown = '';*/
        service.item.type = 1;
        service.item.tags = [];
        service.item.images = [];
    }
    service.load=function(reload){
        var deferred = $q.defer();
        if (service.postName!=undefined){
            if (service.item.name!==service.postName)
                PostRes.getItem(service.postName).then(
                    function (response) {
                        service.item=angular.copy(response.data.data[0]);
                        deferred.resolve(service.item);
                        $rootScope.$broadcast('post.item.load', service.item);
                    },
                    function (response) {
                        service.item={};
                        if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                            MessageSvc.error(response.data.code, response.data);
                        deferred.resolve(service.item);
                    }
                );
        }else{
            if (service.loaded!==true || reload===true){
                service.loaded=true;
                PostRes.getList().then(function (response) {
                    service.list=angular.copy(response.data.data);
                    deferred.resolve(service.list);
                    $rootScope.$broadcast('post.load', service.list);
                }, function (response) {
                    service.list=[];
                    if (response!=undefined && response.data!=undefined && response.data.code!=undefined)
                        MessageSvc.error(response.data.code, response.data);
                    deferred.resolve(service.list);
                });
            }else
                deferred.resolve(service.list);
        }
        return deferred.promise;
    }
    return service;
  });