app.factory('AppConst', function($rootScope, HomeConst, AccountConst, TagConst, NoteConst, BookmarkConst, ProjectConst, SearchConst, NavbarConst){
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
    var service={
        home: HomeConst,
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