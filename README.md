# Baseline.js

Now wraps images in a container and applies the baseline calculation with `overflow:hidden;`. You can then set `width:100%;` on the image and have it maintain it's aspect ratio as well as fill the full width.

Baseline.js is a simple jQuery plugin for restoring baselines thrown off by odd image sizes.

Simply call the plugin like so, passing the height of your baseline as a variable. It even works on responsive designs!

```javascript
$('img').baseline(24); // Apply a 24px baseline to all images on the page
$('.content img').baseline(30); // Apply a 30px baseline to all images inside .content
```

You can also define multiple baselines for different breakpoints. Perfect for responsive design!

```javascript
$('.content img').baseline({'0px':24, '700px':30}); // Apply a 24px baseline for all widths, 30px for widths above 700px
```

## License

Baseline.js is licensed under the [WTFPL license.](http://sam.zoy.org/wtfpl/)