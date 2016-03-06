module.exports ={
    debug: false,
    debugAll: false,
    inDebug:function(){
        return this.debugAll==true || browser.params.debugAll=='true';
    },
    AppConfig: {
        get: function(){
            var data = {};
            return browser.executeAsyncScript(function(data, callback) {
                var AppConfig = window.AppConfig;
                callback(AppConfig);
            }, data);
        }
    },
    MessageSvc: {
        infoEnable: function(enable) {
            var data = {enable:enable};
            return browser.executeAsyncScript(function(data, callback) {
                var MessageSvc = angular.element(document.body).injector().get('MessageSvc');
                MessageSvc.infoEnable=data.enable;
                callback(MessageSvc.infoEnable);
            }, data);
        },
        confirmEnable: function(enable) {
            var data = {enable:enable};
            return browser.executeAsyncScript(function(data, callback) {
                var MessageSvc = angular.element(document.body).injector().get('MessageSvc');
                MessageSvc.confirmEnable=data.enable;
                callback(MessageSvc.confirmEnable);
            }, data);
        }
    },
    AccountSvc: {
        item: function(){
            var data = {};
            return browser.executeAsyncScript(function(data, callback) {
                var AccountSvc = angular.element(document.body).injector().get('AccountSvc');
                callback(AccountSvc.item);
            }, data);
        },
        doLogin: function(email, password) {
            var data = {email:email, password:password};
            return browser.executeAsyncScript(function(data, callback) {
                var AccountSvc = angular.element(document.body).injector().get('AccountSvc');
                AccountSvc.doLogin(data.email, data.password);
                setTimeout(function(){
                    callback(AccountSvc.item);
                },5000);
            }, data);
        },
        doLogout: function() {
            var data = {};
            return browser.executeAsyncScript(function(data, callback) {
                var AccountSvc = angular.element(document.body).injector().get('AccountSvc');
                AccountSvc.doLogout();
                setTimeout(function(){
                    callback(AccountSvc.item);
                },5000);
            }, data);
        },
        doUpdate: function(item) {
            var data = item;
            return browser.executeAsyncScript(function(data, callback) {
                var AccountSvc = angular.element(document.body).injector().get('AccountSvc');
                AccountSvc.doUpdate(data);
                setTimeout(function(){
                    callback(AccountSvc.item);
                },5000);
            }, data);
        }
    },
    ProjectSvc:{
        item: function(){
            var data = {};
            return browser.executeAsyncScript(function(data, callback) {
                var ProjectSvc = angular.element(document.body).injector().get('ProjectSvc');
                callback(ProjectSvc.item);
            }, data);
        },
        list: function(){
            var data = {};
            return browser.executeAsyncScript(function(data, callback) {
                var ProjectSvc = angular.element(document.body).injector().get('ProjectSvc');
                callback(ProjectSvc.list);
            }, data);
        },
        doUpdate: function(item) {
            var data = item;
            return browser.executeAsyncScript(function(data, callback) {
                var ProjectSvc = angular.element(document.body).injector().get('ProjectSvc');
                ProjectSvc.doUpdate(data);
                setTimeout(function(){
                    callback(ProjectSvc.item);
                },5000);
            }, data);
        },
        doCreate: function(item) {
            var data = item;
            return browser.executeAsyncScript(function(data, callback) {
                var ProjectSvc = angular.element(document.body).injector().get('ProjectSvc');
                ProjectSvc.doCreate(data);
                setTimeout(function(){
                    callback(ProjectSvc.item);
                },5000);
            }, data);
        },
        doDelete: function(item) {
            var data = item;
            return browser.executeAsyncScript(function(data, callback) {
                var ProjectSvc = angular.element(document.body).injector().get('ProjectSvc');
                ProjectSvc.doDelete(data);
                setTimeout(function(){
                    callback(ProjectSvc.item);
                },5000);
            }, data);
        }
    },
    FileSvc:{
        list: function() {
            var data = {};
            return browser.executeAsyncScript(function(data, callback) {
                var FileSvc = angular.element(document.body).injector().get('FileSvc');
                callback(FileSvc.list);
            }, data);
        },
        item: function() {
            var data = {};
            return browser.executeAsyncScript(function(data, callback) {
                var FileSvc = angular.element(document.body).injector().get('FileSvc');
                callback(FileSvc.item);
            }, data);
        },
        doDelete: function(item) {
            var data = item;
            return browser.executeAsyncScript(function(data, callback) {
                var FileSvc = angular.element(document.body).injector().get('FileSvc');
                FileSvc.doDelete(data);
                setTimeout(function(){
                    callback(FileSvc.item);
                },5000);
            }, data);
        }
    }
}