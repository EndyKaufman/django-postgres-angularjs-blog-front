app.factory('AppConst', function($rootScope,
HomeConst, AccountConst, TagConst, NoteConst, BookmarkConst, ProjectConst, PostConst, SearchConst, ContactConst, ManagerConst, NavbarConst){
    var home={
        title: 'MY BLOG',
        description: 'description of blog',
        name: 'MY_BLOG',
        image: 'https://avatars2.githubusercontent.com/u/4127109?v=3&s=460'
    };
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
                click:function(){
                    $rootScope.$broadcast('account.doLogout', true);
                },
                hiddenHandler: function(){
                    return (AppConfig.user.id==undefined)
                }
            }
        ]
    };
    var service={
        home: angular.extend({}, HomeConst, home),
        navbar: angular.extend({}, NavbarConst, navbar),
        manager: ManagerConst,
        search: SearchConst,
        account: AccountConst,
        tag: TagConst,
        note: NoteConst,
        bookmark: BookmarkConst,
        project: ProjectConst,
        post: PostConst,
        contact: ContactConst
    };

    return service;
  });