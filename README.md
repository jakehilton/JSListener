JSListener
==========

A very small javascript library used to be able to broadcast and listen for custom javascript events. It allows for many listeners on the same event to listen and be called.

Using this is very powerful yet easy.. for example:

``` Javascript

//specify functions to call
function callMe(msg) {
    console.log("call me hit: " + msg);
    called_one = true;
}

function callMeAlso(msg) {
    console.log("call me also hit: " + msg);
    called_two = true;
}

//setup listener
var jsListener = new JSListener();
jsListener.addListener("someEventMessage", callMe);
jsListener.addListener("someEventMessage", callMeAlso);

//call the listening functions
jsListener.callListeners("someEventMessage", "some message");

//later remove the listener
jsListener.removeListener("someEventMessage", callMe);
```
