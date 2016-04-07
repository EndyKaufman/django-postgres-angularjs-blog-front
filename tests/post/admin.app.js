describe('[Angular] Work with posts as admin', function() {
    var app = require('./../app.helpers.js');

    var
    appConfigResponse = undefined, adminResponse=undefined,
    listResponse = undefined, createResponse = undefined,
    updateResponse = undefined, uploadResponse = undefined,
    deleteUploadResponse = undefined, deleteResponse = undefined;

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
            if (adminResponse!==undefined){
                done();
                return;
            }
            element(by.id('loginNav')).isPresent().then(function(isPresent){
                if (isPresent){
                    element(by.id('loginNav')).click();
                    browser.sleep(5000).then(function(){
                        app.AccountSvc.doLogin('admin@email.com','admin@email.com').then(function(response){
                            adminResponse = response;
                            done();
                        });
                    });
                }else{
                    app.AppConfig.get().then(function(response){
                        adminResponse = response.user;
                        done();
                    });
                }
            });

      });

      it('response structure must be correct', function() {
            expect(typeof adminResponse).toEqual('object');
            if (adminResponse){
                //console.log(adminResponse);
                var userData = adminResponse;
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
                element(by.id('postNav')).click();
                browser.sleep(5000).then(function(){
                    app.PostSvc.list().then(function(response){
                        listResponse = response;
                        done();
                    });
                });
            });

            it('response structure must be correct', function() {
                expect(typeof listResponse).toEqual('object');
                if (listResponse){
                    var record = listResponse[0];
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
                    element(by.id('postCreate')).click();
                    app.PostSvc.doCreate({
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
                    }).then(function(response){
                        createResponse = response;
                        createdRecord = response;
                        done();
                    });
                });

                it('response structure must be correct', function() {
                    expect(typeof createResponse).toEqual('object');
                    if (createResponse){
                        var record = createResponse;
                        var fields = ['id', 'title', 'description', 'name', 'images', 'url', 'type', 'html', 'markdown', 'text', 'tags', 'images'];
                        for (var i=0; i<fields.length; i++){
                            expect(record[fields[i]]).toBeDefined();
                        }
                    }
                });

                it('tags must be created or used exists', function() {
                    expect(createResponse).toBeDefined();
                    if (createResponse){
                        var record = createResponse;
                        expect(record.tags[0].text).toEqual('tag1');
                        expect(record.tags[0].id).toBeDefined();
                    }
                });

                it('images must be created or used exists', function() {
                    expect(createResponse).toBeDefined();
                    if (createResponse){
                        var record = createResponse;
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
                        element(by.id('postUpdate')).click();
                        app.PostSvc.doUpdate(createdRecord).then(function(response){
                            updateResponse = response;
                            done();
                        });
                    });

                    it('response structure must be correct', function() {
                        expect(typeof updateResponse).toEqual('object');
                        if (updateResponse){
                            var record = updateResponse;
                            var fields = ['id', 'title', 'description', 'name', 'images', 'url', 'type', 'html', 'markdown', 'text', 'tags', 'images'];
                            for (var i=0; i<fields.length; i++)
                                expect(record[fields[i]]).toBeDefined();
                        }
                    });

                    it('record must be updated', function() {
                        expect(updateResponse).toBeDefined();
                        if (updateResponse){
                            var record = updateResponse;
                            var fields = ['id', 'title', 'description', 'name', 'images', 'url', 'type', 'html', 'markdown', 'text', 'tags', 'images'];
                            for (var i=0; i<fields.length; i++){
                                if (fields[i]!='tags' && fields[i]!='images')
                                    expect(record[fields[i]]).toEqual(createdRecord[fields[i]]);
                                else
                                    if (record[fields[i]].length>0 && createdRecord[fields[i]].length>0)
                                        expect(record[fields[i]][0].id).toEqual(createdRecord[fields[i]][0].id);
                            }
                        }
                    });

                    describe('Upload image and add to created post', function() {

                        it('response structure must be correct', function() {
                            element(by.id('postUpdate')).click();
                            browser.sleep(300).then(function(){
                                app.PostSvc.item().then(function(item){
                                    element(by.id('postAddImage')).click();
                                    browser.sleep(300).then(function(){
                                        element(by.id('postSelect0Image')).click();
                                        browser.sleep(300).then(function(){
                                            element(by.id('fileCreate')).click();
                                            browser.sleep(300).then(function(){
                                                element(by.id('FileUpload')).sendKeys(__dirname+'/media/image1.jpg');
                                                element(by.id('FileComment')).sendKeys('test upload');
                                                element(by.id('fileCreateConfirm')).click();
                                                browser.sleep(5000).then(function(){
                                                    app.FileSvc.item().then(function(item){
                                                        uploadResponse=item;
                                                        element(by.id('fileListConfirm')).click();
                                                        browser.sleep(300).then(function(){
                                                            element(by.id('postSave')).click();
                                                            browser.sleep(5000).then(function(){
                                                                app.PostSvc.item().then(function(item){
                                                                    expect(item.images[0].src).toEqual(uploadResponse.src);
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });

                        describe('Remove uploaded file post', function() {

                            it('response structure must be correct', function() {
                                element(by.id('postUpdate')).click();
                                browser.sleep(300).then(function(){
                                    app.PostSvc.item().then(function(postItem){
                                        element(by.id('postSelect0Image')).click();
                                        browser.sleep(300).then(function(){
                                            app.FileSvc.item().then(function(fileItem){
                                                app.FileSvc.doDelete(fileItem).then(function(fileItem){
                                                    deleteUploadResponse=fileItem;
                                                    element(by.id('fileListCancel')).click();
                                                    element(by.id('postDelete0Image')).click();
                                                    browser.sleep(300).then(function(){
                                                        element(by.id('postSave')).click();
                                                        browser.sleep(5000).then(function(){
                                                            app.PostSvc.item().then(function(postItem){
                                                                expect(fileItem.id).not.toBeDefined();
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });

                            describe('Remove created post', function() {

                                beforeEach(function(done){
                                    if (deleteResponse!==undefined){
                                        done();
                                        return;
                                    }
                                    element(by.id('postUpdate')).click();
                                    app.PostSvc.doDelete(createdRecord).then(function(response){
                                        deleteResponse = response;
                                        done();
                                    });
                                });

                                it('response structure must be correct', function() {
                                    expect(typeof deleteResponse).toEqual('object');
                                    expect(deleteResponse.id).not.toBeDefined();
                                });
                            });
                        });

                    });
                });
            });
      });
    });
});