describe('[Angular] Update user profile with admin role with', function() {
    var app = require('./../app.helpers.js');

    var appConfigResponse = undefined, profileResponse = undefined, logoutResponse = undefined, updateResponse = undefined, restoreProfileResponse = undefined;

    beforeEach(function(done){
        if (appConfigResponse!==undefined){
            done();
            return;
        }
        browser.driver.manage().window().setSize(1280, 1024);
        browser.get(browser.baseUrl).then(function(){
            app.AppConfig.get().then(function(response){
                appConfigResponse=response;
                app.MessageSvc.infoEnable(false).then(function(response){
                    app.MessageSvc.confirmEnable(false).then(function(response){
                        done();
                    });
                });
            });
        });
    });

    it('response structure must be correct', function() {
        expect(appConfigResponse).toBeDefined();
        expect(typeof appConfigResponse).toEqual('object');
    });

    describe('Login on site', function() {

      beforeEach(function(done){
        if (profileResponse!==undefined){
            done();
            return;
        }
        element(by.id('loginNav')).click();
        app.AccountSvc.doLogin('admin@email.com','admin@email.com').then(function(response){
            profileResponse = response;
            done();
        });
      });

      it('response structure must be correct', function() {
        expect(typeof profileResponse).toEqual('object');
        if (profileResponse){
            var userData = profileResponse;
            var fields = ['id', 'username', 'email', 'firstname', 'lastname', 'roles'];
            for (var i=0; i<fields.length; i++)
                expect(userData[fields[i]]).toBeDefined();
            if (userData.roles!==undefined && userData.roles.length>0)
                expect(userData.roles[0]).toEqual('admin');
        }
      });

      describe('Update first name', function() {

        beforeEach(function(done){
            if (updateResponse!==undefined){
                done();
                return;
            }
            element(by.id('profileNav')).click();
            app.AccountSvc.doUpdate({
                firstname:'New Name',
                email:'admin@email.com'
            }).then(function(response){
                updateResponse = response;
                done();
            });
        });

        it('response structure must be correct', function() {
            expect(typeof updateResponse).toEqual('object');
            if (updateResponse){
                var userData = updateResponse;
                var fields = ['id', 'username', 'email', 'firstname', 'lastname', 'roles'];
                for (var i=0; i<fields.length; i++)
                    expect(userData[fields[i]]).toBeDefined();
                if (userData.roles.length>0)
                    expect(userData.roles[0]).toEqual('admin');
                expect(userData.firstname).toEqual('New Name');
            }
        });

        describe('Cancel modify first name', function() {

            beforeEach(function(done){
                if (restoreProfileResponse!==undefined){
                    done();
                    return;
                }
                app.AccountSvc.doUpdate({
                    firstname: profileResponse.firstname,
                    email:'admin@email.com'
                }).then(function(response){
                    restoreProfileResponse = response;
                    done();
                });
            });

            it('response structure must be correct', function() {
                expect(typeof restoreProfileResponse).toEqual('object');
                if (restoreProfileResponse){
                    var oldData = profileResponse;
                    var userData = restoreProfileResponse;

                    var fields = ['id', 'username', 'email', 'firstname', 'lastname', 'roles'];
                    for (var i=0; i<fields.length; i++)
                        expect(oldData[fields[i]]).toEqual(userData[fields[i]]);
                }
            });

            describe('Logout from site', function() {

                beforeEach(function(done){
                    if (logoutResponse!==undefined){
                        done();
                        return;
                    }

                    app.AccountSvc.doLogout().then(function(response){
                        logoutResponse = response;
                        done();
                    });
                });

                it('response structure must be correct', function() {
                    expect(typeof logoutResponse).toEqual('object');
                    expect(logoutResponse.id).not.toBeDefined();
                });
            });
        });
      });
    });
});