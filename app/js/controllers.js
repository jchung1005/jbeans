'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.vitalStats = [{
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
    }];

    $scope.portfolio = [{
        title: 'Cats',
        img: 'http://placekitten.com/600/600',
        description: 'Lorem ipsum bacon dolor pig fat jowl.',
        effect:'bubba',
        delay:'0',
        animation: 'fadeLeft',
        url: ''
      },
      {
        title: 'CONEMO',
        img: 'http://placekitten.com/600/600',
        description: 'Lorem ipsum bacon dolor pig fat jowl.',
        effect:'bubba',
        delay:'.5s',
        animation: 'fadeRight',
        url: 'https://github.com/cbitstech/conemo_app'
      },
      {
        title: 'FOCUS',
        img: 'http://placekitten.com/600/600',
        description: 'Lorem ipsum bacon dolor pig fat jowl.',
        effect:'bubba',
        delay:'0s',
        animation: 'fadeLeft'
      },
      {
        title: 'Cool stuff',
        img: 'http://placekitten.com/600/600',
        description: 'Lorem ipsum bacon dolor pig fat jowl.',
        effect:'bubba',
        delay:'.5s',
        animation: 'fadeRight'
    }];

    $scope.fadeLeft = function() {
        $(this).addClass('animated fadeInLeft');
    };
    $scope.fadeRight = function() {
        $(this).addClass('animated fadeInRight');
    };
    $scope.offset = {
        offset: '80%'
      };
    $scope.zoomIn = function() {
        $(this).addClass('animated zoomIn');
    };

  }])

  .controller('AboutCtrl', ['$scope', function($scope) {
    $scope.message = "This is my about page!";
    $scope.fadeInDown = function() {
      $(this).addClass('animated fadeInDown');
    };

    $scope.offset = {
      offset: '55%'
    };
  }])

  .controller('ContactCtrl', ['$scope', function($scope) {
    $scope.message = "Placeholder for contact page!";
  }])

  .controller('CVCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.jobs = [
      {
        dates: "Present",
        position: "Developer",
        company: "NORTHWESTERN UNIVERSITY",
        location: "Chicago, IL",
        tasks: [
          {
           one: "Developing and debugging websites and mobile apps that target behavioral interventions using AngularJS, HTML5, CSS3, and Ruby on Rails. Additional experience using GitHub, Cordova, CLI, Grunt, Bower, and Node.",
           two: "Interfacing with clinicians and researchers to determine technical requirements and priorities to work in an agile manner.",
           three: "Continuing to create JavaScript libraries and contributing to Bower and Yeoman to assist in scalability in group's app development." 
          }
        ]
      },
      {
        dates: "1.2013 - 3.2014",
        position: "Functional Analyst",
        company: "RAZORFISH",
        location: "Chicago, IL",
        tasks: [
          {
           one: "Collaborated with Fortune 500 clients across six time zones and pushing code changes on a daily basis.",
           two: "Reviewed code repositories and ensured best practices amongst five different disciplines via elementool, AtTask, JIRA, and Confluence.",
           three: "Self-taught coding languages to better communicate with developers and became a highly-utilized front-end resource." 
          }
        ]
      },
      {
        dates: "10.2012 - 1.2013",
        position: "Research Assistant",
        company: "NORTHWESTERN UNIVERSITY",
        location: "Chicago, IL",
        tasks: [
          {
           one: "Co-authored 20+ health articles targeting medical providers, adolescents, and academic professionals.",
           two: "Researched GIS methods to reduce risky drug use by 20%.",
           three: "Wrote custom syntax for SPSS to save 40+ hours of manual analysis." 
          }
        ]
      },
      {
        dates: "6.2012 - 10.2012",
        position: "QA Analyst",
        company: "Mattersight Corporation",
        location: "Chicago, IL",
        tasks: [
          {
           one: "Composed client playbooks that reduced “Help” submission by 70% and future requests from client for additional guides.",
           two: "Tested and debugged new functionality to save 50+ hours and $3,000 in development costs.",
           three: "Jumped into projects at any point of lifecycle and employed scrum, agile, waterfall, and sometimes “agilefall” methodologies." 
          }
        ]
      }];

    $scope.skills = [
      {
        name: "Programming",
        perc: "80",
        labelColor: "#2B7C80",
        barColor: "#20B2AA",
        tooltip: "JavaScript, Ruby, Python"
      },
      {
        name: "Web",
        perc: "70",
        labelColor: "#48D1CC",
        barColor: "#AFEEEE",
        tooltip: "HTML, CSS, Foundation, Bootstrap"
      },
      {
        name: "Design",
        perc: "40",
        labelColor: "#008cba",
        barColor: "#87CEEB",
        tooltip: "Photoshop, inDesign, Latté art"
      },
      {
        name: "Etc.",
        perc: "76",
        labelColor: "#3CB371",
        barColor: "#66CDAA",
        tooltip: "Korean, Spanish, DJing"
      }]
    $scope.bounceIn = function() {
      if ($window.innerWidth > 800) {
        $(this).addClass("animated bounceIn");
      }
    };

    $scope.fadeInDown = function() {
      if ($window.innerWidth > 800) {
        $(this).addClass("animated fadeInDown");
      }
    };

    $scope.animatePerc = function() {
      $(this).animate({
        width:$(this).attr('data-percent')
      },1000);
    };
    $scope.offset = {
      offset: '85%'
    }

    $scope.message = "Placeholder for CV page!";
  }])

  .controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navLinks = [{
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
    }];

	$scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || '#';
        return page === currentRoute ? 'active' : '';
    };
  }])

  .controller('footerCtrl', ['$scope', function($scope) {
    $scope.socialLinks = [{
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
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/profile/view?id=129993573',
      icon: 'social-linkedin'
    },
    {
      title: 'XBL',
      url: 'http://www.xboxgamertag.com/search/jbeans5/',
      icon: 'social-xbox'
    }];
  }]);
