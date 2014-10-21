var called_one = false;
var called_two = false;

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
jsListener.addListener(callMe, "someEventMessage");
jsListener.addListener(callMeAlso, "someEventMessage");

//call the listening functions
jsListener.callListeners("someEventMessage", "some message");

//later remove the listener
jsListener.removeListener(callMe, "someEventMessage");

//test for failures

if (jsListener.callObj["someEventMessage"].length > 1)
    console.log("ERROR: removing listener failed");

if (!called_one || !called_two)
    console.log("ERROR: function callback miss");