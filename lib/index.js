define([],
     function() {
		var app = angular.module('backdrop', ['ui.bootstrap',function($httpProvider) {
			
			}]);

	    	app.service('backDropServiceNg', ['$interval',function($interval) {
	    		
	    		this.intervalVar = null;
	    		this.intervalDelay = null;
	    		this.DEFAULT_INTERVAL_DELAY = 500;
	    		this.backdropMessage = "";
	    		this.DEFAULT_BACKDROP_MESSAGE = "Loading";
	    		
	    		this.init = function(backdropMessage,intervalDelay) {
	    			if ($("#ng-backdrop").length == 0) {
	    				this.createBackFropHtml();
	    			}
	    			this.setIntervalDelay(intervalDelay != null ? intervalDelay : this.DEFAULT_INTERVAL_DELAY);
	    			this.setBackdropMessage(backdropMessage != null ? backdropMessage : this.DEFAULT_BACKDROP_MESSAGE);
	    		}
	    		
	    		this.getIntervalVar = function() {
	    			return this.intervalVar;
	    		}
	    		
	    		this.setIntervalVar = function(intervalVar) {
	    			this.intervalVar = intervalVar;
	    		}
	    		
	    		this.getIntervalDelay = function() {
	    			return this.intervalDelay;
	    		}
	    		
	    		this.setIntervalDelay = function(intervalDelay) {
	    			this.intervalDelay = intervalDelay;
	    		}
	    		
	    		this.getBackdropMessage = function() {
	    			return this.backdropMessage;
	    		}
	    		
	    		this.setBackdropMessage = function(backdropMessage) {
	    			this.backdropMessage = backdropMessage;
	    			$("#ng-backdrop-msg-txt").html(backdropMessage);
	    		}
	    		
	    		/**
	    		 * Start the backdrop
	    		 */
	    		this.runBackdrop = function(bdMsg) {
	    			if (bdMsg != null) {
	    				this.setBackdropMessage(bdMsg);
	    			}
	    			$("#ng-backdrop").addClass("modal-backdrop product-backdrop fade in");
	    			$("#ng-backdrop-msg").css("visibility","visible");
	    			this.runDots();
	    		}
	    		
	    		/**
	    		 * Clear the backdrop and reset everything
	    		 */
	    		this.clearBackdrop = function() {
	    			$("#ng-backdrop").removeClass("modal-backdrop product-backdrop fade in");
	    			$("#ng-backdrop-msg").css("visibility","hidden");
	    			$interval.cancel(this.getIntervalVar());
	    			this.setIntervalVar(null);
	    			for (var i=0;i<=4;i++) {
	    				$("#loading-dot-" + i).removeClass("progress-dot-full");
	    			}
	    		}
	    		
	    		/**
	    		 * Fill in the progress dots
	    		 */
	    		this.runDots = function() {
	    			var curDotIndex = 0;
	    			var stop = $interval(function() {
	    				if (curDotIndex > 4) {
	    					curDotIndex = -1;
	    					for (var i=0;i<=4;i++) {
	    						$("#loading-dot-" + i).removeClass("progress-dot-full");
	    					}
	    				}
	    				$("#loading-dot-" + curDotIndex).addClass("progress-dot-full");
	    				curDotIndex++;
	    				
	    	         }, this.getIntervalDelay());
	    			this.setIntervalVar(stop);
	    		}
	    		
	    		this.createBackFropHtml = function() {
	    			$( "body" ).append('<div id="ng-backdrop" style="z-index: 1050;opacity:0.9"></div>' +
	    					'<div id="ng-backdrop-msg" class="ng-backdrop-msg">' +
			    				'<div class="pa-section-title" style="font-size: 40px" id="ng-backdrop-msg-txt"></div>' +
			    				'<div style="width: 220px;" class="center">' +
			    					'<span class="progress-dot" id="loading-dot-0"></span>' +
			    					'<span class="progress-dot" id="loading-dot-1" style="margin-left: 30px"></span>' +
			    					'<span class="progress-dot" id="loading-dot-2" style="margin-left: 30px"></span>' +
			    					'<span class="progress-dot" id="loading-dot-3" style="margin-left: 30px"></span>' +
			    					'<span class="progress-dot" id="loading-dot-4" style="margin-left: 30px"></span>' +
			    				'</div>' +
			    			'</div>');
	    		}
	    		
	    	}]);
	    	
});

