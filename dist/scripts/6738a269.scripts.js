"use strict";var app=angular.module("myApp",["ngRoute","ngAnimate","myApp.filters","myApp.services","myApp.directives","myApp.controllers","mm.foundation","ui.utils","angularCharts"]);app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}),a.when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}),a.when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}),a.when("/cv",{templateUrl:"views/cv.html",controller:"CVCtrl"}),a.otherwise({redirectTo:"/"})}]),app.run(["$rootScope","$location",function(a,b){a.$on("$locationChangeStart",function(){b.path().match(/^\/?$/)||a.visitedOnce||(a.visitedOnce=!0)})}]),angular.module("myApp.services",[]).value("version","0.1"),angular.module("myApp.controllers",[]).controller("MainCtrl",["$scope",function(a){a.vitalStats=[{key:"Name",value:"Jeanie Chung"},{key:"Age",value:"Twenty-something"},{key:"Location",value:"Chicago, IL"}],a.portfolio=[{title:"Cats",img:"http://placekitten.com/600/600",description:"Lorem ipsum bacon dolor pig fat jowl.",effect:"bubba",delay:"0",animation:"fadeLeft"},{title:"CONEMO",img:"http://placekitten.com/600/600",description:"Lorem ipsum bacon dolor pig fat jowl.",effect:"bubba",delay:".5s",animation:"fadeRight"},{title:"FOCUS",img:"http://placekitten.com/600/600",description:"Lorem ipsum bacon dolor pig fat jowl.",effect:"bubba",delay:"0s",animation:"fadeLeft"},{title:"Cool stuff",img:"http://placekitten.com/600/600",description:"Lorem ipsum bacon dolor pig fat jowl.",effect:"bubba",delay:".5s",animation:"fadeRight"}],a.fadeLeft=function(){$(this).addClass("animated fadeInLeft")},a.fadeRight=function(){$(this).addClass("animated fadeInRight")},a.offset={offset:"80%"},a.zoomIn=function(){$(this).addClass("animated zoomIn")}}]).controller("AboutCtrl",["$scope",function(a){a.message="This is my about page!"}]).controller("ContactCtrl",["$scope",function(a){a.message="Placeholder for contact page!"}]).controller("CVCtrl",["$scope","$timeout",function(a){a.jobs=[{year:"2014",position:"Functional Analyst",company:"RAZORFISH",location:"Chicago, IL",tasks:[{one:"doing stuff",two:"doing more stuff",three:"doing a lot of stuff"}]},{year:"2012",position:"Research Assistant",company:"NORTHWESTERN UNIVERSITY",location:"Chicago, IL",tasks:[{one:"doing stuff",two:"doing more stuff",three:"doing a lot of stuff"}]}],a.barchart="bar",a.piechart="pie",a.pieData={series:["Activities"],data:[{x:"Music",y:[15],tooltip:"Violin, a capella, piano"},{x:"Games",y:[30],tooltip:"Mass Effect, Dragon Age, Battleship"},{x:"Eating",y:[50],tooltip:"Pizza, sushi, BBQ"},{x:"Puns",y:[15],tooltip:"I'm a Jeanie in a bottle."}]},a.pieConfig={title:"Things I Like Doing",tooltips:!0,labels:!0,mouseover:function(){svg.append("svg:text").attr("dy",".35em").attr("text-anchor","middle").text("Hello")},mouseout:function(){console.log("out")},click:function(){console.log("click")},legend:{display:!1,position:"left"},innerRadius:"40%",lineLegend:"lineEnd"},a.barData={series:["Skills"],data:[{x:"Programming",y:[5],tooltip:"JavaScript, Ruby, AngularJS, Grunt"},{x:"Web",y:[4],tooltip:"HTML, CSS, jQuery"},{x:"Design",y:[2],tooltip:"Photoshop, Illustrator, Latté art"},{x:"Etc.",y:[3],tooltip:"Spanish, Korean, Scuba Diving"}]},a.barConfig={title:"Things I Am Learning",tooltips:!0,labels:!0,mouseover:function(){svg.append("svg:text").attr("dy",".35em").attr("text-anchor","middle").text("Hello")},mouseout:function(){console.log("out")},click:function(){console.log("click")},legend:{display:!1,position:"left"},lineLegend:"lineEnd"},a.message="Placeholder for CV page!"}]).controller("navCtrl",["$scope","$location",function(a,b){a.navLinks=[{title:"Home",url:"#",icon:""},{title:"About",url:"about",icon:"torso"},{title:"Contact",url:"contact",icon:"at-sign"},{title:"CV",url:"cv",icon:"results"}],a.navClass=function(a){var c=b.path().substring(1)||"#";return a===c?"active":""}}]).controller("footerCtrl",["$scope",function(a){a.socialLinks=[{title:"Github",url:"https://github.com/jchung1005",icon:"social-github"},{title:"Instagram",url:"http://instagram.com/jbeans5",icon:"social-instagram"},{title:"Email",url:"mailto:hey@jeaniechung.com",icon:"mail"}]}]),angular.module("myApp.filters",[]).filter("interpolate",["version",function(a){return function(b){return String(b).replace(/\%VERSION\%/gm,a)}}]),angular.module("myApp.directives",[]).directive("appVersion",["version",function(a){return function(b,c){c.text(a)}}]).directive("bgImg",function(){return function(a,b,c){var d=c.bgImg;b.css({"background-image":"url("+d+")"})}}),$(document).ready(function(){$(".footer, .push").height($(".footer .row").height()+"px"),$(".wrapper").css({"margin-bottom":-1*$(".footer .row").height()+"px"})}),window.onresize=function(){$(".footer, .push").height($(".footer .row").height()+"px"),$(".wrapper").css({"margin-bottom":-1*$(".footer .row").height()+"px"})};