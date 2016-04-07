app.factory('AppConst', function($rootScope, HomeConst, AccountConst, TagConst, NoteConst, BookmarkConst, ProjectConst, PostConst, SearchConst, NavbarConst){
    var home={
        title: 'MY BLOG',
        description: 'description of blog',
        name: 'MY_BLOG',
        image: 'https://avatars2.githubusercontent.com/u/4127109?v=3&s=460',
        social:[
            {
                url:'http://google.com',
                iconClass:'fa fa-google-plus'
            },
            {
                url:'http://github.com',
                iconClass:'fa fa-github'
            },
            {
                url:'http://twitter.com',
                iconClass:'fa fa-twitter'
            },
            {
                url:'http://youtube.com',
                iconClass:'fa fa-youtube'
            }
        ]
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
        search: SearchConst,
        account: AccountConst,
        tag: TagConst,
        note: NoteConst,
        bookmark: BookmarkConst,
        project: ProjectConst,
        post: PostConst
    };

    return service;
  });