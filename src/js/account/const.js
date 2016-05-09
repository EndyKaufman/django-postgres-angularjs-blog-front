app.constant('AccountConst',{
    reg:{
        title: 'Registration form',
        name: 'reg',
        description: 'Registration on site'
    },
    login:{
        title: 'Login on site',
        name: 'login',
        description: 'Authorization on site'
    },
    logout:{
        title: 'Logout',
        name: 'logout',
        description: 'Logout from site'
    },
    profile:{
        title: 'Profile',
        name: 'profile',
        description: 'Profile of user'
    },
    recovery:{
        title: 'Recovery access',
        name: 'recovery',
        description: 'Recovery access to site'
    },
    reset_password:{
        title: 'Reset password',
        name: 'reset_password',
        description: 'Reset password for account'
    },
    message:{
        'account/exists':'User with email <strong>%s</strong> is exists!',
        'account/no_email':'Email is empty!',
        'account/no_password':'Password is empty!',
        'account/wrong_email':'Email is incorrect!',
        'account/user_not_found':'User not founded!',
        'account/wrong_password':'Wrong password!',
        'account/not_active':'User not activated!',
        'account/you_not_active':'You not activated!',
        'account/login/success':'You authorizing!',
        'account/logout/success':'Bye-Bye!',
        'account/logout/confirm':'Do you really want to leave?',
        'account/user_not_found':'User with email <strong>%s</strong> not found!',
        'account/recovery/checkemail':'Check email <strong>%s</strong> for code to reset password',
        'account/delete/confirm':'Do you really want to delete account?'
    }
});