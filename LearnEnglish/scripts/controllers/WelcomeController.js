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