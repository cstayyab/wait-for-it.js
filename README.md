# wait-for-it.js
A JavaScript Library that allows you to execute function when a certain element gets added to the document

## Getting Started

If you want to use the latest version you can use jsDelivr CDN to import `wait-for-it.js` into your application as follows:

```html
<script src="https://cdn.jsdelivr.net/gh/cstayyab/wait-for-it.js@main/wait-for-it.js"></script>
```

Then you can just call `waitForElement` function with `selector` and a `callback` to see the [magic](#working).

It's just simple as that.


## Working

`wait-for-it.js` uses HTML [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to wait for the selectors registered to it. Whenever an element gets added to the document, if checks for the registered selectors and if it finds an element with that selector it executes your `callback` function and removes that `callback` from its queue to prevent retriggering.

And that is how the magic happens.
