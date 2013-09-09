;(function ( window, document, undefined ) {

	function ChainJS(){

	}

	ChainJS.prototype = {
		deferred: function(){
			return new Deferred();
		}
	};

	var DEFERRED_STATE_PENDING = "pending";
	var DEFERRED_STATE_RESOLVED = "resolved";
	var DEFERRED_STATE_REJECTED = "rejected";

	function Deferred(){
		this._state = DEFERRED_STATE_PENDING;
	}

	Deferred.prototype = {
		resolve: function( data ){

		},

		then: function( fn ){
			if ( typeof fn === "function" ){
				var fn_result = fn();
				if ( fn_result instanceof Deferred ){
					return fn_result;
				} else {
					return new Deferred().resolve(fn_result);
				}
			}
		},

		when: function( fn ){

		},

		done: function( fn ){

		},

		fail: function( fn ){

		},

		always: function( fn ){

		}
	}

	window.Chain = new ChainJS();

})( window, document );