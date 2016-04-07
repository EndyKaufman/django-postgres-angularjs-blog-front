app.constant('PostConst', {
    strings:{
        title: 'My post',
        description: 'Posts descriptions'
    },
    types:[
        {id:1,title:'Text'},
        {id:2,title:'Html'},
        {id:3,title:'Url'},
        {id:4,title:'Markdown'}
    ],
    message:{
        'post/remove/confirm':'Do you really want to remove post <strong>%s</strong>?'
    }
});