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

		// Set up our variables, like a good little developer
		var tall;
		var newHeight;

		return this.each(function(){
			var $this = $(this); // Set the images as objects

			var setbase = function(target) { // The fun starts here
				$this.css('maxHeight', 'none'); // Remove old max-height so that we can resize up as well as down
				tall = $this.height(); // Grab the height
				newHeight = Math.floor(tall / target) * target; // Make up a new height based on the baseline
				$this.css('maxHeight', newHeight); // Set it!
			};

			setbase(target); // Call on load

			$(window).resize(function(){ // And call again on resize.
				setbase(target);
			});

		});

	};

}) ( jQuery );