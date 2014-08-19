'use strict';

/* Directives */


angular.module('myApp.directives', [])
	.directive('appVersion', ['version', function(version) {
	    return function(scope, elm, attrs) {
	      elm.text(version);
	    };
	}])
	.directive('bgImg', function(){
    	return function(scope, element, attrs){
	        var src = attrs.bgImg;
	        element.css({
	            'background-image': 'url(' + src +')'
	          });
    	};
	});
