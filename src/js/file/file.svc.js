app.factory('FileSvc', function (AppConst, $rootScope, $modalBox, $modal, $timeout, uiUploader) {
    var service={};

    var columnDefs = [
        {headerName: "ID", field: "id", width:50},
        {headerName: "Url", field: "url", width:300},
        {headerName: "Comment", field: "comment", width:200}
    ];

    var rowData=[
        {id: 1, url: "/media/file1", comment: 'test comment 1'},
        {id: 2, url: "/media/file2", comment: 'test comment 2'},
        {id: 3, url: "/media/file3", comment: 'test comment 3'}
    ];

    service.gridOptions={
        columnDefs: columnDefs,
        rowData: rowData
    };

    service.doRemove = function(file) {
        console.log('deleting=' + file);
        uiUploader.removeFile(file);
    };

    service.doRemoveAll = function() {
        uiUploader.removeAll();
    };

    service.doUpload = function(FileComment) {
        console.log(FileComment, service.files);
        console.log('uploading...');
        uiUploader.startUpload({
            url: 'http://realtica.org/ng-uploader/demo.html',
            concurrency: 2,
            onProgress: function(file) {
                console.log(file.name + '=' + file.humanSize);
            },
            onCompleted: function(file, response) {
                console.log(file + 'response' + response);
            }
        });
    };

    service.files = [];

    service.showManager=function(model, callbackOk, callbackCancel){
        var data=undefined;
        if (data===undefined)
            data={values:[]};

        if (data.title===undefined)
            data.title='Select file2';

        if (callbackOk===undefined)
            callbackOk=function(){
            }
        if (callbackCancel===undefined)
            callbackCancel=function(){
            }

        var boxOptions = {
            title: data.title,
            confirmTemplate: 'views/file/list.modal.html',
            size: 'lg',
            boxType: 'confirm',
            theme: 'alert',
            effect: false,
            confirmText: 'Select',
            cancelText: 'Cancel',
            afterConfirm: callbackOk,
            afterCancel: callbackCancel
        }

        $modalBox(boxOptions);

        $timeout(function(){
            console.log($('#FileUpload'));
            $('#FileUpload').on('change', function(e) {

            console.log(arguments);
                var files = e.target.files;
                uiUploader.addFiles(files);
                service.files = uiUploader.getFiles();
            });
        });
        
        //$rootScope.$broadcast('message.confirm', message, data, callbackOk);
    }

    service.init=function(){
    }

    return service;
  });