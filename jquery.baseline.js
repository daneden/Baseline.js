/*global jQuery */
/*!
* Baseline.js 1.0
*
* Copyright 2012, Daniel Eden http://daneden.me
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Wed June 20 11:39:00 2012 GMT
*/
(function( $ ) {

	$.fn.baseline = function(target) {

		var tall;
		var newHeight;

		return this.each(function(){
			var $this = $(this);

			var setbase = function(target) {
				$this.removeAttr('style');
				tall = $this.height();
				newHeight = Math.floor(tall / target) * target;
				$this.css('maxHeight', newHeight);
			}

			setbase(target);

			$(window).resize(function(){
				setbase(target);
			});

		});

	}

}) ( jQuery );