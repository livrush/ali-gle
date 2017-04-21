const router = function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
    })
    .when('/search', {
      templateUrl: 'views/search.html',
    })
    .otherwise({
      redirectTo: '/home',
    });
};

angular.module('ali-gle', ['ngRoute', 'main-Fact', 'main-Ctrl'])
.config(router);

angular.module('main-Fact', [])
.factory('mainFact', function() {
    const quotes = [
      "What does the error say?",
      "Did you Google it?",
      "Google it.",
      "What does your console say?",
      "Someone probably had that issue on Stack Overflow!",
      "Come on,\rthat's so easy!",
      "Very well.",
      "There's a million ways to skin a cat!"
    ];

    const search = () => {
      var cx = '015179888997701780015:mucxlpfvmtc';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    };

    const randomQuote = () => {
        const max = quotes.length - 1;
        const index = Math.floor(Math.random() * max);
        return quotes[index];
    }

    return {
      search,
      randomQuote,
    };
})

angular.module('main-Ctrl', [])
.controller('mainCtrl', function($scope, $location, mainFact) {
    if (!$scope.quote) {
      $location.path('home');
    };

    $scope.bug = null;
    $scope.quote = null;
    $scope.answer = false;

    $scope.test = (input) => {
        console.log(input);
    };

    $scope.searchBox = () => {
      mainFact.search();
    };

    $scope.ask = (question) => {
        $scope.quote = mainFact.randomQuote();
        $scope.answer = true;
        $location.path('search');
    };

    $scope.reset = () => {
        $scope.answer = false;
        $location.path('home');
    };
});
