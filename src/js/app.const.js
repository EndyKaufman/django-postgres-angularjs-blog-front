app.factory('AppConst', function($rootScope,
HomeConst, AccountConst, TagConst, ProjectConst, PostConst, SearchConst, ContactConst, ManagerConst, NavbarConst){
    var navbar={
        left:[
            {
                name: 'project'
            },
            {
                name: 'post',
            },
            {
                name: 'contact',
            }
        ],
        right:[
            {
                name:'login',
                parent:'account',
                hiddenHandler: function(){
                    return (AppConfig.user.id!=undefined)
                }
            },
            {
                name: 'manager',
                hiddenHandler: function(){
                    return AppConfig.user.id==undefined || (AppConfig.user.id!=undefined && AppConfig.user.roles.indexOf('admin')==-1)
                }
            },
            {
                name: 'profile',
                parent:'account',
                hiddenHandler: function(){
                    return (AppConfig.user.id==undefined)
                }
            },
            {
                name:'logout',
                parent:'account',
                click:function(){console.log('hoi');
                    $rootScope.$broadcast('account.doLogout', true);
                },
                hiddenHandler: function(){
                    return (AppConfig.user.id==undefined)
                }
            }
        ]
    };
    var service={
        home: HomeConst,
        navbar: angular.extend({}, NavbarConst, navbar),
        manager: ManagerConst,
        search: SearchConst,
        account: AccountConst,
        tag: TagConst,
        project: ProjectConst,
        post: PostConst,
        contact: ContactConst
    };

    return service;
  });