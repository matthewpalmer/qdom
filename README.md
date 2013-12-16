Qdom
====

A fast and easy way of getting DOM elements without adding a large library like jQuery.

Example
=======

```js
<script src="qdom.js"></script>
<script>
var q = new Qdom();

// Based on class
var c = q.className('className'); // Returns an array of objects matching className

// Based on id
var i = q.id('idName'); // Returns an object matching idName

// Based on tag
var t = q.tag('tagName'); // Returns an array of objects matching tagName

</script>
```


**See also: `example.html`**

