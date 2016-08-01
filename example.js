define([],
    function() {
	var app = angular.module('backdrop');
	
		
	app.controller('bdController',['$scope','$rootScope','$http','$q','$filter','$routeParams','$timeout','$location','backDropServiceNg',
	                                       function($scope,$rootScope,$http, $q,$filter,$routeParams,$timeout,$location,backDropServiceNg) {
		
		visitBackDropService.init("Getting Details");
		visitBackDropService.runBackdrop();
		
		
		$timeout(function() {
			//clear
			visitBackDropService.clearBackdrop();
		},5000);
		
	}]);
	
});	
