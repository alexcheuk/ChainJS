;(function ( $, window, document, undefined ) {

	var defaults = {
		
	};

	var library_name = "lib_data"

	function Library( element, options ){
		this.handle = $(element);
		this.options = $.extend(null, defaults, options);
		this._init();
	}

	Library.prototype = {
		_init: function(){
			
		}
	};

	$.fn.Library = function(method) {
		if (Library.prototype[method]) {
			if(!$(this).data('library_name')){
				console.warn('Element has not been initialized before, initializing with default options.');
				$(this).Library();
			}

			return $(this).data('library_name')[method].apply($(this).data('library_name'), Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return this.each(function() {
				if ( !$.data( this, "library_name" ) ) {
						$.data( this, "library_name", new Library( this, method || {} ) );
				}
			});
		} else {
			$.error('Method ' + method + ' does not exist on Library');
		}
	};

})( jQuery, window, document );