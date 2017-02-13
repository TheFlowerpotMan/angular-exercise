angular.module('app').controller('PostController', PostController);

function PostController($http) {
    var vm = this;
    vm.postID = getParameterByName('postID');
    vm.userID = getParameterByName('userID');
    vm.post = [];
    vm.users = [];
    vm.photo = [];
    vm.comments = [];
    loadPost();

    function loadPost() {
        $http.get('http://jsonplaceholder.typicode.com/posts/' + vm.postID).then(function (response) {
            vm.post = response.data;
        });
        $http.get('http://jsonplaceholder.typicode.com/users/' + vm.userID).then(function (response) {
            vm.users = response.data;
        });
        $http.get('http://jsonplaceholder.typicode.com/photos/' + vm.userID).then(function (response) {
            vm.photo = response.data;
        });
        $http.get('http://jsonplaceholder.typicode.com/comments?postId=' + vm.postID).then(function (response) {
            vm.comments = response.data;
        });
    }
}

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}