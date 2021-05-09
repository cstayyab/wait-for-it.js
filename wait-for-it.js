/*********************************
* This Code is licensed under the terms of MIT License.
* To view the full license goto https://github.com/cstayyab/wait-for-it.js
**********************************/
var observeNodes = {};
var nodesLock = false;

function selectorCallbacks() {
    if(nodesLock) {
        setTimeout(selectorCallbacks, 100);
    }
    for (var selector in observeNodes) {
      if (observeNodes.hasOwnProperty(selector)) {
        if (document.querySelectorAll(selector).length > 0) {
            while(observeNodes[selector].length > 0) {
                cb = observeNodes[selector].pop();
                cb();
            }
        }
      }
    }
}

function waitForElement(selector, callback, timeout = 0) {
    nodesLock = true;
    if(observeNodes.hasOwnProperty(selector)) {
        observeNodes[selector].push(callback);
    } else {
        observeNodes[selector] = [callback];
    }
    if(timeout && timeout > 0) {
        setTimeout(function () {
            nodesLock = true;
            indexOfCb = observeNodes[selector].indexOf(callback);
            observeNodes[selector].splice(indexOfCb, 1);
            nodesLock = false;
            callback(true)
        }, timeout)
    }
    nodesLock = false;
}

var selectorObserver = new MutationObserver(selectorCallbacks);

selectorObserver.observe(document, {
  childList: true,
  subtree: true,
  attributes: true,
  characterData: false,
});
