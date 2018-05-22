function WelcomeController($scope, LearnEnglishService) {

    function word_items_calback(response) {

        $scope.words = response.words;
    }

    //有点印象
    $scope.maybe = function (word) {

        var request = {};
        request.word = word.english;

        LearnEnglishService.word_maybe(request).then(function (response) {

            word.hide = true;
        })
    }

    //完全不会
    $scope.skip = function (word) {

        var request = {};
        request.word = word.english;

        LearnEnglishService.word_skip(request).then(function (response) {

            word.hide = true;
        })
    }

    //这词我会
    $scope.known = function (word) {

        var request = {};
        request.word = word.english;

        LearnEnglishService.word_known(request).then(function (response) {

            word.hide = true;
        })
    }

    //加载更多
    $scope.loadMore = function () {

        LearnEnglishService.word_items({}).then(word_items_calback);
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