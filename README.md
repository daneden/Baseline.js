# Baseline.js

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

## Vanilla JS

There's also a vanilla JS version available, so there's no need to load jQuery. Simply include ```baseline.js``` in your page, and call it like so:

```javascript
baseline.init('img', 24); // Apply a 24px baseline to all images on the page
baseline.init('.content img', 30); // Apply a 30px baseline to all images inside .content
baseline.init('.content img', {0:24, 700:30}); // Apply a 24px baseline for all widths, 30px for widths above 700px
```

Thanks to [Ben Howdle](https://twitter.com/#!/benhowdle) for the vanilla JS version. You rock, Ben.

## License

Baseline.js is licensed under the [WTFPL license.](http://sam.zoy.org/wtfpl/)