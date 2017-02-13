angular.module('app').controller('UserEditController', UserEditController);

function UserEditController($http) {
    var vm = this;
    vm.userID = getParameterByName('userID');
    vm.users = [];
    vm.photo = [];
    loadPost();

    function loadPost() {
        $http.get('http://jsonplaceholder.typicode.com/users/' + vm.userID).then(function (response) {
            vm.users = response.data;
        });
        $http.get('http://jsonplaceholder.typicode.com/photos/' + vm.userID).then(function (response) {
            vm.photo = response.data;
        });
    }
    save.onclick = function saveData() {
        $http.put('http://jsonplaceholder.typicode.com/users/' + vm.userID, vm.users).then(function(response) {
            console.log(response)
        });
        $http.put('http://jsonplaceholder.typicode.com/photos/' + vm.userID, vm.photo).then(function(response) {
            console.log(response)
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