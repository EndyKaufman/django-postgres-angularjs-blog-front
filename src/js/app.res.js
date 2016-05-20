app.factory('AppRes', function($q, $http, $cookies, uiUploader) {
    var service = {};


    service.get = function(url) {
        return $http({
            method: 'GET',
            url: url
        });
    };

    service.post = function(url, data) {
        if (data === undefined)
            data = {};
        data = angular.copy(data);
        return $http.post(url, data);
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