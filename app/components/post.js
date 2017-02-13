angular.module('app').component('post', {
    templateUrl: '../app/templates/postStructure.html',
    controllerAs: 'vm',
    bindings: {
        inpost: '<'
    }

});