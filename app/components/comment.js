angular.module('app').component('comment', {
    templateUrl: '../templates/comment.html',
    controllerAs: 'vm',
    bindings: {
        inpost: '<'
    }
});

