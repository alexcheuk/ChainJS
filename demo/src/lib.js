;(function ( window, document, undefined ) {

	function ChainJS(){}

	ChainJS.prototype = {
		deferred: function(){
			return new Deferred();
		}
	};

	var DEFERRED_STATE_PENDING = "pending";
	var DEFERRED_STATE_RESOLVED = "resolved";
	var DEFERRED_STATE_REJECTED = "rejected";

	function Deferred(){
		var state = DEFERRED_STATE_PENDING;

		var success_queue = [];
		var success_queue_index = 0;
		var success_data = null

		this.state = function(){
			return state;
		}

		this.resolve = function( data ){
			if( state != DEFERRED_STATE_PENDING ) return;

			success_data = data
			state = DEFERRED_STATE_RESOLVED;

			for( success_queue_index ; success_queue_index < success_queue.length ; success_queue_index++ ){
				success_queue[success_queue_index](success_data);
			}
		},

		this.then = function( successFn ){
			success_queue.push(successFn);

			if ( state != DEFERRED_STATE_PENDING ) {
				success_queue[success_queue_index++](success_data);
			}
			
			return this;
		}
	}

	window.Chain = new ChainJS();

})( window, document );