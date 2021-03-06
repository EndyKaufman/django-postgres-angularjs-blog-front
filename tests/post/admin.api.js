describe('Work with posts as admin', function() {
    var api = require('./../api.helpers.js');

    var appConfigResponse = undefined, adminResponse=undefined, listResponse = undefined,
    createResponse = undefined, updateResponse = undefined, deleteResponse = undefined, logoutResponse2 = undefined
    ;

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
            if (adminResponse!==undefined){
                done();
                return;
            }
            //api.debug=true;
            api.postJson('/api/v1/account/login', {
                email:'admin@email.com',
                password:'admin@email.com'
            }, function(response){
                adminResponse = response;
                done();
            });
        });

        it('response structure must be correct', function() {
            expect(typeof adminResponse).toEqual('object');
            expect(adminResponse.data).toBeDefined();
            if (adminResponse.data){
                var userData = adminResponse.data[0];
                var fields = ['id', 'username', 'email', 'firstname', 'lastname', 'roles'];
                for (var i=0; i<fields.length; i++)
                    expect(userData[fields[i]]).toBeDefined();
                if (userData.roles!==undefined && userData.roles.length>0)
                    expect(userData.roles[0]).toEqual('admin');
            }
        });

        describe('Get posts list', function() {

            beforeEach(function(done){
                if (listResponse!==undefined){
                    done();
                    return;
                }
                //api.debug=true;
                api.getJson('/api/v1/post', function(response){
                    listResponse = response;
                    done();
                });
            });

            it('response structure must be correct', function() {
                expect(typeof listResponse).toEqual('object');
                expect(listResponse.code).toEqual('ok');
                expect(listResponse.data).toBeDefined();
                if (listResponse.data){
                    var record = listResponse.data[0];
                    var fields = ['id', 'title', 'description', 'name', 'images', 'url', 'type', 'html', 'markdown', 'text', 'tags', 'images'];
                    for (var i=0; i<fields.length; i++)
                        expect(record[fields[i]]).toBeDefined();
                }
            });

            describe('Create new post', function() {
                var createdRecord = {};

                beforeEach(function(done){
                    if (createResponse!==undefined){
                        done();
                        return;
                    }
                    //api.debug=true;
                    api.postJson('/api/v1/post/create',
                        {
                            id: 101,
                            name:'newPost',
                            title:'New Post',
                            description:'description',
                            type:1,
                            url:'url',
                            html:'html',
                            markdown:'markdown',
                            text:'bla bla bla',
                            tags:[{text:'tag1'}],
                            images:[{src:'image1'}]
                        }, function(response){
                        createResponse = response;
                        createdRecord = {};
                        if (createResponse.data){
                            createdRecord = createResponse.data[0];
                        }
                        done();
                    });
                });

                it('response structure must be correct', function() {
                    expect(typeof createResponse).toEqual('object');
                    expect(createResponse.code).toEqual('ok');
                    expect(createResponse.data).toBeDefined();
                    if (createResponse.data){
                        var record = createResponse.data[0];
                        var fields = ['id', 'title', 'description', 'name', 'images', 'url', 'type', 'html', 'markdown', 'text', 'tags', 'images'];
                        for (var i=0; i<fields.length; i++){
                            expect(record[fields[i]]).toBeDefined();
                        }
                    }
                });

                it('tags must be created or used exists', function() {
                    expect(createResponse.data).toBeDefined();
                    if (createResponse.data){
                        var record = createResponse.data[0];
                        expect(record.tags[0].text).toEqual('tag1');
                        expect(record.tags[0].id).toBeDefined();
                    }
                });

                it('images must be created or used exists', function() {
                    expect(createResponse.data).toBeDefined();
                    if (createResponse.data){
                        var record = createResponse.data[0];
                        expect(record.images[0].src).toEqual('image1');
                        expect(record.images[0].id).toBeDefined();
                    }
                });

                describe('Update created post', function() {

                    createdRecord.title='New Post Updated';

                    beforeEach(function(done){
                        if (updateResponse!==undefined){
                            done();
                            return;
                        }
                        //api.debug=true;
                        api.postJson('/api/v1/post/update/'+createdRecord.id, createdRecord, function(response){
                            updateResponse = response;
                            done();
                        });
                    });

                    it('response structure must be correct', function() {
                        expect(typeof updateResponse).toEqual('object');
                        expect(updateResponse.code).toEqual('ok');
                        expect(updateResponse.data).toBeDefined();
                        if (updateResponse.data){
                            var record = updateResponse.data[0];
                            var fields = ['id', 'title', 'description', 'name', 'images', 'url', 'type', 'html', 'markdown', 'text', 'tags', 'images'];
                            for (var i=0; i<fields.length; i++)
                                expect(record[fields[i]]).toBeDefined();
                        }
                    });

                    it('record must be updated', function() {
                        expect(updateResponse.data).toBeDefined();
                        if (updateResponse.data){
                            var record = updateResponse.data[0];
                            var fields = ['id', 'title', 'description', 'name', 'images', 'url', 'type', 'html', 'markdown', 'text', 'tags', 'images'];
                            for (var i=0; i<fields.length; i++)
                                if (fields[i]!='tags' && fields[i]!='images')
                                    expect(record[fields[i]]).toEqual(createdRecord[fields[i]]);
                                else
                                    if (record[fields[i]].length>0 && createdRecord[fields[i]].length>0)
                                        expect(record[fields[i]][0]).toEqual(createdRecord[fields[i]][0]);

                        }
                    });

                    describe('Remove created post', function() {

                        beforeEach(function(done){
                            if (deleteResponse!==undefined){
                                done();
                                return;
                            }
                            //api.debug=true;
                            api.postJson('/api/v1/post/delete/'+createdRecord.id, {}, function(response){
                                deleteResponse = response;
                                done();
                            });
                        });

                        it('response structure must be correct', function() {
                            expect(typeof deleteResponse).toEqual('object');
                            expect(deleteResponse.code).toEqual('ok');
                        });

                        describe('Logout from site', function() {

                            beforeEach(function(done){
                                if (logoutResponse2!==undefined){
                                    done();
                                    return;
                                }
                                //api.debug=true;
                                api.postJson('/api/v1/account/logout', {
                                }, function(response){
                                    logoutResponse2 = response;
                                    done()

                                });
                            });

                            it('response structure must be correct', function() {
                                expect(typeof logoutResponse2).toEqual('object');
                                expect(logoutResponse2.code).toEqual('ok');
                            });
                        });
                    });
                });
            });
        });
    });
});