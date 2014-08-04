'use strict';
// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'mm.foundation',
    'ui.utils',
    'angularCharts'
  ]);
app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    });
    $routeProvider.when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    });
    $routeProvider.when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    });
    $routeProvider.when('/cv', {
      templateUrl: 'views/cv.html',
      controller: 'CVCtrl'
    });
    $routeProvider.otherwise({ redirectTo: '/' });
  }
]);
app.run([
  '$rootScope',
  '$location',
  function ($rootScope, $location) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      if (!$location.path().match(/^\/?$/) && !$rootScope.visitedOnce) {
        $rootScope.visitedOnce = true;
      }
    });
  }
]);
'use strict';
/* Services */
// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).value('version', '0.1');
'use strict';
/* Controllers */
angular.module('myApp.controllers', []).controller('MainCtrl', [
  '$scope',
  function ($scope) {
    $scope.vitalStats = [
      {
        key: 'Name',
        value: 'Jeanie Chung'
      },
      {
        key: 'Age',
        value: 'Twenty-something'
      },
      {
        key: 'Location',
        value: 'Chicago, IL'
      }
    ];
    $scope.portfolio = [
      {
        title: 'Cats',
        img: 'http://placekitten.com/600/600',
        description: 'Lorem ipsum bacon dolor pig fat jowl.',
        effect: 'bubba',
        delay: '0',
        animation: 'fadeLeft'
      },
      {
        title: 'CONEMO',
        img: 'http://placekitten.com/600/600',
        description: 'Lorem ipsum bacon dolor pig fat jowl.',
        effect: 'bubba',
        delay: '.5s',
        animation: 'fadeRight'
      },
      {
        title: 'FOCUS',
        img: 'http://placekitten.com/600/600',
        description: 'Lorem ipsum bacon dolor pig fat jowl.',
        effect: 'bubba',
        delay: '0s',
        animation: 'fadeLeft'
      },
      {
        title: 'Cool stuff',
        img: 'http://placekitten.com/600/600',
        description: 'Lorem ipsum bacon dolor pig fat jowl.',
        effect: 'bubba',
        delay: '.5s',
        animation: 'fadeRight'
      }
    ];
    $scope.fadeLeft = function () {
      $(this).addClass('animated fadeInLeft');
    };
    $scope.fadeRight = function () {
      $(this).addClass('animated fadeInRight');
    };
    $scope.offset = { offset: '80%' };
    $scope.zoomIn = function () {
      $(this).addClass('animated zoomIn');
    };
  }
]).controller('AboutCtrl', [
  '$scope',
  function ($scope) {
    $scope.message = 'This is my about page!';
  }
]).controller('ContactCtrl', [
  '$scope',
  function ($scope) {
    $scope.message = 'Placeholder for contact page!';
  }
]).controller('CVCtrl', [
  '$scope',
  '$timeout',
  function ($scope, $timeout) {
    // Pizza.init();
    $scope.jobs = [
      {
        year: '2014',
        position: 'Functional Analyst',
        company: 'RAZORFISH',
        location: 'Chicago, IL',
        tasks: [{
            one: 'doing stuff',
            two: 'doing more stuff',
            three: 'doing a lot of stuff'
          }]
      },
      {
        year: '2012',
        position: 'Research Assistant',
        company: 'NORTHWESTERN UNIVERSITY',
        location: 'Chicago, IL',
        tasks: [{
            one: 'doing stuff',
            two: 'doing more stuff',
            three: 'doing a lot of stuff'
          }]
      }
    ];
    $scope.barchart = 'bar';
    $scope.piechart = 'pie';
    $scope.pieData = {
      series: ['Activities'],
      data: [
        {
          x: 'Music',
          y: [15],
          tooltip: 'Violin, a capella, piano'
        },
        {
          x: 'Games',
          y: [30],
          tooltip: 'Mass Effect, Dragon Age, Battleship'
        },
        {
          x: 'Eating',
          y: [50],
          tooltip: 'Pizza, sushi, BBQ'
        },
        {
          x: 'Puns',
          y: [15],
          tooltip: 'I\'m a Jeanie in a bottle.'
        }
      ]
    };
    $scope.pieConfig = {
      title: 'Things I Like Doing',
      tooltips: true,
      labels: true,
      mouseover: function () {
        svg.append('svg:text').attr('dy', '.35em').attr('text-anchor', 'middle').text('Hello');
      },
      mouseout: function () {
        console.log('out');
      },
      click: function () {
        console.log('click');
      },
      legend: {
        display: false,
        position: 'left'
      },
      innerRadius: '40%',
      lineLegend: 'lineEnd'
    };
    $scope.barData = {
      series: ['Skills'],
      data: [
        {
          x: 'Programming',
          y: [5],
          tooltip: 'JavaScript, Ruby, AngularJS, Grunt'
        },
        {
          x: 'Web',
          y: [4],
          tooltip: 'HTML, CSS, jQuery'
        },
        {
          x: 'Design',
          y: [2],
          tooltip: 'Photoshop, Illustrator, Latt\xe9 art'
        },
        {
          x: 'Etc.',
          y: [3],
          tooltip: 'Spanish, Korean, Scuba Diving'
        }
      ]
    };
    $scope.barConfig = {
      title: 'Things I Am Learning',
      tooltips: true,
      labels: true,
      mouseover: function () {
        svg.append('svg:text').attr('dy', '.35em').attr('text-anchor', 'middle').text('Hello');
      },
      mouseout: function () {
        console.log('out');
      },
      click: function () {
        console.log('click');
      },
      legend: {
        display: false,
        position: 'left'
      },
      lineLegend: 'lineEnd'
    };
    $scope.message = 'Placeholder for CV page!';
  }
]).controller('navCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.navLinks = [
      {
        title: 'Home',
        url: '#',
        icon: ''
      },
      {
        title: 'About',
        url: 'about',
        icon: 'torso'
      },
      {
        title: 'Contact',
        url: 'contact',
        icon: 'at-sign'
      },
      {
        title: 'CV',
        url: 'cv',
        icon: 'results'
      }
    ];
    $scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1) || '#';
      return page === currentRoute ? 'active' : '';
    };
  }
]).controller('footerCtrl', [
  '$scope',
  function ($scope) {
    $scope.socialLinks = [
      {
        title: 'Github',
        url: 'https://github.com/jchung1005',
        icon: 'social-github'
      },
      {
        title: 'Instagram',
        url: 'http://instagram.com/jbeans5',
        icon: 'social-instagram'
      },
      {
        title: 'Email',
        url: 'mailto:hey@jeaniechung.com',
        icon: 'mail'
      }
    ];
  }
]);
'use strict';
/* Filters */
angular.module('myApp.filters', []).filter('interpolate', [
  'version',
  function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/gm, version);
    };
  }
]);
'use strict';
/* Directives */
angular.module('myApp.directives', []).directive('appVersion', [
  'version',
  function (version) {
    return function (scope, elm, attrs) {
      elm.text(version);
    };
  }
]).directive('bgImg', function () {
  return function (scope, element, attrs) {
    var src = attrs.bgImg;
    element.css({ 'background-image': 'url(' + src + ')' });
  };
});
$(document).ready(function () {
  $('.footer, .push').height($('.footer .row').height() + 'px');
  $('.wrapper').css({ 'margin-bottom': -1 * $('.footer .row').height() + 'px' });
});
window.onresize = function () {
  $('.footer, .push').height($('.footer .row').height() + 'px');
  $('.wrapper').css({ 'margin-bottom': -1 * $('.footer .row').height() + 'px' });
};