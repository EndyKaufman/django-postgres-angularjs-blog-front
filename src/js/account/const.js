app.factory('AccountConst', function(gettext) {
    return {
        reg: {
            title: gettext('Registration form'),
            url: 'account/reg',
            description: gettext('Registration on site')
        },
        login: {
            title: gettext('Login on site'),
            url: 'account/login',
            description: gettext('Authorization on site')
        },
        logout: {
            title: gettext('Logout'),
            url: 'account/logout',
            description: gettext('Logout from site')
        },
        profile: {
            title: gettext('Profile'),
            url: 'account/profile',
            description: gettext('Profile of user')
        },
        user_app: {
            title: gettext('Applications'),
            url: 'account/user_app',
            description: gettext('Applications of user')
        },
        recovery: {
            title: gettext('Recovery access'),
            url: 'account/recovery',
            description: gettext('Recovery access to site')
        },
        reset: {
            title: gettext('Reset password'),
            url: 'account/reset',
            description: gettext('Reset password for account')
        },
        message: {
            'account/exists': gettext('User with email <strong>%s</strong> is exists!'),
            'account/no_email': gettext('Email is empty!'),
            'account/no_password': gettext('Password is empty!'),
            'account/wrong_email': gettext('Email is incorrect!'),
            'account/user_not_found': gettext('User not founded!'),
            'account/wrong_password': gettext('Wrong password!'),
            'account/not_active': gettext('User not activated!'),
            'account/you_not_active': gettext('You not activated!'),
            'account/login/success': gettext('You authorizing!'),
            'account/logout/success': gettext('Bye-Bye!'),
            'account/logout/confirm': gettext('Do you really want to leave?'),
            'account/user_with_email_not_found': gettext('User with email <strong>%s</strong> not found!'),
            'account/recovery/check_email': gettext('Check email <strong>%s</strong> for code to reset password'),
            'account/delete/confirm': gettext('Do you really want to delete account?'),
            'account/create/success': gettext('Account created!'),
            'account/update/success': gettext('Profile updated!'),
            'account/delete/success': gettext('Account deleted!'),
            'user_app/delete/confirm': gettext('Do you really want to delete application <strong>%s</strong>?'),
            'user_app/create/success': gettext('Application <strong>%s</strong> created!'),
            'user_app/update/success': gettext('Application <strong>%s</strong> updated!'),
            'user_app/delete/success': gettext('Application <strong>%s</strong> deleted!')
        }
    };
});