angular.module('app', []);

angular.module('app').controller('IndexController', IndexController);


function IndexController($http) {
    var vm = this;
    var index = 0;
    loadData();
    vm.posts = [];
    vm.newPost = {
        title: '',
        body: ''
    }
    vm.page = 1;

    vm.createNewPost = function () {
        vm.posts.push(vm.newPost);
        vm.newPost = {};
    }   

    function loadData() {
        $http.get('http://jsonplaceholder.typicode.com/posts?_page=' + vm.page).then(function (response) {
            vm.posts = vm.posts.concat(response.data);
        });
    }
    
    vm.loadMore = function() {
        vm.page++;
        loadData();
    }
}   












