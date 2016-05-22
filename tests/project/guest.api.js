describe('Work with projects as guest', function() {
    var api = require('./../api.helpers.js');

    var appConfigResponse = undefined, itemResponse = undefined, listbysearchResponse = undefined, listbytagResponse = undefined, listResponse = undefined;

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

    describe('Get projects list', function() {

        beforeEach(function(done){
            if (listResponse!==undefined){
                done();
                return;
            }
            //api.debug=true;
            api.getJson('/api/v1/project', function(response){
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

        describe('Get first project', function() {

            beforeEach(function(done){
                if (itemResponse!==undefined){
                    done();
                    return;
                }
                //api.debug=true;
                api.getJson('/api/v1/project/'+listResponse.data[0].name, function(response){
                    itemResponse = response;
                    done();
                });
            });

            it('response structure must be correct', function() {
                expect(typeof itemResponse).toEqual('object');
                expect(itemResponse.code).toEqual('ok');
                expect(itemResponse.data).toBeDefined();
                if (itemResponse.data){
                    var record = itemResponse.data[0];
                    var fields = ['id', 'title', 'description', 'name', 'images', 'url', 'type', 'html', 'markdown', 'text', 'tags', 'images'];
                    for (var i=0; i<fields.length; i++)
                        expect(record[fields[i]]).toBeDefined();
                }
            });

            describe('Get projects list by tag', function() {

                beforeEach(function(done){
                    if (listbytagResponse!==undefined){
                        done();
                        return;
                    }
                    //api.debug=true;
                    api.getJson('/api/v1/project/list_by_tag/'+listResponse.data[0].tags[0].text, function(response){
                        listbytagResponse = response;
                        done();
                    });
                });

                it('response structure must be correct', function() {
                    expect(typeof listbytagResponse).toEqual('object');
                    expect(listbytagResponse.code).toEqual('ok');
                    expect(listbytagResponse.data).toBeDefined();
                    if (listbytagResponse.data){
                        var record = listbytagResponse.data[0];
                        var fields = ['id', 'title', 'description', 'name', 'images', 'url', 'type', 'html', 'markdown', 'text', 'tags', 'images'];
                        for (var i=0; i<fields.length; i++)
                            expect(record[fields[i]]).toBeDefined();
                    }
                });

                describe('Seacrh projects list by text', function() {

                    beforeEach(function(done){
                        if (listbysearchResponse!==undefined){
                            done();
                            return;
                        }
                        //api.debug=true;
                        api.getJson('/api/v1/project/search/'+listResponse.data[0].name, function(response){
                            listbysearchResponse = response;
                            done();
                        });
                    });

                    it('response structure must be correct', function() {
                        expect(typeof listbysearchResponse).toEqual('object');
                        expect(listbysearchResponse.code).toEqual('ok');
                        expect(listbysearchResponse.data).toBeDefined();
                        if (listbysearchResponse.data){
                            var record = listbysearchResponse.data[0];
                            var fields = ['id', 'title', 'description', 'name', 'images', 'url', 'type', 'html', 'markdown', 'text', 'tags', 'images'];
                            for (var i=0; i<fields.length; i++)
                                expect(record[fields[i]]).toBeDefined();
                        }
                    });
                })
            })
        })
    })
});