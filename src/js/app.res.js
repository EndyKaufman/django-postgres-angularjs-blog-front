app.factory('AppRes', function($q, $http, $cookies, uiUploader, MessageSvc) {
    var service = {};


    service.get = function(url) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: url
        }).then(
            function(response) {
                if (response !== null && response !== undefined && response.data !== undefined &&
                    response.data !== null && response.data.code !== undefined && response.data.code == 'ok') {
                    deferred.resolve(response.data);
                } else {
                    MessageSvc.error(response.data.code, response.data);
                    deferred.reject(response.data);
                }
            },
            function(response) {
                if (response !== null && response !== undefined && response.data !== undefined &&
                    response.data !== null && response.data.code !== undefined) {
                    MessageSvc.error(response.data.code, response.data);
                    deferred.reject(response.data);
                } else
                    deferred.reject(null);
            }
        );
        return deferred.promise;
    };

    service.post = function(url, data) {
        var deferred = $q.defer();
        if (data === undefined)
            data = {};
        data = angular.copy(data);
        $http.post(url, data).then(
            function(response) {
                console.log(response);
                if (response !== null && response !== undefined && response.data !== undefined &&
                    response.data !== null && response.data.code !== undefined && response.data.code == 'ok') {
                    deferred.resolve(response.data);
                } else {
                    MessageSvc.error(response.data.code, response.data);
                    deferred.reject(response.data);
                }
            },
            function(response) {
                if (response !== null && response !== undefined && response.data !== undefined &&
                    response.data !== null && response.data.code !== undefined) {
                    MessageSvc.error(response.data.code, response.data);
                    deferred.reject(response.data);
                } else
                    deferred.reject(null);
            }
        );
        return deferred.promise;
    };

    service.addFiles = function(files) {
        uiUploader.addFiles(files);
        return uiUploader.getFiles();
    };

    service.upload = function(url, data) {
        var deferred = $q.defer();
        console.log('uploading...');
        uiUploader.startUpload({
            url: url,
            data: data,
            concurrency: 2,
            headers: {
                'Accept': 'application/json',
                'X-CSRFToken': $cookies.get('csrftoken')
            },
            onProgress: function(file) {
                console.log(file.name + '=' + file.humanSize);
            },
            onCompleted: function(file, response) {
                deferred.resolve({
                    data: JSON.parse(response)
                });
                console.log(file + 'response' + response);
            }
        });
        return deferred.promise;
    };

    service.init = function(reload) {};
    service.init();
    return service;
});