describe('Update user profile with user role', function() {
    var api = require('./../api.helpers.js');

    var appConfigResponse = undefined, profileResponse = undefined, logoutResponse = undefined, updateResponse = undefined, restoreProfileResponse = undefined;

    beforeEach(function(done){
        if (appConfigResponse!==undefined){
            done();
            return;
        }
        browser.driver.manage().window().setSize(1280, 1024);
        browser.get(browser.baseUrl).then(function(){
            api.executeAndReturnJson(
                'if (window.AppConfig!==undefined)callback(window.AppConfig);else callback({});',
                function(response){
                    appConfigResponse = response;
                    done();
                });
            }
        );
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
        //api.debug=true;
        api.postJson('/api/v1/account/login', {
            email:'user@email.com',
            password:'user@email.com'
        }, function(response){
            profileResponse = response;
            done();
        });
      });

      it('response structure must be correct', function() {
        expect(typeof profileResponse).toEqual('object');
        expect(profileResponse.data).toBeDefined();
        if (profileResponse.data){
            var userData = profileResponse.data[0];
            var fields = ['id', 'username', 'email', 'firstname', 'lastname', 'roles'];
            for (var i=0; i<fields.length; i++)
                expect(userData[fields[i]]).toBeDefined();
            if (userData.roles!==undefined && userData.roles.length>0)
                expect(userData.roles[0]).toEqual('user');
        }
      });

      describe('Update first name', function() {

        beforeEach(function(done){
            if (updateResponse!==undefined){
                done();
                return;
            }
            //api.debug=true;
            api.postJson('/api/v1/account/update', {
                firstname:'New Name',
                email:'user@email.com'
            }, function(response){
                updateResponse = response;
                done();
            });
        });

        it('response structure must be correct', function() {
            expect(typeof updateResponse).toEqual('object');
            expect(updateResponse.data).toBeDefined();
            if (updateResponse.data){
                var userData = updateResponse.data[0];
                var fields = ['id', 'username', 'email', 'firstname', 'lastname', 'roles'];
                for (var i=0; i<fields.length; i++)
                    expect(userData[fields[i]]).toBeDefined();
                if (userData.roles!==undefined && userData.roles.length>0)
                    expect(userData.roles[0]).toEqual('user');
                expect(userData.firstname).toEqual('New Name');
            }
        });

        describe('Cancel modify first name', function() {

            beforeEach(function(done){
                if (restoreProfileResponse!==undefined){
                    done();
                    return;
                }
                //api.debug=true;
                api.postJson('/api/v1/account/update', {
                    firstname:profileResponse.data[0].firstname,
                    email:'user@email.com'
                }, function(response){
                    restoreProfileResponse=response;
                    done();
                });
            });

            it('response structure must be correct', function() {
                expect(typeof restoreProfileResponse).toEqual('object');
                expect(restoreProfileResponse.data).toBeDefined();
                if (restoreProfileResponse.data){
                    var oldData = profileResponse.data[0];
                    var userData = restoreProfileResponse.data[0];

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
                    //api.debug=true;
                    api.postJson('/api/v1/account/logout', {
                    }, function(response){
                        logoutResponse = response;
                        done()

                    });
                });

                it('response structure must be correct', function() {
                    expect(typeof logoutResponse).toEqual('object');
                    expect(logoutResponse.code).toEqual('ok');
                });
            });
        });
      });
    });
});