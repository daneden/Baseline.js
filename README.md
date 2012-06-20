# Baseline.js

Baseline.js is a simple jQuery plugin for restoring baselines thrown off by odd image sizes.

Simple call the plugin like so, passing the height of your baseline as a variable. It even works on responsive designs!

```javascript
$('img').baseline(24); // Apply a 24px baseline to all images on the page
$('.content img').baseline(30); // Apply a 30px baseline to all images inside .content
```