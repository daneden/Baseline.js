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

	$.fn.baseline = function(breakpoints) {

		// Set up our variables, like a good little developer
		var tall, newHeight, base;

		return this.each(function(){
			var $this = $(this); // Set the images as objects

			var setbase = function(breakpoints) { // The fun starts here
			
				// Check if a single value or multiple breakpoints are given                
		                if (typeof breakpoints === 'number') {
		                    base = breakpoints;
		                } else if (typeof breakpoints === 'object') {
		                    // Loop through the breakpoints and check which baseline to apply
		                    for (key in breakpoints) {
		                        if (document.width > parseInt(key)) {
		                            base = breakpoints[key];
		                        }
		                    }
		                }
                
				$this.removeAttr('style'); // Remove old max-height so that we can resize up as well as down
				tall = $this.height(); // Grab the height
				newHeight = Math.floor(tall / base) * base; // Make up a new height based on the baseline
				$this.css('maxHeight', newHeight); // Set it!
			}

			setbase(breakpoints); // Call on load

			$(window).resize(function(){ // And call again on resize.
				setbase(breakpoints);
			});

		});

	}

}) ( jQuery );