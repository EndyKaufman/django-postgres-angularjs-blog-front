app.config(function($selectProvider, showErrorsConfigProvider, $carouselProvider, $modalProvider) {
    showErrorsConfigProvider.showSuccess(true);

    var mydefaults = {
        outerWidth: '100%',
        //innerHeight:'350px',
        interval: 15000,
    };
    angular.extend($carouselProvider.defaults, mydefaults);

    defaults = {
        backdrop: false
    };
    angular.extend($modalProvider.defaults, mydefaults);
});