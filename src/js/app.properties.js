app.factory('AppProperties', function() {
    var service = {},
        list = angular.copy(AppConfig.properties);

    service.load = function(newList) {
        list = {};
        if (newList.length)
            for (var i = 0; i < newList.length; i++) {
                list[newList[i].name] = newList[i].value;
            }
    };

    service.set = function(name, value) {
        list[name] = value;
    };

    service.get = function(name, defValue) {
        if (defValue === undefined)
            defValue = null;
        if (list[name] !== undefined) {
            return list[name];
        } else {
            list[name] = defValue;
        }
        return list[name];
    };

    return service;
});