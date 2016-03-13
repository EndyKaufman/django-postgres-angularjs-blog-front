app.factory('AppConst', function($rootScope, AccountConst, TagConst, NoteConst, BookmarkConst, ProjectConst, SearchConst, NavbarConst){
    var navbar={
        left:[
            {
                name: 'project'
            },
            {
                name: 'note',
            },
            {
                name: 'bookmark',
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
    var home={
        url:'#/home',
        title: 'MY BLOG',
        description: 'description of blog',
        name: 'MY_BLOG',
        image: '//2.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?s=132&d=wavatar'
    };
    var service={
        home: home,
        navbar: angular.extend({}, NavbarConst, navbar),
        search: SearchConst,
        account: AccountConst,
        tag: TagConst,
        note: NoteConst,
        bookmark: BookmarkConst,
        project: ProjectConst
    };

    return service;
  });