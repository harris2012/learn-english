function LearnEnglishService($resource, $q) {

    var resource = $resource('', {}, {
        word_items: { method: 'POST', url: '/api/word/items' },
        word_examples: { method: 'POST', url: '/api/word/examples' },
        word_skip: { method: 'POST', url: '/api/word/skip' },
        word_known: { method: 'POST', url: '/api/word/known' },
        word_maybe: { method: 'POST', url: '/api/word/maybe' }
    });

    return {
        word_items: function (request) { var d = $q.defer(); resource.word_items({}, request, function (result) { d.resolve(result); }, function (result) { d.reject(result); }); return d.promise; },
        word_examples: function (request) { var d = $q.defer(); resource.word_examples({},request, function (result) { d.resolve(result); }, function (result) { d.reject(result); }); return d.promise; },
        word_skip: function (request) { var d = $q.defer(); resource.word_skip({}, request, function (result) { d.resolve(result); }, function (result) { d.reject(result); }); return d.promise; },
        word_known: function (request) { var d = $q.defer(); resource.word_known({}, request, function (result) { d.resolve(result); }, function (result) { d.reject(result); }); return d.promise; },
        word_maybe: function (request) { var d = $q.defer(); resource.word_maybe({}, request, function (result) { d.resolve(result); }, function (result) { d.reject(result); }); return d.promise; }
    }
}
function WelcomeController($scope, LearnEnglishService) {

    function word_items_calback(response) {

        $scope.words = response.words;
    }

    function word_skip_callback(response) {

        word.hide = true;
    }

    function word_known_callback(response) {

        word.hide = true;
    }

    function word_maybe_callback(response) {

        word.hide = true;
    }

    //有点印象
    $scope.maybe = function (word) {

        LearnEnglishService.maybe(word.english).then()
    }

    //完全不会
    $scope.skip = function (word) {
        LearnEnglishService.skip(word.english).then()
    }

    //这词我会
    $scope.known = function (word) {
        LearnEnglishService.known(word.english).then()
    }

    //加载更多
    $scope.loadMore = function () {

        LearnEnglishService.words().then(word_items_calback);
    }

    LearnEnglishService.word_items({}).then(word_items_calback);

    //LearnEnglishService.word().then(function (response) {

    //    if (response.statusCode != 1) {

    //        alert('请求出错');
    //        return;
    //    }

    //    $scope.words = response.examples;

    //    if ($scope.words != null && $scope.words.length > 0) {
    //        for (var i = 0; i < $scope.words.length; i++) {

    //            $scope.words[i].en = $scope.words[i].en.split('lumber');
    //        }
    //    }
    //})
}
function WordController($scope) {

}
var route = function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/welcome').when('/', '/welcome');

    $stateProvider.state('gct', {
        url: '/',
        views: {
            'header': { templateUrl: 'scripts/views/view_header.html?v=' + window.version },
            'footer': { templateUrl: 'scripts/views/view_footer.html?v=' + window.version },
            '': { template: '<div class="container" ui-view></div>' }
        }
    });

    $stateProvider.state('gct.welcome', { url: 'welcome', templateUrl: 'scripts/views/view_welcome.html?v=' + window.version, controller: WelcomeController });

    //单词详情页
    $stateProvider.state('gct.word', { url: 'word/:word', templateUrl: 'scripts/views/view_word.html?v=' + window.version, controller: WordController });
}
var app = angular.module('nuist', ['ngResource', 'ui.router', 'ui.bootstrap']);

app.config(route);

app.service('LearnEnglishService', ['$resource', '$q', LearnEnglishService]);