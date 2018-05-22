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