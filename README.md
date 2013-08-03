# Baseline.js

Baseline.js is a simple jQuery / Zepto plugin for restoring baselines thrown off by odd image sizes.

Simply call the plugin like so, passing the height of your baseline as a variable. It even works on responsive designs!

```javascript
$('img').baseline(24); // Apply a 24px baseline to all images on the page
$('.content img').baseline(30); // Apply a 30px baseline to all images inside .content
```

You can also define multiple baselines for different breakpoints. Perfect for responsive design!

```javascript
$('.content img').baseline({ '0px': 24, '700px': 30 }); // Apply a 24px baseline for all widths, 30px for widths above 700px
```

## Vanilla JS

Baseline.js is also available without jQuery or Zepto.

```javascript
baseline('img', 24); // Apply a 24px baseline to all images on the page
baseline('.content img', 30); // Apply a 30px baseline to all images inside .content
baseline('.content img', {0:24, 700:30}); // Apply a 24px baseline for all widths, 30px for widths above 700px
```

The first parameter accepts either a selector string or one or more elements, e.g. selected through `document.getElementById()`.

The vanilla JS version was initially created by the rocking [Ben Howdle](https://twitter.com/benhowdle).

## License

Baseline.js is licensed under the [WTFPL license.](http://sam.zoy.org/wtfpl/)