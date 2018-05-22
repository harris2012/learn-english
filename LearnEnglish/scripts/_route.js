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